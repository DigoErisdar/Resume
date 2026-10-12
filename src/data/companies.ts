import type { Company } from "../types/resume";
import { projects } from "./projects";
import { logos } from "./logos";
import { employmentPeriods } from "./employment-periods";

const records: Array<Omit<Company, "projects"> & { projectIds: string[] }> = [
  {
    id: "ventra",
    name: "Ventra IT Solutions",
    website: "https://ventra.ru/it/",
    logo: "logos/ventra.png",
    logoKey: "ventra",
    hideName: false,
    position: "Системный аналитик",
    ...employmentPeriods.ventra,
    workFormat: "Удалённо",
    employment: "Полный рабочий день",
    verified: true,
    hasRecommendation: true,
    defaultCollapsed: false,
    projectIds: ["ventra-merch-ir", "ventra-employee"],
  },
  {
    id: "lamoda",
    name: "Lamoda Tech",
    website: "https://latech.ru/",
    logo: "logos/lamoda-tech.png",
    logoKey: "lamoda-tech",
    hideName: false,
    position:
      "[term=Frontend-разработчик]Frontend-разработчик[/term] / [term=Системный аналитик]Системный аналитик[/term]",
    ...employmentPeriods.lamoda,
    workFormat: "Удалённо",
    employment: "Полный рабочий день",
    verified: true,
    defaultCollapsed: false,
    projectIds: ["lamoda-project"],
  },
  {
    id: "rostelecom",
    name: "Ростелеком ИТ",
    website: "https://www.rtkit.ru/",
    logo: "logos/rtkit.png",
    logoKey: "rtkit",
    hideName: false,
    position: "[term=Frontend-разработчик]Frontend-разработчик[/term]",
    ...employmentPeriods.rostelecom,
    workFormat: "Удалённо",
    employment: "Полный рабочий день",
    verified: true,
    defaultCollapsed: true,
    projectIds: ["rostelecom-project"],
  },
  {
    id: "memorial",
    name: "ЦМИРиТ",
    website: "https://cmirit.ru/",
    logo: "logos/cmirit.svg",
    logoKey: "cmirit",
    hideName: true,
    position: "Ведущий [term=Fullstack]Fullstack[/term]-разработчик",
    ...employmentPeriods.memorial,
    workFormat: "Офис",
    employment: "Полный рабочий день",
    verified: true,
    defaultCollapsed: true,
    projectIds: ["memorial-project"],
  },
  {
    id: "placestart",
    name: "PLACESTART",
    website: "https://place-start.ru/",
    logo: "logos/placestart.svg",
    logoKey: "placestart",
    hideName: true,
    position: "[term=Fullstack]Fullstack[/term]-разработчик",
    ...employmentPeriods.placestart,
    workFormat: "Офис",
    employment: "Полный рабочий день",
    verified: true,
    defaultCollapsed: true,
    projectIds: ["placestart-project"],
  },
];

export const companies: Company[] = records.map(
  ({ projectIds, ...company }) => ({
    ...company,
    logo: (() => {
      const logo = logos[company.logoKey];
      if (!logo) throw new Error(`Unknown logo: ${company.logoKey}`);
      return logo;
    })(),
    projects: projectIds.map((id) => {
      const project = projects.find((item) => item.id === id);
      if (!project) throw new Error("Unknown project: " + id);
      return project;
    }),
  }),
);
