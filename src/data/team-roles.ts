import colors from "../styles/team-colors.module.scss";

const roles = {
  pm: {
    label: "PM",
    term: "PM",
  },
  lead: {
    label: "Team Lead",
    term: "Team Lead",
  },
  system: {
    label: "Системный аналитик",
    term: "Системный аналитик",
  },
  business: {
    label: "Бизнес-аналитик",
    term: "Бизнес-аналитик",
  },
  ml: {
    label: "ML-инженеры",
    term: "ML-инженеры",
  },
  frontend: {
    label: "Frontend-разработчик",
    term: "Frontend-разработчик",
  },
  backend: {
    label: "Backend-разработчик",
    term: "Backend-разработчик",
  },
  mobile: {
    label: "Mobile-разработчик",
    term: "Mobile-разработчик",
  },
  qa: {
    label: "QA",
    term: "QA",
  },
  tester: {
    label: "Тестировщик",
    term: "Тестировщик",
  },
  onec: {
    label: "1С-разработчик",
    term: "1С-разработчик",
  },
  designer: {
    label: "Дизайнер",
    term: "Дизайнер",
  },
} as const;

export type TeamRoleId = keyof typeof roles;

function roleColor(id: TeamRoleId): string {
  const color = colors[id];
  if (!color) throw new Error(`Missing team color: ${id}`);
  return color;
}

export const teamRoles = Object.fromEntries(
  Object.entries(roles).map(([id, role]) => [
    id,
    { ...role, color: roleColor(id as TeamRoleId) },
  ]),
) as Record<TeamRoleId, { label: string; term: string; color: string }>;
