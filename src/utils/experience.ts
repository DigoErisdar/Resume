import { skills } from "../data/skills.ts";
import type { SkillId } from "../data/skills.ts";
import type { Company, Project } from "../types/resume.ts";
import { mergedMonths } from "./dates.ts";

export const skillIds = Object.keys(skills) as SkillId[];

export function projectMatches(
  project: Project,
  selected: readonly SkillId[],
): boolean {
  return (
    !selected.length ||
    selected.some(
      (id) => project.skills.includes(id) || project.domains.includes(id),
    )
  );
}

export function createExperienceIndex(companies: readonly Company[]) {
  const companySkills = new Map(
    companies.map((company) => [
      company.id,
      new Set(
        company.projects.flatMap((project) => [
          ...project.skills,
          ...project.domains,
        ]),
      ),
    ]),
  );
  const matches = (company: Company, selected: readonly SkillId[]) =>
    selected.filter((id) => companySkills.get(company.id)?.has(id));
  const relevant = (company: Company, selected: readonly SkillId[]) =>
    !selected.length || matches(company, selected).length > 0;
  const months = (selected: readonly SkillId[]) =>
    mergedMonths(companies.filter((company) => relevant(company, selected)));
  const skillMonths = new Map(skillIds.map((id) => [id, months([id])]));
  return { matches, relevant, months, skillMonths };
}

export function skillMatchesQuery(id: SkillId, query: string): boolean {
  const normalized = query.trim().toLocaleLowerCase("ru");
  return (
    !normalized ||
    `${skills[id].label} ${skills[id].search}`
      .toLocaleLowerCase("ru")
      .includes(normalized)
  );
}
