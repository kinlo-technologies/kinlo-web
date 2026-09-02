import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

export function LegalPage({
  lang,
  title,
  updated,
  intro,
  sections,
  backLabel,
  children,
}: {
  lang: Locale;
  title: string;
  updated?: string;
  intro?: string;
  sections?: { heading: string; body: string }[];
  backLabel: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-8">
        <Link
          href={`/${lang}#top`}
          className="mb-8 inline-block text-sm font-semibold text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
        >
          ← {backLabel}
        </Link>
        <h1 className="font-display mb-2 text-[40px] leading-[1.15] font-bold text-(--color-text-primary)">
          {title}
        </h1>
        {updated ? <p className="mb-8 text-sm text-(--color-text-tertiary)">{updated}</p> : null}
        {intro ? (
          <p className="mb-10 text-lg text-(--color-text-secondary)">{intro}</p>
        ) : null}
        {sections ? (
          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="mb-2 text-xl font-bold text-(--color-text-primary)">
                  {s.heading}
                </h2>
                <p className="text-[15.5px] leading-relaxed text-(--color-text-secondary)">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
