import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredEvents } from "@/lib/data";

export function FeaturedExperiences() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionHeading
          eyebrow="Today's Top Picks"
          title="Featured experiences."
          description="A sample of what's live on Kinlo in Tulum right now."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredEvents.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-(--radius-md) bg-(--color-surface) shadow-(--shadow-soft) transition-transform duration-150 hover:-translate-y-1 hover:shadow-(--shadow-card)"
            >
              <div className="flex h-[180px] items-center justify-center bg-(--color-limestone) text-[13px] font-semibold text-black/[0.28]">
                Event photo
              </div>
              <div className="p-[22px] pt-5">
                <span className="text-xs font-bold tracking-[0.06em] text-(--color-ocean-teal) uppercase">
                  {event.category}
                </span>
                <h3 className="font-display mt-2 mb-2.5 text-[19px] leading-snug">
                  {event.title}
                </h3>
                <p className="mb-1 text-[13.5px] text-(--color-text-secondary)">
                  Hosted by {event.host}
                </p>
                <p className="text-[13.5px] text-(--color-text-secondary)">{event.meta}</p>
                <div className="mt-4 flex items-center justify-between border-t border-black/[0.08] pt-3.5 text-[13.5px] text-(--color-text-secondary)">
                  <span>{event.spots}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
