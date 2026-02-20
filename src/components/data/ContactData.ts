import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaReddit,
  FaSteam,
  FaStrava,
  FaDiscord,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import type { ContactItem } from "../../types/content";

export const contactData: ContactItem[] = [
  {
    label: "Discord",
    href: "https://discord.com/users/MartinJanev",
    icon: FaDiscord,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-janev1/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/MartinJanev", icon: FaGithub },
];
