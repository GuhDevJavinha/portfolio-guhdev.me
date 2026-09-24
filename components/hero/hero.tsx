"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/_data/i18n/language-provider";
import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/josh.webp";
const PORTRAIT_HOVER_SRC = "/josh_wave.webp";

export function Hero(): ReactNode {
  const { t } = useLanguage();

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="relative z-10 flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              {t.hero.greetingPrefix}
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              {t.hero.greetingSuffix} {t.hero.name}
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block sm:whitespace-nowrap">
                {t.hero.headlineLine1}
              </span>
              <span className="block sm:whitespace-nowrap">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              {t.hero.subtitle}
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="relative z-0 flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-92 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt={t.hero.portraitAlt}
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
