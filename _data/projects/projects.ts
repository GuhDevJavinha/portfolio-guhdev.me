import { Bot, ShieldCheck, TrendingDown, Workflow } from "lucide-react";
import type { ComponentType } from "react";

import type { LocalizedText } from "@/_data/i18n/types";

export type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: LocalizedText;
  description: LocalizedText;
  meta: LocalizedText;
  imageRatio: number;
  image: string;
  imageAlt: LocalizedText;
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "vitalmark",
    icon: ShieldCheck,
    iconLabel: "VitalMark",
    title: {
      pt: "Plataforma de pesquisa e registro de marcas junto ao INPI.",
      en: "Trademark research and registration platform with the Brazilian patent office.",
    },
    description: {
      pt: "Desenvolvi a VitalMark, um produto que faz a análise de viabilidade de uma marca antes do registro oficial, com stack em Java e Vue.js.",
      en: "I built VitalMark, a product that checks trademark viability before the official filing, with a Java and Vue.js stack.",
    },
    meta: {
      pt: "Desenvolvedor Fullstack, Java & Vue.js",
      en: "Fullstack Developer, Java & Vue.js",
    },
    imageRatio: 1660 / 861,
    image: "/projects/vitalmark.png",
    imageAlt: {
      pt: "Página inicial da VitalMark",
      en: "VitalMark landing page",
    },
    link: "https://vitalmark.com.br/",
  },
  {
    id: "bsp-system",
    icon: TrendingDown,
    iconLabel: "BSP System",
    title: {
      pt: "Sistema de gestão interno que cancelou 2 assinaturas e reduziu custos em 80%.",
      en: "Internal management system that cancelled 2 subscriptions and cut costs by 80%.",
    },
    description: {
      pt: "Construí o BSP System para centralizar processos internos, eliminando ferramentas terceiras e reduzindo o custo operacional em 80%. Stack em Java e Next.js.",
      en: "I built BSP System to centralize internal processes, eliminating third-party tools and cutting operational cost by 80%. Java and Next.js stack.",
    },
    meta: {
      pt: "Desenvolvedor Fullstack, Java & Next.js",
      en: "Fullstack Developer, Java & Next.js",
    },
    imageRatio: 1618 / 899,
    image: "/projects/bsp-system.png",
    imageAlt: {
      pt: "Tela do sistema de gestão BSP System",
      en: "BSP System management dashboard",
    },
    link: "https://bspsystem.bspprompt.com/",
  },
  {
    id: "autonegocia",
    icon: Bot,
    iconLabel: "Autonegocia",
    title: {
      pt: "Plataforma de negociação de dívidas com chatbot e IA generativa.",
      en: "Debt negotiation platform powered by a chatbot and generative AI.",
    },
    description: {
      pt: "Atuei no desenvolvimento da Autonegocia, uma plataforma que usa chatbot e IA generativa para negociar dívidas de forma automatizada. Stack em Java e Next.js.",
      en: "I worked on Autonegocia, a platform that uses a chatbot and generative AI to negotiate debts automatically. Java and Next.js stack.",
    },
    meta: {
      pt: "Desenvolvedor Fullstack, Java & Next.js",
      en: "Fullstack Developer, Java & Next.js",
    },
    imageRatio: 1733 / 896,
    image: "/projects/autonegocia.png",
    imageAlt: {
      pt: "Página inicial da Autonegocia",
      en: "Autonegocia landing page",
    },
    link: "https://www.autonegocia.com.br/",
  },
  {
    id: "active",
    icon: Workflow,
    iconLabel: "Active",
    title: {
      pt: "CRM interno com automação RPA no SAP para conclusão de projetos.",
      en: "Internal CRM with SAP RPA automation for project completion.",
    },
    description: {
      pt: "Desenvolvi o Active, um CRM interno que usa RPA integrado ao SAP para automatizar a conclusão de projetos. Stack em Java e Next.js. Sistema interno, sem link público.",
      en: "I built Active, an internal CRM that uses RPA integrated with SAP to automate project completion. Java and Next.js stack. Internal system, no public link.",
    },
    meta: {
      pt: "Desenvolvedor Fullstack, Java & Next.js",
      en: "Fullstack Developer, Java & Next.js",
    },
    imageRatio: 1657 / 932,
    image: "/projects/active.png",
    imageAlt: {
      pt: "Tela do CRM Active",
      en: "Active CRM dashboard",
    },
  },
];
