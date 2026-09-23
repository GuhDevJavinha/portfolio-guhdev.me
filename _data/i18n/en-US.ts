import type { Dictionary } from "./types";

export const enUS: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
  },
  hero: {
    greetingPrefix: "Hey",
    greetingSuffix: ", I'm",
    name: "Gustavo",
    headlineLine1: "Software Engineer &",
    headlineLine2: "AI Engineer",
    subtitle:
      "Java/Spring developer focused on AWS, building robust backend systems and generative AI solutions.",
    portraitAlt: "Gustavo portrait",
    viewWork: "View My Work",
  },
  contact: {
    contactLabel: "Contact",
    showEmailLabel: "Show email",
    copyLabelPrefix: "Copy",
    emailCopiedLabel: "Email copied",
    heading: "Let's connect",
    body: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Just reach out!",
    seeProjects: "See projects",
    footerBuiltWith: "2026 © Made by Gustavo Ribeiro",
    emailAriaLabel: "Email",
    linkedinAriaLabel: "LinkedIn",
    githubAriaLabel: "GitHub",
  },
  projects: {
    headline: "My projects",
    subtitle:
      "From playful experiments to thoughtful systems, a look at the work I'm proud to have shipped.",
    viewAll: "View all projects",
    pageHeading: "My recent work",
    pageSubtitle:
      "Experiments, collaborations, and projects I'm especially proud to have shipped.",
  },
  about: {
    greeting: "Hello! I'm",
    name: "Gustavo",
    intro: [
      [
        { text: "A " },
        { text: "Software Engineer and AI Engineer", bold: true },
        {
          text: " passionate about building robust backend systems and generative AI solutions. I'm a ",
        },
        { text: "Java/Spring", bold: true },
        { text: " developer focused on " },
        { text: "AWS", bold: true },
        {
          text: ", bringing solid architecture and technical execution to every project.",
        },
      ],
      [
        {
          text: "I work across a broad stack spanning ",
        },
        {
          text: "Next.js, Docker, GCP, Kubernetes, Kafka, DynamoDB, MySQL, and PostgreSQL",
          bold: true,
        },
        {
          text: ", always reaching for the right tool for the job rather than sticking to a single stack.",
        },
      ],
      [
        { text: "I started out in IT support, moved into " },
        { text: "monitoring and observability", bold: true },
        { text: ", and today I work as a " },
        {
          text: "software engineer building products with Java, Spring, Next.js, and AI on AWS",
          bold: true,
        },
        { text: "." },
      ],
    ],
    experienceTitle: "Experience",
    educationTitle: "Education",
    certificatesTitle: "Certificates",
    skillsTitle: "What I do",
    stackTitle: "Stack",
    showMore: (hiddenCount) => `Show ${hiddenCount} more`,
    showLess: "Show less",
    resetStack: "Reset stack",
  },
};
