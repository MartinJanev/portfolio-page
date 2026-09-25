// src/types/content.ts
import type { IconType } from "react-icons";

export interface ContactItem {
  label: string;
  href: string;
  icon: IconType;
}

/** Distinguishes paid/research roles from study and from community work. */
export type ExperienceKind = "work" | "education" | "community";

export interface ExperienceItem {
  title: string;
  org?: string;
  kind: ExperienceKind;
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM" or "present"
  location?: string;
  description?: string;
  bullets?: string[];
  /**
   * Named sub-roles held within the same commitment, each with its own bullets.
   * A flat `bullets` array cannot say which bullet belongs to which role.
   */
  roles?: { title: string; bullets: string[] }[];
  tags?: string[];
  achievements?: string[];
  /** External page for the role or event. */
  link?: string;
}

export interface ProjectItem {
  title: string;
  /** Doubles as the card's category badge; see data/projectCategories.ts. */
  subtitle?: string;
  description: string;
  techs?: string[];
  link?: string | null;
  /** Renders as the wide hero card at the top of the Projects grid. */
  featured?: boolean;
}

export interface ResearchItem {
  title: string;
  subtitle?: string;
  description: string;
  techs?: string[];
  /** Code repository. */
  link?: string | null;
  /** Direct link to a PDF/DOI, when one exists. */
  paperLink?: string | null;
  year?: string;
  venue?: string;
  status?: string;
}

export type Category = {
  title: string;
  icon: IconType;
  items: string[];
};

export type TechGroup = {
  label: string;
  items: string[];
};

export type AboutHighlight = {
  icon: IconType;
  label: string;
  /** Short, scannable value. Keep it a few words at most. */
  value: string;
  /** Optional longer form shown beneath the value. */
  detail?: string;
};
