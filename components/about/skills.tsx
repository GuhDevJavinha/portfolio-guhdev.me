"use client";

import type { ReactNode } from "react";

import { SKILLS } from "@/_data/about/skills";
import { useLanguage } from "@/_data/i18n/language-provider";

export function Skills(): ReactNode {
  const { t, locale } = useLanguage();
  const localeKey = locale === "pt-BR" ? "pt" : "en";

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        {t.about.skillsTitle}
      </h3>
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill.en}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill[localeKey]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
