import {
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType } from "react";

import type { LocalizedText } from "@/_data/i18n/types";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

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
};

export const PROJECTS: Project[] = [
  {
    id: "loom",
    icon: Sparkles,
    iconLabel: "LOOM",
    title: {
      pt: "Um assistente de escrita com IA que pensa junto com você, permitindo capturar ideias, edições e rascunhos em um espaço focado.",
      en: "An AI writing companion that thinks alongside you, allowing you to capture ideas, edits, and drafts in one focused space.",
    },
    description: {
      pt: "Eu desenhei o Loom, uma superfície de escrita focada onde ideias, edições e rascunhos convivem sem a bagunça do chat.",
      en: "I designed Loom, a focused writing surface where ideas, edits, and drafts coexist without the chat clutter.",
    },
    meta: {
      pt: "Engenheiro de Design, 2024",
      en: "Design Engineer, 2024",
    },
    imageRatio: 752 / 497,
    image:
      "https://cdn.dribbble.com/userupload/46128964/file/b92b9d268dd928642ca94bd49e32923a.jpg?resize=752x497&vertical=center",
    imageAlt: {
      pt: "Mockup do Loom, assistente de escrita com IA",
      en: "Loom AI writing companion mockup",
    },
  },
  {
    id: "atlas",
    icon: Compass,
    iconLabel: "Atlas Studio",
    title: {
      pt: "Um sprint de marca e produto de duas semanas para um estúdio criativo.",
      en: "A two week brand and product sprint for a creative studio.",
    },
    description: {
      pt: "Identidade completa, site institucional e uma pequena superfície de produto desenhados para transmitir confiança silenciosa em cada ponto de contato.",
      en: "End to end identity, marketing site, and a small product surface designed to feel quietly confident across every touchpoint.",
    },
    meta: {
      pt: "Designer de Produto & Marca, 2025",
      en: "Product & Brand Designer, 2025",
    },
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/24599416/file/original-1ae5075dcd129aebb16bdbca24b41ac7.png?resize=1024x768&vertical=center",
    imageAlt: {
      pt: "Mockup do sprint de marca e produto do Atlas Studio",
      en: "Atlas Studio brand and product sprint mockup",
    },
  },
  {
    id: "rhythm",
    icon: LineChart,
    iconLabel: "Rhythm",
    title: {
      pt: "Analytics tranquilo para fundadores independentes.",
      en: "Calm analytics for indie founders.",
    },
    description: {
      pt: "Um resumo semanal que transforma dados brutos de produto em uma narrativa simples. Feito para ser lido em um domingo com um café.",
      en: "A weekly digest that turns raw product data into a simple narrative. Built so you can read it on a Sunday with coffee.",
    },
    meta: {
      pt: "Fundador & Designer, 2024",
      en: "Founder & Designer, 2024",
    },
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
    imageAlt: {
      pt: "Mockup de analytics tranquilo do Rhythm",
      en: "Rhythm calm analytics mockup",
    },
  },
  {
    id: "groove",
    icon: Wand2,
    iconLabel: "Groove",
    title: {
      pt: "Reimaginando o fluxo de agendamento de uma escola de música, ajudando milhares de alunos a encontrar as aulas certas.",
      en: "Reimagining the booking flow for a music school, asisting thousands of students in finding the right lessons.",
    },
    description: {
      pt: "Liderei um redesenho da experiência de agendamento de aulas, reduzindo o abandono pela metade e fazendo a agenda parecer um calendário que as pessoas realmente querem abrir.",
      en: "I led a redesign of the lesson booking experience, cutting drop off in half and making the schedule feel like a calendar people actually want to open.",
    },
    meta: {
      pt: "Designer Líder, 2023",
      en: "Lead Designer, 2023",
    },
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/43955214/file/original-d4cde1de803e84b97d8892e3444c04b0.png?resize=1024x768&vertical=center",
    imageAlt: {
      pt: "Mockup do fluxo de agendamento da escola de música Groove",
      en: "Groove music school booking flow mockup",
    },
  },
  {
    id: "fieldnote",
    icon: Layers,
    iconLabel: "Fieldnote",
    title: {
      pt: "Uma ferramenta de pesquisa de bolso para equipes de design que querem sair dos documentos e ir para o mundo real.",
      en: "A pocket sized research tool for design teams that want to get out of their docs and into the world.",
    },
    description: {
      pt: "Capture citações, marque padrões e sintetize temas em um só lugar. A interface fica fora do caminho para que o pensamento possa acontecer.",
      en: "Capture quotes, tag patterns, and synthesize themes in one place. The interface stays out of the way so the thinking can happen.",
    },
    meta: {
      pt: "Engenheiro de Design, 2024",
      en: "Design Engineer, 2024",
    },
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/30310902/file/original-621e7fe47be9d11ee14544456c693bec.png?resize=1024x768&vertical=center",
    imageAlt: {
      pt: "Mockup da ferramenta de pesquisa de bolso Fieldnote",
      en: "Fieldnote pocket sized research tool mockup",
    },
  },
  {
    id: "talkback",
    icon: Bot,
    iconLabel: "Talkback",
    title: {
      pt: "Uma interface mais amigável para conversar com modelos de linguagem.",
      en: "A friendlier interface for talking to language models.",
    },
    description: {
      pt: "Uma exploração de como o chat com IA poderia parecer menos um terminal e mais uma conversa com um amigo curioso.",
      en: "An exploration of how AI chat could feel less like a terminal and more like a conversation with a curious friend.",
    },
    meta: {
      pt: "Projeto Independente, 2025",
      en: "Independent Project, 2025",
    },
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/16560717/file/original-c6f745d50302d66609bfe080f99f5396.png?resize=1024x768&vertical=center",
    imageAlt: {
      pt: "Mockup do Talkback, interface amigável para chat com IA",
      en: "Talkback friendlier AI chat interface mockup",
    },
  },
];
