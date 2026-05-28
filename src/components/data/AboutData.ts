import {
  FaLaptopCode,
  FaHandsHelping,
  FaRunning,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaResearchgate,
} from "react-icons/fa";
import type { AboutHighlight, Category } from "../../types/content";

const limitOnItems = 6;

export const aboutCategories: Category[] = [
  {
    title: "Technologies",
    icon: FaLaptopCode,
    columns: 2,
    limit: limitOnItems,
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Java",
      "OpenCV",
      "Spring Boot",
      "Jupyter Notebook",
      "Git",
    ],
  },
  {
    title: "Volunteering",
    icon: FaHandsHelping,
    columns: 1,
    limit: 4,
    items: ["Equinox Scout Shtip", "Scout Association of Macedonia"],
  },
  {
    title: "Hobbies",
    icon: FaRunning,
    columns: 2,
    limit: limitOnItems,
    items: [
      "Reading",
      "Volunteering",
      "Running",
      "Programming",
      "Tennis",
      "Football",
    ],
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: FaGraduationCap,
    label: "Status",
    value: "Student at FCSE Skopje",
  },
  {
    icon: FaCode,
    label: "Project scope",
    value: "ML • RL • AI",
  },
  {
    icon: FaBriefcase,
    label: "Looking for",
    value: "Internship and job opportunities",
  },
  {
    icon: FaResearchgate,
    label: "Research scope",
    value: "AI • Data Science • Formal Language",
  },
];
