import type { IconType } from "react-icons";
import { FaJava, FaDatabase, FaChartArea } from "react-icons/fa6";
import {
  SiPython,
  SiPytorch,
  SiNumpy,
  SiOllama,
  SiScikitlearn,
  SiSpringboot,
  SiPandas,
  SiMarkdown,
  SiFastapi,
  SiDocker,
  SiOpencv,
  SiAngular,
  SiTypescript,
  SiFirebase,
  SiCkeditor4,
  SiNvidia,
  SiNumba,
  SiCplusplus,
  SiTensorflow,
  SiHuggingface,
  SiJupyter,
  SiDjango,
  SiGit,
  SiGnubash,
  SiPostgresql,
} from "react-icons/si";

/**
 * Tool/technology name to logo. Single source of truth, shared by About and
 * Projects. Abstract topics ("Graph Theory", "Bayesian Statistics") are left
 * out on purpose — they fall back to Tag's dot, which keeps concrete tooling
 * visually distinct from concepts.
 */
export const techIcons: Record<string, IconType> = {
  Python: SiPython,
  PyTorch: SiPytorch,
  NumPy: SiNumpy,
  Ollama: SiOllama,
  "Scikit-learn": SiScikitlearn,
  Java: FaJava,
  SQL: FaDatabase,
  "Spring Boot": SiSpringboot,
  Pandas: SiPandas,
  Matplotlib: FaChartArea,
  Markdown: SiMarkdown,
  FastAPI: SiFastapi,
  Docker: SiDocker,
  OpenCV: SiOpencv,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  Firebase: SiFirebase,
  CKEditor: SiCkeditor4,
  CUDA: SiNvidia,
  Numba: SiNumba,
  "C++": SiCplusplus,
  TensorFlow: SiTensorflow,
  "Hugging Face": SiHuggingface,
  Jupyter: SiJupyter,
  Django: SiDjango,
  Git: SiGit,
  Bash: SiGnubash,
  PostgreSQL: SiPostgresql,
};

export const techIcon = (name: string): IconType | undefined => techIcons[name];
