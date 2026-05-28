import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const BIRTH_DATE = new Date("2004-04-27T00:00:00");

function getExactYears() {
  const now = new Date();
  const diffInMs = now.getTime() - BIRTH_DATE.getTime();
  return (diffInMs / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(9);
}

function getAge() {
  const now = new Date();
  let years = now.getFullYear() - BIRTH_DATE.getFullYear();
  let months = now.getMonth() - BIRTH_DATE.getMonth();
  let days = now.getDate() - BIRTH_DATE.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

function formatYearsOnly() {
  return `I am ${getAge().years} years old`;
}

function formatDetailedAge() {
  const { years, months, days } = getAge();
  let text = `I am ${years} years`;
  if (months > 0) text += `, ${months} months`;
  if (days > 0) text += `, ${days} days`;
  return `${text} old`;
}

export function useAgeDisplay() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ageText, setAgeText] = useState(
    () => `I am ${Math.floor(Number(getExactYears()))} years old`,
  );
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setAgeText(formatYearsOnly());
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const stopUpdatingAge = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setAgeText(formatYearsOnly());
  };

  const startUpdatingAge = () => {
    if (prefersReducedMotion) {
      setAgeText(formatYearsOnly());
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const update = () => setAgeText(formatDetailedAge());
    update();
    intervalRef.current = window.setInterval(update, 1000);
  };

  return { ageText, startUpdatingAge, stopUpdatingAge };
}
