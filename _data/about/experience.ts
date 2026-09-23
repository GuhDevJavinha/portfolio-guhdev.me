import type { LocalizedText } from "@/_data/i18n/types";

export type ExperienceEntry = {
  company: string;
  role: LocalizedText;
  period: string;
  slug?: string;
  brand?: string;
};

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    company: "Linear",
    role: { pt: "Engenheiro de Design Sênior", en: "Senior Design Engineer" },
    period: "Mar 2024 – Present",
    slug: "linear",
    brand: "#5E6AD2",
  },
  {
    company: "Vercel",
    role: { pt: "Product Designer", en: "Product Designer" },
    period: "Aug 2022 – Feb 2024",
    slug: "vercel",
    brand: "#0a0a0a",
  },
  {
    company: "Stripe",
    role: { pt: "Engenheiro de Design", en: "Design Engineer" },
    period: "Jun 2021 – Jul 2022",
    slug: "stripe",
    brand: "#635BFF",
  },
  {
    company: "Figma",
    role: { pt: "Engenheiro de UI", en: "UI Engineer" },
    period: "Sep 2019 – May 2021",
    slug: "figma",
    brand: "#A259FF",
  },
  {
    company: "Notion",
    role: { pt: "Product Designer", en: "Product Designer" },
    period: "Jan 2018 – Aug 2019",
    slug: "notion",
    brand: "#111111",
  },
  {
    company: "Airbnb",
    role: { pt: "Estagiário de Design", en: "Design Intern" },
    period: "May 2017 – Dec 2017",
    slug: "airbnb",
    brand: "#FF5A5F",
  },
  {
    company: "Freelance",
    role: { pt: "Designer & Desenvolvedor", en: "Designer & Developer" },
    period: "2015 – 2017",
    brand: "#0AE448",
  },
];
