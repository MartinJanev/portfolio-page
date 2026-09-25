import type { IconType } from "react-icons";
import {
  FaFileLines,
  FaLayerGroup,
  FaBrain,
  FaEye,
  FaCode,
} from "react-icons/fa6";

export interface ProjectCategory {
  icon: IconType;
  /** Themeable band gradient built from the palette's glow tokens. */
  gradient: string;
}

/**
 * Drives each project card's header band. Gradients are composed from
 * --glow-green / --glow-purple so they follow the active theme, with the angle
 * and stops varied per category to keep the grid from looking uniform.
 */
export const projectCategories: Record<string, ProjectCategory> = {
  "Document Processing": {
    icon: FaFileLines,
    gradient:
      "linear-gradient(115deg, var(--glow-green), var(--glow-purple) 130%)",
  },
  "Web App": {
    icon: FaLayerGroup,
    gradient: "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
  },
  "Artificial Intelligence": {
    icon: FaBrain,
    gradient: "linear-gradient(135deg, var(--glow-purple), var(--glow-green))",
  },
  "Computer Vision": {
    icon: FaEye,
    gradient:
      "linear-gradient(200deg, var(--glow-purple), var(--glow-green) 120%)",
  },
};

export const fallbackCategory: ProjectCategory = {
  icon: FaCode,
  gradient: "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
};

export const projectCategory = (name?: string): ProjectCategory =>
  (name && projectCategories[name]) || fallbackCategory;
