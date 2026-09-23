"use client";

import type { ReactNode } from "react";

import { CERTIFICATE_ENTRIES, type CertificateEntry } from "@/_data/about/certificates";
import { useLanguage } from "@/_data/i18n/language-provider";

const ROW_HEIGHT = 64;

export function Certificates(): ReactNode {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        {t.about.certificatesTitle}
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {CERTIFICATE_ENTRIES.map((entry) => (
            <li
              key={entry.name}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <CertificateLogo entry={entry} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.name}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.institution}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CertificateLogo({ entry }: { entry: CertificateEntry }): ReactNode {
  const initials = entry.institution.charAt(0);
  return (
    <span
      className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border bg-white"
      aria-hidden="true"
      style={{ borderRadius: 14 }}
    >
      {entry.iconUrl ? (
        <img
          src={entry.iconUrl}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7"
          draggable={false}
        />
      ) : (
        <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
          {initials}
        </span>
      )}
    </span>
  );
}
