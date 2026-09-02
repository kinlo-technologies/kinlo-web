import { Fragment, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

const perkIcons: ReactNode[] = [
  <Fragment key="calendar">
    <rect x="3" y="4" width="18" height="18" rx="3" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Fragment>,
  <Fragment key="chart">
    <path d="M3 3v18h18" />
    <path d="m7 14 4-4 3 3 5-6" />
  </Fragment>,
  <path key="shield" d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6z" />,
];

export function ForOrganizers({ dict }: { dict: Dictionary }) {
  return (
    <section id="organizers" className="py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 items-center gap-14 rounded-(--radius-lg) bg-(--color-deep-jungle) p-11 text-white md:grid-cols-2">
          <div>
            <span className="mb-3.5 block text-[13px] font-bold tracking-[0.08em] text-(--color-ocean-teal) uppercase">
              {dict.forOrganizers.eyebrow}
            </span>
            <h2 className="font-display mb-[18px] text-[36px] leading-tight font-bold text-white">
              {dict.forOrganizers.title}
            </h2>
            <p className="mb-[30px] text-[17px] text-white/72">{dict.forOrganizers.description}</p>
            <div className="flex flex-wrap gap-3.5">
              <Button href="#" variant="clay">
                {dict.forOrganizers.ctaPrimary}
              </Button>
              <Button href="#" variant="ghost-on-dark">
                {dict.forOrganizers.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {dict.forOrganizers.perks.map((perk, i) => (
              <div key={perk.title} className="flex items-start gap-3.5">
                <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18px] w-[18px]"
                  >
                    {perkIcons[i]}
                  </svg>
                </div>
                <div>
                  <h4 className="mb-0.5 text-[15.5px] font-bold">{perk.title}</h4>
                  <p className="text-sm text-white/65">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
