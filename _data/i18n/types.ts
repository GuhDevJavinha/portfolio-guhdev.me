export type Locale = "pt-BR" | "en-US";

export type LocalizedText = {
  pt: string;
  en: string;
};

export type RichSegment = {
  text: string;
  bold?: boolean;
};

export type Dictionary = {
  nav: {
    home: string;
    projects: string;
    about: string;
  };
  hero: {
    greetingPrefix: string;
    greetingSuffix: string;
    name: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    portraitAlt: string;
    viewWork: string;
  };
  contact: {
    contactLabel: string;
    showEmailLabel: string;
    copyLabelPrefix: string;
    emailCopiedLabel: string;
    heading: string;
    body: string;
    seeProjects: string;
    footerBuiltWith: string;
    footerBy: string;
    emailAriaLabel: string;
    linkedinAriaLabel: string;
    githubAriaLabel: string;
  };
  projects: {
    headline: string;
    subtitle: string;
    viewAll: string;
    pageHeading: string;
    pageSubtitle: string;
  };
  about: {
    greeting: string;
    name: string;
    intro: RichSegment[][];
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    stackTitle: string;
    showMore: (hiddenCount: number) => string;
    showLess: string;
    resetStack: string;
  };
};
