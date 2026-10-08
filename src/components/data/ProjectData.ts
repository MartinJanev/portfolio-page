import type { ProjectItem } from "../../types/content";

export const projects: ProjectItem[] = [
  {
    title: "Platform for PhD studies",
    subtitle: "Web App",
    description:
      "A full-stack platform for managing doctoral admissions, with user roles, multiple language options, and rules for deadlines, mentor capacity, and valid application steps. It includes secure status tracking with role-based permissions and configurable eligibility requirements such as ECTS credits, GPA, and English proficiency.",
    techs: ["Java", "Spring Boot", "Docker"],
    link: "https://github.com/avonamolos/phd-admissions",
    featured: true,
  },
  {
    title: "Doc - Cleaner",
    subtitle: "Document Processing",
    description:
      "A tool for converting PDF documents to Markdown format, with support for preserving formatting and structure.",
    techs: ["Python", "Ollama", "IBM Docling", "Markdown", "FastAPI"],
    link: "https://github.com/MartinJanev/doc-cleaner",
  },
  {
    title: "PyCheckers",
    subtitle: "Artificial Intelligence",
    description:
      "Python / PyGame English Checkers game, that uses AI (minimax and expectimax + alpha-beta pruning) for opponent modeling. It features an opening book from PDN files, FEN support, and standard rules including forced captures and multi-jumps.",
    techs: ["Python", "Pandas", "PyGame", "AI"],
    link: "https://github.com/MartinJanev/PyCheckers",
  },
  {
    title: "Endomondo Spark Analysis",
    subtitle: "Data Engineering",
    description:
      "A data engineering project that analyzes Endomondo workout data using Apache Spark, providing insights into user activity patterns and trends.",
    techs: ["Apache Spark", "Python", "PySpark", "Pandas"],
    link: "https://github.com/MartinJanev/endomondo_spark_analysis",
  },
  {
    title: "MoodLens",
    subtitle: "Computer Vision",
    description:
      "A Computer Vision project for Emotion Recognition in Pictures & Video. The job is to train a model to recognize happiness, sadness, anger, fear, or surprise in images and videos.",
    techs: ["OpenCV", "Python", "PyTorch", "Pandas", "NumPy", "Matplotlib"],
    link: "https://github.com/MartinJanev/MoodLens",
  },
  {
    title: "EventifyNow",
    subtitle: "Web App",
    description:
      "Event management system built with Angular & Firebase—create, RSVP, and manage events through a clean, responsive UI.",
    techs: ["Angular", "TypeScript", "Firebase", "CKEditor"],
    link: "https://github.com/MartinJanev/event-management-system",
  },
];
