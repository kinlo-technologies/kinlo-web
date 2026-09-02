import { SectionHeading } from "@/components/ui/SectionHeading";
import { launchStats, testimonials } from "@/lib/data";
import type { Dictionary } from "@/i18n/dictionaries";

const avatarTone: Record<string, string> = {
  teal: "bg-(--color-ocean-teal)",
  clay: "bg-(--color-sunset-clay)",
  jungle: "bg-(--color-deep-jungle)",
};

export function Community({ dict }: { dict: Dictionary }) {
  return (
    <section id="community" className="py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="overflow-hidden rounded-(--radius-lg) bg-(--color-surface) shadow-(--shadow-card)">
          <div className="px-8 pt-16 pb-12 md:px-16">
            <SectionHeading eyebrow={dict.community.eyebrow} title={dict.community.title} />
            <div className="-mt-14 grid grid-cols-1 gap-[22px] md:grid-cols-3">
              {testimonials.map((t, i) => {
                const text = dict.community.testimonials[i];
                return (
                  <div
                    key={t.name}
                    className="rounded-(--radius-md) border border-black/10 bg-(--color-warm-sand) p-[26px]"
                  >
                    <p className="mb-5 text-[15.5px] text-(--color-text-primary)">
                      &ldquo;{text.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-[38px] w-[38px] items-center justify-center rounded-full font-sans text-[13px] font-bold text-white ${
                          avatarTone[t.tone]
                        }`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <strong className="block text-sm font-bold">{t.name}</strong>
                        <span className="text-[12.5px] text-(--color-text-tertiary)">
                          {text.location}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 bg-(--color-deep-jungle) px-8 py-10 text-white md:px-16">
            {launchStats.map((stat, i) => (
              <div key={stat.value} className="text-center">
                <strong className="font-display block text-[34px]">{stat.value}</strong>
                <span className="text-[13.5px] text-white/65">{dict.community.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
