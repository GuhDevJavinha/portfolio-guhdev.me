import type { Dictionary } from "./types";

export const ptBR: Dictionary = {
  nav: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre",
  },
  hero: {
    greetingPrefix: "Olá",
    name: "Josh",
    headlineLine1: "Engenheiro de design &",
    headlineLine2: "entusiasta de IA",
    subtitle:
      "Engenheiro independente focado em interfaces que parecem calmas, bem pensadas e silenciosamente rápidas.",
    portraitAlt: "Retrato de Josh",
    viewWork: "Ver meu trabalho",
  },
  contact: {
    contactLabel: "Contato",
    showEmailLabel: "Mostrar e-mail",
    copyLabelPrefix: "Copiar",
    emailCopiedLabel: "E-mail copiado",
    heading: "Vamos conversar",
    body: "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte das suas visões. É só chamar!",
    seeProjects: "Ver projetos",
    footerBuiltWith: "2026 © Feito com Next.js",
    footerBy: "Por React Bits Pro",
    emailAriaLabel: "E-mail",
    linkedinAriaLabel: "LinkedIn",
    xAriaLabel: "X",
  },
  projects: {
    headline: "Meus projetos",
    subtitle:
      "De experimentos divertidos a sistemas bem pensados, um panorama do trabalho que tenho orgulho de ter entregado.",
    viewAll: "Ver todos os projetos",
    pageHeading: "Meus trabalhos recentes",
    pageSubtitle:
      "Experimentos, colaborações e projetos dos quais tenho especial orgulho.",
  },
  about: {
    greeting: "Olá! Eu sou",
    name: "Josh Mercer",
    intro: [
      [
        { text: "Um " },
        { text: "designer de produto e engenheiro frontend", bold: true },
        {
          text: " apaixonado por construir experiências digitais intuitivas e centradas no ser humano. Com uma base em ",
        },
        { text: "arte visual", bold: true },
        { text: " e " },
        { text: "design de interação", bold: true },
        {
          text: ", trago uma combinação única de pensamento de design e execução técnica para cada projeto.",
        },
      ],
      [
        {
          text: "Minha jornada no design começou quando percebi o quanto uma boa experiência do usuário estava ausente em ferramentas poderosas. Isso me levou a abraçar o ",
        },
        { text: "design centrado no usuário", bold: true },
        {
          text: " como mentalidade e ofício, equilibrando clareza, criatividade e funcionalidade.",
        },
      ],
      [
        { text: "Atualmente liderando o design em pequenas equipes de produto que criam software para " },
        { text: "profissionais criativos", bold: true },
        { text: ", estou sempre em busca de oportunidades para " },
        {
          text: "moldar interfaces bem pensadas e construir sistemas de design escaláveis",
          bold: true,
        },
        { text: "." },
      ],
    ],
    experienceTitle: "Experiência",
    educationTitle: "Formação",
    skillsTitle: "O que eu faço",
    stackTitle: "Stack",
    showMore: (hiddenCount) => `Mostrar mais ${hiddenCount}`,
    showLess: "Mostrar menos",
    resetStack: "Reiniciar stack",
  },
};
