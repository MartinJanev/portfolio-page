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
  {
    label: "Strava",
    href: "https://www.strava.com/athletes/12345678",
    icon: FaStrava,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/MartinJanev",
    icon: FaReddit,
  },
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/MartinJanev",
    icon: FaSteam,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/MartinJanev",
    icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/MartinJanev",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MartinJanev",
    icon: FaFacebook,
  },
];
