import type { Plugin } from "vite";
import { profile, contacts, education } from "../src/data/profile.ts";
import { projects } from "../src/data/projects.ts";
import { parseRichText } from "../src/utils/rich-text.ts";
import type { TextNode } from "../src/utils/rich-text.ts";
import { employmentPeriods } from "../src/data/employment-periods.ts";
import { formatDuration, mergedMonths } from "../src/utils/dates.ts";

function plain(nodes: TextNode[]): string {
  return nodes
    .map((node) => ("children" in node ? plain(node.children) : node.text))
    .join("");
}
function escape(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );
}

export function seoPlugin(siteUrl?: string): Plugin {
  let canonical: string | undefined;
  if (siteUrl) {
    const url = new URL(siteUrl);
    if (!["https:", "http:"].includes(url.protocol))
      throw new Error("SITE_URL must be an HTTP(S) URL");
    url.search = "";
    url.hash = "";
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    canonical = url.href;
  }
  const name = `${profile.firstName} ${profile.lastName}`;
  const description = plain(parseRichText(profile.summary));
  const title = `${profile.position} (${formatDuration(mergedMonths(Object.values(employmentPeriods))).replaceAll("\u00a0", " ")} опыта)`;
  return {
    name: "resume-seo",
    transformIndexHtml(html) {
      const data = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        ...(canonical ? { url: canonical } : {}),
        name: `${name} — ${profile.position}`,
        mainEntity: {
          "@type": "Person",
          name,
          jobTitle: profile.position,
          description: plain(parseRichText(profile.summary)),
          sameAs: contacts.map((contact) => contact.href),
          ...(canonical ? { url: canonical } : {}),
        },
      };
      const tags = [
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow, max-image-preview:large",
          },
        },
        { tag: "meta", attrs: { property: "og:type", content: "profile" } },
        { tag: "meta", attrs: { property: "og:locale", content: "ru_RU" } },
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: title,
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:description", content: description },
        },
        {
          tag: "meta",
          attrs: { property: "og:image", content: profile.photo },
        },
        {
          tag: "meta",
          attrs: { property: "og:image:alt", content: `Фотография ${name}` },
        },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary" } },
        {
          tag: "meta",
          attrs: {
            name: "twitter:title",
            content: title,
          },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:description", content: description },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:image", content: profile.photo },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:image:alt", content: `Фотография ${name}` },
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(data).replace(/</g, "\\u003c"),
        },
        ...(canonical
          ? [
              { tag: "link", attrs: { rel: "canonical", href: canonical } },
              {
                tag: "meta",
                attrs: { property: "og:url", content: canonical },
              },
            ]
          : []),
      ];
      const fallback = `<article><h1>${escape(name)} — ${escape(profile.position)}</h1><p>${escape(plain(parseRichText(profile.summary)))}</p><h2>Проекты и опыт работы</h2>${projects.map((project) => `<section><h3>${escape(project.title)}</h3><p>${escape(plain(parseRichText(project.description)))}</p><h4>Достижения</h4><ul>${project.contributions.map((item) => `<li>${escape(plain(parseRichText(item)))}</li>`).join("")}</ul><h4>Обязанности</h4><ul>${project.responsibility.map((item) => `<li>${escape(plain(parseRichText(item)))}</li>`).join("")}</ul></section>`).join("")}<h2>Образование</h2><p>${escape(education.institution)} — ${escape(education.speciality)}</p><h2>Контакты</h2>${contacts.map((contact) => `<p><a href="${escape(contact.href)}">${escape(contact.label)}</a></p>`).join("")}</article>`;
      return {
        html: html.replace(
          /<noscript\b[\s\S]*?<\/noscript\s*>/,
          `<noscript>${fallback}</noscript>`,
        ),
        tags,
      };
    },
    generateBundle() {
      if (!canonical) return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(canonical)}</loc></url></urlset>`,
      });
      // robots.txt is effective only at the host root, not a repository subpath.
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`,
      });
    },
  };
}
