import { legacySkillAliases, skills } from "../data/skills.ts";
import type { SkillId } from "../data/skills.ts";

const idsByLabel = Object.fromEntries(
  Object.entries(skills).map(([id, skill]) => [skill.label, id as SkillId]),
);

export function isSkillId(value: string): value is SkillId {
  return Object.hasOwn(skills, value);
}

export function readSkillsFromUrl(url: URL): SkillId[] {
  const values = url.searchParams
    .getAll("skills")
    .flatMap((value) => value.split(","));
  return [
    ...new Set(
      values.flatMap((value) => {
        const key = value.trim();
        const id = isSkillId(key)
          ? key
          : (legacySkillAliases[key] ?? idsByLabel[key]);
        return id ? [id] : [];
      }),
    ),
  ];
}

export function writeSkillsToUrl(url: URL, selected: readonly SkillId[]): URL {
  const result = new URL(url.href);
  if (selected.length)
    result.searchParams.set("skills", [...new Set(selected)].join(","));
  else result.searchParams.delete("skills");
  return result;
}
