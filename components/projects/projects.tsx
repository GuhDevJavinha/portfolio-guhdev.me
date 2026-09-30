"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import Image from "next/image";

import { PROJECTS, type Project } from "@/_data/projects/projects";
import { useLanguage } from "@/_data/i18n/language-provider";
import { FadeIn } from "@/components/ui/motion-primitives";

const PREVIEW_COUNT = 2;
const EASE = [0.22, 1, 0.36, 1] as const;

export type ProjectsProps = {
  withHeadline?: boolean;
};

export function Projects({ withHeadline = false }: ProjectsProps): ReactNode {
  const { t } = useLanguage();
  const professional = PROJECTS.filter((p) => p.category === "professional");
  const personal = PROJECTS.filter((p) => p.category === "personal");

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              {t.projects.headline}
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              {t.projects.subtitle}
            </p>
          </FadeIn>
        ) : null}

        <ProjectSection heading={t.projects.professionalHeading} projects={professional} />
        <ProjectSection
          heading={t.projects.personalHeading}
          projects={personal}
          className="mt-10 sm:mt-14"
        />
      </div>
    </section>
  );
}

function ProjectSection({
  heading,
  projects,
  className,
}: {
  heading: string;
  projects: Project[];
  className?: string | undefined;
}): ReactNode {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  if (projects.length === 0) return null;
  const items = expanded ? projects : projects.slice(0, PREVIEW_COUNT);
  const hiddenCount = projects.length - PREVIEW_COUNT;

  return (
    <motion.div layout="position" transition={{ duration: 1, ease: EASE }} className={className}>
      <h3 className="mb-5 text-[13px] font-semibold tracking-wide text-foreground/50 uppercase">
        {heading}
      </h3>
      <motion.div
        layout
        transition={{ duration: 1, ease: EASE }}
        className="columns-1 gap-6 md:columns-2 md:gap-7"
      >
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {hiddenCount > 0 ? (
        <motion.button
          layout="position"
          transition={{ duration: 1, ease: EASE }}
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="focus-ring text-foreground mt-6 flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight"
        >
          {expanded ? t.projects.showLess : t.projects.showMore(hiddenCount)}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-flex"
          >
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </motion.button>
      ) : null}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const { locale } = useLanguage();
  const localeKey = locale === "pt-BR" ? "pt" : "en";
  const Icon = project.icon;
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <FadeIn
      layout
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <Wrapper
        {...wrapperProps}
        className={`project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5 ${project.link ? "cursor-pointer" : ""}`}
      >
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt[localeKey]}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title[localeKey]}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description[localeKey]}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta[localeKey]}
        </p>
      </Wrapper>
    </FadeIn>
  );
}
