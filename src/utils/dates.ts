export const NBSP = "\u00a0";
const monthNames = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export function plural(
  number: number,
  forms: readonly [string, string, string],
): string {
  const mod10 = number % 10;
  const mod100 = number % 100;
  return forms[
    mod100 > 10 && mod100 < 20
      ? 2
      : mod10 === 1
        ? 0
        : mod10 > 1 && mod10 < 5
          ? 1
          : 2
  ];
}

export function monthIndex(value: string): number {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match || Number(match[2]) < 1 || Number(match[2]) > 12)
    throw new Error(`Invalid month: ${value}`);
  return Number(match[1]) * 12 + Number(match[2]) - 1;
}

export function mergedMonths(
  periods: readonly { start: string; end: string }[],
): number {
  const intervals = periods
    .map((period) => ({
      start: monthIndex(period.start),
      end: monthIndex(period.end),
    }))
    .sort((a, b) => a.start - b.start);
  let total = 0;
  let current: { start: number; end: number } | undefined;
  for (const interval of intervals) {
    if (interval.end < interval.start)
      throw new Error("End month precedes start month");
    if (!current) current = { ...interval };
    else if (interval.start <= current.end + 1)
      current.end = Math.max(current.end, interval.end);
    else {
      total += current.end - current.start + 1;
      current = { ...interval };
    }
  }
  return total + (current ? current.end - current.start + 1 : 0);
}

export function formatDuration(months: number): string {
  if (months === 0) return `0${NBSP}месяцев`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [
    ...(years
      ? [`${years}${NBSP}${plural(years, ["год", "года", "лет"])}`]
      : []),
    ...(rest
      ? [`${rest}${NBSP}${plural(rest, ["месяц", "месяца", "месяцев"])}`]
      : []),
  ].join(NBSP);
}

export function formatMonth(value: string): string {
  const index = monthIndex(value);
  return `${monthNames[index % 12]}${NBSP}${Math.floor(index / 12)}`;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(`${value}T12:00:00Z`))
    .replace(/ г\.$/, "");
}
