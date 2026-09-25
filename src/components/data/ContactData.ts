import { FaLinkedin, FaGithub } from "react-icons/fa";
import type { ContactItem } from "../../types/content";

export const portfolioEmail = "janev.martin123@gmail.com";

export const cvFileName = "martin-janev-cv.pdf";
export const cvDownloadName = "Martin-Janev-CV.pdf";
export const cvUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${cvFileName}`;

export const contactData: ContactItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-janev1/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/MartinJanev", icon: FaGithub },
];
