import {
  FaLaptopCode,
  FaRunning,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaResearchgate,
} from "react-icons/fa";
import type { AboutHighlight, Category, TechGroup } from "../../types/content";

/**
 * TODO(Martin): rewrite this in your own voice — it was drafted only from facts
 * already present elsewhere in this repo (Home headline, ExperienceData,
 * ResearchData, ProjectData). Nothing here is invented, but none of it is
 * phrased the way you would phrase it.
 */
export const aboutBio: string[] = [
  "I'm a fourth-year Computer Science student at FCSE Skopje, originally from Shtip. Most of my work sits where machine learning meets language models — feature-selection experiments, spiking neural networks, and a document pipeline built on locally-run LLMs.",
  "I'm currently a Machine Learning Researcher Intern at the Macedonian Academy of Sciences and Arts, looking at 3D vision-language models for medical imaging. Outside coursework I've spent years in scouting and student organisations, which is where most of what I know about organising people and sharing knowledge comes from.",
];

export const technologiesIcon = FaLaptopCode;

/** Curated from public/martin-janev-cv.pdf, following the CV's own grouping. */
export const techGroups: TechGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "SQL", "TypeScript"],
  },
  {
    label: "Machine Learning & NLP",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "JAX",
      "Ollama",
      "Hugging Face",
    ],
  },
  {
    label: "Data Science",
    items: ["Pandas", "NumPy", "Jupyter", "Matplotlib"],
  },
  {
    label: "Backend & Frontend",
    items: ["Spring Boot", "FastAPI", "Django", "Angular", "Firebase"],
  },
  {
    label: "Tooling",
    items: ["Git", "Docker", "PostgreSQL", "Bash"],
  },
];

export const hobbies: Category = {
  title: "Hobbies",
  icon: FaRunning,
  items: [
    "Reading books",
    "Knowledge sharing",
    "Volunteering",
    "Running",
    "Tennis",
    "Gaming",
    "Traveling",
  ],
};

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: FaGraduationCap,
    label: "Status",
    value: "4th year",
    detail: "BSc Computer Science, FCSE Skopje",
  },
  {
    icon: FaBriefcase,
    label: "Looking for",
    value: "Internships",
    detail: "Internship and job opportunities",
  },
  {
    icon: FaCode,
    label: "Project scope",
    value: "ML • LLMs • AI",
    detail: "Applied ML and LLM tooling",
  },
  {
    icon: FaResearchgate,
    label: "Research scope",
    value: "AI • Computer Science",
    detail: "Feature selection, spiking neural networks",
  },
];
