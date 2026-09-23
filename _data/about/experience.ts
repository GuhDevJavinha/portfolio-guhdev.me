import type { LocalizedText } from "@/_data/i18n/types";

export type ExperienceEntry = {
  company: string;
  role: LocalizedText;
  period: string;
  logo?: string;
  slug?: string;
  brand?: string;
};

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    company: "BSP Cloud",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: "2026 – Present",
    logo: "/bsp.png",
    brand: "#7C3AED",
  },
  {
    company: "Vitalis Group",
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    period: "2025 – Present",
    logo: "/vitalis-group.png",
    brand: "#16A34A",
  },
  {
    company: "JSV Telecom",
    role: { pt: "Suporte de TI", en: "IT Support" },
    period: "2024",
    logo: "/jsv-telecom.svg",
    brand: "#0B5FFF",
  },
];
