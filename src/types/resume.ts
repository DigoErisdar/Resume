import type { SkillId } from "../data/skills";
import type { TeamRoleId } from "../data/team-roles";
import type { LogoKey } from "../data/logos";

export interface TeamGroup {
  roles: TeamRoleId[];
  /** People, not role assignments. A combined role is counted once. */
  count: number;
}

export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  domains: SkillId[];
  skills: SkillId[];
  responsibility: string[];
  contributions: string[];
  result?: string;
  team: TeamGroup[];
}

export interface Company {
  id: string;
  name: string;
  website: string;
  logo: string;
  logoKey: LogoKey;
  hideName: boolean;
  position: string;
  start: string;
  end: string;
  workFormat: string;
  employment: string;
  verified: boolean;
  hasRecommendation?: boolean;
  defaultCollapsed: boolean;
  projects: Project[];
}

export interface FilterCategory {
  id: string;
  label: string;
  defaultOpen: boolean;
  skills: SkillId[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  position: string;
  birthDate: { year: number; month: number; day: number };
  location: string;
  photo: string;
  summary: string;
  direction: string;
  workFormat: string;
  relocation: string;
  languages: string;
  activeSearch: boolean;
  updatedAt: string;
}
