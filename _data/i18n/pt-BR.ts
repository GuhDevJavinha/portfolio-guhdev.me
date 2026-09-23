import type { Dictionary } from "./types";

export const ptBR: Dictionary = {
  nav: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre",
  },
  hero: {
    greetingPrefix: "Oi",
    greetingSuffix: ", eu sou o",
    name: "Gustavo",
    headlineLine1: "Engenheiro de Software &",
    headlineLine2: "Engenheiro de IA",
    subtitle:
      "Desenvolvedor Java/Spring com foco em AWS, construindo sistemas backend robustos e soluções de IA generativa.",
    portraitAlt: "Retrato de Gustavo",
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
    footerBuiltWith: "2026 © Feito por Gustavo Ribeiro",
    emailAriaLabel: "E-mail",
    linkedinAriaLabel: "LinkedIn",
    githubAriaLabel: "GitHub",
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
    name: "Gustavo",
    intro: [
      [
        { text: "Um " },
        { text: "Software Engineer e AI Engineer", bold: true },
        {
          text: " apaixonado por construir sistemas backend robustos e soluções de IA generativa. Sou desenvolvedor ",
        },
        { text: "Java/Spring", bold: true },
        { text: " com foco em " },
        { text: "AWS", bold: true },
        {
          text: ", trazendo uma combinação de arquitetura sólida e execução técnica para cada projeto.",
        },
      ],
      [
        {
          text: "Trabalho com um stack amplo que passa por ",
        },
        {
          text: "Next.js, Docker, GCP, Kubernetes, Kafka, DynamoDB, MySQL e PostgreSQL",
          bold: true,
        },
        {
          text: ", sempre buscando a ferramenta certa para cada problema em vez de me limitar a uma única pilha.",
        },
      ],
      [
        { text: "Comecei na área dando suporte de TI, passei por " },
        { text: "monitoramento e observabilidade", bold: true },
        { text: " e hoje atuo como " },
        {
          text: "engenheiro de software construindo produtos com Java, Spring, Next.js e IA na AWS",
          bold: true,
        },
        { text: "." },
      ],
    ],
    experienceTitle: "Experiência",
    educationTitle: "Formação",
    certificatesTitle: "Certificados",
    skillsTitle: "O que eu faço",
    stackTitle: "Stack",
    showMore: (hiddenCount) => `Mostrar mais ${hiddenCount}`,
    showLess: "Mostrar menos",
    resetStack: "Reiniciar stack",
  },
};
