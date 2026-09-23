import type { LocalizedText } from "@/_data/i18n/types";

export type EducationEntry = {
  school: string;
  degree: LocalizedText;
  period: string;
  slug?: string;
};

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    school: "UNIP",
    degree: {
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Systems Analysis and Development",
    },
    period: "2023 – 2026",
  },
];
