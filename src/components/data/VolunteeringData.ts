import { FaHandsHelping } from "react-icons/fa";
import type { ExperienceItem } from "../../types/content";

/** Shared by the About tile and the volunteering dialog. */
export const volunteeringHeading = {
  title: "Volunteering",
  icon: FaHandsHelping,
};

/**
 * Kept out of ExperienceData so the timeline stays work + study.
 * Event entries, dates and bullets come from public/martin-janev.pdf.
 */
export const volunteeringRoles: ExperienceItem[] = [
  {
    title: "EESTEC LC Skopje",
    org: "EESTEC LC Skopje",
    kind: "community",
    start: "2023-10",
    end: "present",
    location: "Skopje, Macedonia",
    description:
      "Running workshops and event logistics for the local EESTEC committee, alongside student community building.",
    roles: [
      {
        title: "Workshop Speaker at Back to Basics",
        bullets: [
          "Mentored 40+ students in Structural Programming, providing personalized guidance, curated and targeted exercise sets to reinforce complex coursework and troubleshooting for midterm and final exam preparation.",
        ],
      },
      {
        title: "Head of Logistics at EESTEC Academy Robotics",
        bullets: [
          "Led logistical operations for the EESTEC Academy Robotics event, ensuring the seamless coordination of resources for over 50 participants.",
        ],
      },
    ],
    tags: ["Volunteering", "Teamwork", "Workshops", "Logistics", "Mentorship"],
  },
  {
    title: "Volunteer at SIM",
    org: "Scout Association of Macedonia",
    kind: "community",
    start: "2020-01",
    end: "present",
    location: "Macedonia, Worldwide",
    description:
      "Volunteering in various scouting activities and events, promoting youth engagement, community service and development throught many workshops, activities and events.",
    bullets: [
      "Strengthened community ties through outreach programs",
      "Assisted in organizing national and international scout events",
      "Volunteered at the 13th Macedonian Scout Jamboree, a camp with Ukranian refugees and an inclusive camp for people with special needs",
    ],
    tags: [
      "Volunteering",
      "Youth Engagement",
      "Community Service",
      "Inclusion",
    ],
    achievements: [
      "Successfully organized a local scout camp",
      "Increased youth participation in local events",
      "Promoted Macedonian culture, traditions, and values through scouting activities in diverse communities through Europe",
    ],
  },
  {
    title: "Scout Member",
    org: "Equinox Scout Shtip",
    kind: "community",
    start: "2018-09",
    end: "present",
    location: "Shtip, Macedonia",
    description:
      "Contributed to a community of scouts in organizing events, developing leadership skills, and promoting informal education among youth.",
    bullets: [
      "Led youth leadership initiatives and training sessions",
      "Organized and coordinated multiple community events",
      "Fostered teamwork through group activities and challenges",
      "Engaged with local community for outreach and service projects",
    ],
    tags: ["Leadership", "Organization", "Teamwork", "Community", "Mentorship"],
    achievements: [
      "Organized 10+ local events",
      "Mentored new team members",
      "Developed training materials for youth programs",
    ],
  },
  {
    title: "What The Stack",
    kind: "community",
    start: "2026-09",
    end: "2026-09",
    location: "Skopje, Macedonia",
    description:
      "Front-of-house and registration for the What The Stack conference.",
    bullets: [
      "Managed the on-site registration desk, processing participant check-ins and badge distribution",
      "Served as a general point of contact for attendees and organizers throughout the event, resolving questions and handling issues as they came up across sessions.",
      "Set the tone on the floor as an energetic, approachable presence — welcoming participants, keeping engagement high between sessions, and contributing to the event's overall atmosphere.",
    ],
    tags: ["Conference", "Registration", "Attendee Support", "Community"],
    link: "https://wts.sh",
  },
  {
    title: "AI Tech Summit",
    kind: "community",
    start: "2026-09",
    end: "2026-09",
    location: "Skopje, Macedonia",
    description:
      "Logistics and technical support for the AI Tech Summit and its student hackathon.",
    bullets: [
      "Provided logistical and resource support for a seamless attendee experience, oversaw post-session venue upkeep for a clean and sustainable event, and attended technical sessions to gain industry insights from key speakers and subject matter experts.",
      "Established and administered the summit's GitHub organization, setting up repository structure, access permissions, and contribution guidelines for the participants of the AI Student Hackathon.",
      "Helped combine the summit's attendee-facing web tools, including a live event agenda and a RAG-based assistant that answered questions from session abstracts, speaker bios, and logistics FAQs.",
    ],
    tags: ["Logistics", "GitHub Administration", "RAG", "Community"],
    link: "https://techsummit.ai/",
  },
  {
    title: "Startup Revolution AI Summit",
    kind: "community",
    start: "2026-10",
    end: "2026-10",
    location: "Skopje, Macedonia",
    description:
      "Stage support and logistics for the Startup Revolution AI Summit, a conference focused on AI and entrepreneurship.",
    bullets: [
      "Provided stage support and technical assistance during presentations, ensuring smooth transitions between speakers and maintaining the event's schedule.",
      "Engaged with attendees to gather feedback and address any concerns, contributing to a positive event experience.",
    ],
    tags: ["Stage Support", "Logistics", "Community"],
    link: "https://startuprevolution.ai/",
  },
];
