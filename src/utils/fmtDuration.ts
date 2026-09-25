/**
 * Human-readable length of an experience entry, e.g. "1 yr 7 mos".
 * Accepts the same "YYYY-MM" / "present" shape as fmtRange.
 */
export function fmtDuration(start: string, end: string): string {
  const [startYear, startMonth] = start.split("-").map(Number);

  let endYear: number;
  let endMonth: number;
  if (end === "present") {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  } else {
    [endYear, endMonth] = end.split("-").map(Number);
  }

  // Inclusive of both the start and end month, matching how CVs count tenure.
  const months = Math.max(
    1,
    (endYear - startYear) * 12 + (endMonth - (startMonth || 1)) + 1,
  );

  const years = Math.floor(months / 12);
  const rest = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest > 0) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);

  return parts.join(" ");
}
