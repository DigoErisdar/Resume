import test from "node:test";
import assert from "node:assert/strict";
import {
  mergedMonths,
  formatDuration,
  formatMonth,
} from "../src/utils/dates.ts";
import { readSkillsFromUrl, writeSkillsToUrl } from "../src/utils/skill-url.ts";
import { projects } from "../src/data/projects.ts";
import { skills } from "../src/data/skills.ts";
import {
  createExperienceIndex,
  projectMatches,
  skillMatchesQuery,
} from "../src/utils/experience.ts";
import type { Company } from "../src/types/resume.ts";

test("Project matching uses OR semantics and leaves all projects relevant without filters", () => {
  const merch = projects[0]!;
  const employee = projects[1]!;
  assert.equal(projectMatches(merch, []), true);
  assert.equal(projectMatches(merch, ["fmcg"]), true);
  assert.equal(projectMatches(employee, ["fmcg"]), false);
  assert.equal(projectMatches(employee, ["fmcg", "sql"]), true);
});

test("Experience index uses employer periods and deduplicates overlaps", () => {
  const base = {
    name: "Test",
    website: "",
    logo: "",
    logoKey: "ventra" as const,
    hideName: false,
    position: [],
    workFormat: "",
    employment: "",
    verified: false,
    defaultCollapsed: false,
  };
  const fixtures: Company[] = [
    {
      ...base,
      id: "first",
      start: "2025-01",
      end: "2025-03",
      projects: [projects[0]!],
    },
    {
      ...base,
      id: "second",
      start: "2025-03",
      end: "2025-05",
      projects: [projects[1]!],
    },
  ];
  const index = createExperienceIndex(fixtures);
  assert.equal(index.months([]), 5);
  assert.equal(index.months(["fmcg"]), 3);
  assert.equal(index.months(["fmcg", "sql"]), 5);
  assert.equal(index.skillMonths.get("fmcg"), 3);
  assert.deepEqual(index.matches(fixtures[0]!, ["fmcg", "jwt"]), ["fmcg"]);
});

test("Skill search ignores case and whitespace", () => {
  assert.equal(skillMatchesQuery("sql", " SQL "), true);
  assert.equal(skillMatchesQuery("sql", ""), true);
  assert.equal(skillMatchesQuery("sql", "unmatched query"), false);
});

test("Experience counts inclusive months without overlapping dates twice", () => {
  assert.equal(mergedMonths([]), 0);
  assert.equal(mergedMonths([{ start: "2025-10", end: "2026-10" }]), 13);
  assert.equal(
    mergedMonths([
      { start: "2024-09", end: "2025-10" },
      { start: "2025-10", end: "2026-10" },
    ]),
    26,
  );
  assert.throws(() => mergedMonths([{ start: "2026-01", end: "2025-01" }]));
});

test("Dates and duration use nonbreaking spaces", () => {
  assert.equal(formatMonth("2021-07"), "июль\u00a02021");
  assert.equal(formatDuration(13), "1\u00a0год\u00a01\u00a0месяц");
  assert.equal(formatDuration(0), "0\u00a0месяцев");
});

test("Skill URLs canonicalize old labels and preserve unrelated state", () => {
  const url = new URL(
    "https://example.com/resume/?skills=SQL,sql,unknown&skills=fmcg&mode=preview#contacts",
  );
  assert.deepEqual(readSkillsFromUrl(url), ["sql", "fmcg"]);
  const updated = writeSkillsToUrl(url, ["sql", "fmcg"]);
  assert.equal(updated.searchParams.get("skills"), "sql,fmcg");
  assert.equal(updated.searchParams.get("mode"), "preview");
  assert.equal(updated.hash, "#contacts");
  assert.equal(writeSkillsToUrl(updated, []).searchParams.has("skills"), false);
});

test("All project filters reference registered skills and team counts are valid", () => {
  assert.equal(projects.length, 6);
  for (const project of projects) {
    for (const id of [...project.skills, ...project.domains])
      assert.ok(Object.hasOwn(skills, id), `${project.id}: ${id}`);
    for (const group of project.team) {
      assert.ok(Number.isInteger(group.count) && group.count > 0);
      assert.ok(group.roles.length > 0);
    }
  }
  assert.deepEqual(
    projects.map((project) =>
      project.team.reduce((total, group) => total + group.count, 0),
    ),
    [17, 5, 20, 26, 4, 3],
  );
});
