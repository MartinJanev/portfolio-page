// src/types/content.ts
import type { IconType } from "react-icons";

export interface ContactItem {
  label: string;
  href: string;
  icon: IconType;
}

export interface ExperienceItem {
  title: string;
  org?: string;
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM" or "present"
  location?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  achievements?: string[];
  subOrgs?: {
    org: string;
    start: string; // "YYYY-MM"
    end: string; // "YYYY-MM" or "present"
    location?: string;
    description?: string;
    bullets?: string[];
    tags?: string[];
  }[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  techs?: string[];
  link?: string;
}

export interface ResearchItem {
  title: string;
  subtitle?: string;
  description: string;
  techs?: string[];
  link?: string;
  publishedDate?: string;
  status?: string;
}

export type Category = {
  title: string;
  icon: IconType;
  columns: 1 | 2;
  limit: number;
  items: string[];
};
