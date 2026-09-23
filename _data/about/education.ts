import type { LocalizedText } from "@/_data/i18n/types";

export type EducationEntry = {
  school: string;
  degree: LocalizedText;
  period: string;
  slug?: string;
};

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    school: "Rhode Island School of Design",
    degree: { pt: "Bacharelado, Design Gráfico", en: "BFA, Graphic Design" },
    period: "2013 – 2017",
  },
  {
    school: "Stanford University",
    degree: {
      pt: "Certificado em HCI, d.school",
      en: "HCI Certificate, d.school",
    },
    period: "2018",
  },
  {
    school: "Bruno Simon's Three.js Journey",
    degree: { pt: "WebGL e Shaders", en: "WebGL & Shaders" },
    period: "2022",
  },
];
