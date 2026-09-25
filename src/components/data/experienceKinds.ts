import type { IconType } from "react-icons";
import { FaBriefcase, FaGraduationCap, FaHandsHelping } from "react-icons/fa";
import type { ExperienceKind } from "../../types/content";

/**
 * Shared by the Experience timeline and the volunteering dialog, so a kind's
 * colour and icon mean the same thing wherever an entry is rendered.
 */
export const experienceKinds: Record<
  ExperienceKind,
  { label: string; icon: IconType; color: string }
> = {
  work: { label: "Work", icon: FaBriefcase, color: "var(--kind-work)" },
  education: {
    label: "Education",
    icon: FaGraduationCap,
    color: "var(--kind-education)",
  },
  community: {
    label: "Community",
    icon: FaHandsHelping,
    color: "var(--kind-community)",
  },
};

export const kindOrder: ExperienceKind[] = ["work", "education", "community"];
