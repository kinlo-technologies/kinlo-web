import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredEvents } from "@/lib/data";
import type { Dictionary } from "@/i18n/dictionaries";

export function FeaturedExperiences({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionHeading
          eyebrow={dict.featured.eyebrow}
          title={dict.featured.title}
          description={dict.featured.description}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredEvents.map((event, i) => {
            const text = dict.featured.events[i];
            return (
              <article
                key={text.title}
                className="overflow-hidden rounded-(--radius-md) bg-(--color-surface) shadow-(--shadow-soft) transition-transform duration-150 hover:-translate-y-1 hover:shadow-(--shadow-card)"
              >
                <div className="relative h-[180px] bg-(--color-limestone)">
                  <Image
                    src={event.image}
                    alt={text.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-[22px] pt-5">
                  <span className="text-xs font-bold tracking-[0.06em] text-(--color-ocean-teal) uppercase">
                    {text.category}
                  </span>
                  <h3 className="font-display mt-2 mb-2.5 text-[19px] leading-snug">
                    {text.title}
                  </h3>
                  <p className="mb-1 text-[13.5px] text-(--color-text-secondary)">
                    {dict.featured.hostedBy} {event.host}
                  </p>
                  <p className="text-[13.5px] text-(--color-text-secondary)">{text.meta}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/[0.08] pt-3.5 text-[13.5px] text-(--color-text-secondary)">
                    <span>{text.spots}</span>
                    <span
                      className={`font-sans text-[15px] font-bold ${
                        event.free ? "text-(--color-ocean-teal)" : "text-(--color-text-primary)"
                      }`}
                    >
                      {event.price}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
