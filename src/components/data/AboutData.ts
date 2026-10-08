import {
  FaLaptopCode,
  FaRunning,
  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa";
import type { AboutHighlight, Category, TechGroup } from "../../types/content";

export const aboutBio: string[] = [
  "I'm a fourth-year Computer Science student at FCSE Skopje, originally from Shtip. I'm drawn to problems where a good model can actually make a difference for someone, which is why so much of my work has ended up in healthcare, from early sepsis warning to Parkinson's telemonitoring. I care as much about why a model works as whether it does, so I lean towards interpretable methods and honest comparisons over impressive-looking numbers.",
  "I'm currently a <strong>Machine Learning Researcher Intern</strong> at the Macedonian Academy of Sciences and Arts, where I'm working with 3D vision-language models for medical imaging. ",
  "Apart from research and faculty work, I've also been involved in various extracurricular activities. Years spent in scouting and student organisations have also taught me how to lead teams, organise initiatives, and share knowledge effectively.",
];

export const technologiesIcon = FaLaptopCode;

export const techGroups: TechGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "SQL", "TypeScript"],
  },
  {
    label: "Machine Learning & Data",
    items: [
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
      "Ollama",
      "Pandas",
      "NumPy",
      "Apache Spark",
    ],
  },
  {
    label: "Web & Infrastructure",
    items: ["Spring Boot", "FastAPI", "Angular", "Docker", "PostgreSQL"],
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
    value: "Paid internships",
    detail: "Internship and job opportunities",
  },
  {
    icon: FaLightbulb,
    label: "Focus",
    value: "Machine learning aimed at real problems",
    detail: [
      "Predicting sepsis early with interpretable time-series models",
      "Reading 3D medical scans with vision-language models",
      "Studying how agents bluff and cooperate in the game of Mafia",
      "Converting PDFs into structured Markdown with a local LLM",
    ],
    wide: true,
  },
];
