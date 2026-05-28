export function fmtRange(start: string, end: string) {
  const fmt = (ym: string) => {
    const [y, m] = ym.split("-").map(Number);
    return new Date(y, (m || 1) - 1).toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  return `${fmt(start)} — ${end === "present" ? "Present" : fmt(end)}`;
}
