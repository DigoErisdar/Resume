export type TextNode =
  | { kind: "text"; text: string }
  | { kind: "term"; id: string; text: string }
  | { kind: "strong"; children: TextNode[] }
  | { kind: "link"; href: string; children: TextNode[] };

/** Only our explicit markup is interpreted. HTML is always plain text. */
export function parseRichText(text: string): TextNode[] {
  const nodes: TextNode[] = [];
  const pattern =
    /\[(term|link)=([^\]\n]+)\]([\s\S]*?)\[\/\1\]|\[strong\]([\s\S]*?)\[\/strong\]/g;
  let offset = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index!;
    if (index > offset)
      nodes.push({ kind: "text", text: text.slice(offset, index) });
    const [, kind, value, content, strong] = match;
    if (strong !== undefined)
      nodes.push({ kind: "strong", children: parseRichText(strong) });
    else if (kind === "term")
      nodes.push({ kind: "term", id: value!, text: content! });
    else if (/^https?:\/\//i.test(value!))
      nodes.push({
        kind: "link",
        href: value!,
        children: parseRichText(content!),
      });
    else nodes.push({ kind: "text", text: match[0] });
    offset = index + match[0].length;
  }
  if (offset < text.length)
    nodes.push({ kind: "text", text: text.slice(offset) });
  return nodes;
}
