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
    name: "Josh",
    headlineLine1: "Design engineer &",
    headlineLine2: "AI enthusiast",
    subtitle:
      "Independent engineer focused on interfaces that feel calm, considered, and quietly fast.",
    portraitAlt: "Josh portrait",
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
    footerBuiltWith: "2026 © Built with Next.js",
    footerBy: "By React Bits Pro",
    emailAriaLabel: "Email",
    linkedinAriaLabel: "LinkedIn",
    xAriaLabel: "X",
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
    name: "Josh Mercer",
    intro: [
      [
        { text: "A " },
        { text: "product designer and frontend engineer", bold: true },
        {
          text: " passionate about building intuitive, human-centered digital experiences. With a background in ",
        },
        { text: "visual craft", bold: true },
        { text: " and " },
        { text: "interaction design", bold: true },
        {
          text: ", I bring a unique blend of design thinking and technical execution to every project.",
        },
      ],
      [
        {
          text: "My journey into design began when I realized how often good user experience was missing from powerful tools. That led me to embrace ",
        },
        { text: "user-centered design", bold: true },
        {
          text: " as both a mindset and a craft, one that balances clarity, creativity, and functionality.",
        },
      ],
      [
        { text: "Currently leading design at small product teams shipping software for " },
        { text: "creative professionals", bold: true },
        { text: ", I'm always looking for opportunities to " },
        {
          text: "shape thoughtful interfaces and build scalable design systems",
          bold: true,
        },
        { text: "." },
      ],
    ],
    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "What I do",
    stackTitle: "Stack",
    showMore: (hiddenCount) => `Show ${hiddenCount} more`,
    showLess: "Show less",
    resetStack: "Reset stack",
  },
};
