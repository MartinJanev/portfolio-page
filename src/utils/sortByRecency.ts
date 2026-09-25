interface Dated {
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM" or "present"
}

const endValue = (end: string) =>
  end === "present" ? Infinity : new Date(end).getTime();

/**
 * Most recent first: primary key is the end date (an ongoing entry outranks
 * every fixed date), tie-broken by start date. Returns a new array.
 *
 * The ends are compared with an inequality check first because subtracting two
 * Infinity values yields NaN, which makes Array.prototype.sort unpredictable.
 */
export function sortByRecency<T extends Dated>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => {
    const endA = endValue(a.end);
    const endB = endValue(b.end);
    if (endA !== endB) return endB - endA;
    return new Date(b.start).getTime() - new Date(a.start).getTime();
  });
}
