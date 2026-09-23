"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/_data/i18n/language-provider";

export function AboutIntro(): ReactNode {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
        {t.about.greeting}{" "}
        <span className="border-b border-foreground/30 pb-0.5">
          {t.about.name}
        </span>
        .
      </h1>
      <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
        {t.about.intro.map((paragraph, index) => (
          <p key={index}>
            {paragraph.map((segment, segmentIndex) =>
              segment.bold ? (
                <strong
                  key={segmentIndex}
                  className="font-semibold text-foreground"
                >
                  {segment.text}
                </strong>
              ) : (
                <span key={segmentIndex}>{segment.text}</span>
              )
            )}
          </p>
        ))}
      </div>
    </>
  );
}
