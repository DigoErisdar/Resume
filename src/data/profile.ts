import type { Profile } from "../types/resume.ts";

export const profile = {
  firstName: "Даниил",
  lastName: "Галкин",
  position: "Системный аналитик",
  birthDate: {
    year: 1998,
    month: 10,
    day: 30,
  },
  location: "Новороссийск, РФ",
  photo: "./avatar.png",
  summary:
    "Системный аналитик с бэкграундом в разработке. Могу совмещать аналитику с разработкой на [term=Django]Django[/term]/[term=Vue.js]Vue[/term]: собрать требования, спроектировать решение, описать [term=REST API]API[/term] и интеграции, а при необходимости — самостоятельно реализовать часть функционала.",
  direction:
    "Развиваюсь в сторону системной архитектуры: проектирования интеграций, моделей данных и взаимодействия компонентов.",
  workFormat: "Удалённо, гибрид или офис",
  relocation: "Готов обсудить переезд в любой город или страну",
  languages: "Русский · Английский — B1",
  activeSearch: true,
  updatedAt: "2026-10-30",
} satisfies Profile;

export const careerBreak = {
  title: "Перерыв в работе",
  subtitle: "Срочная военная служба и поиск работы",
  start: "2021-07",
  end: "2022-10",
  description:
    "Проходил срочную военную службу. После завершения службы искал новую работу в IT.",
};

export const education = {
  institution: "Вологодский кооперативный колледж",
  speciality: "Специалист по информационным системам",
  year: 2020,
};

export const contacts = [
  { id: "telegram", label: "Telegram", href: "https://t.me/DigoErisdar" },
  { id: "github", label: "GitHub", href: "https://github.com/DigoErisdar" },
] as const;
