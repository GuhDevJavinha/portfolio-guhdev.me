"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/_data/i18n/language-provider";
import { FadeIn } from "@/components/ui/motion-primitives";

export function ProjectsHero(): ReactNode {
  const { t } = useLanguage();

  return (
    <FadeIn className="flex flex-col items-center gap-5 text-center">
      <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
        {t.projects.pageHeading}
      </h1>
      <p className="max-w-[33ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
        {t.projects.pageSubtitle}
      </p>
    </FadeIn>
  );
}
