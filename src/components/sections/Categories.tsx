import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data";

const toneClasses: Record<string, string> = {
  teal: "bg-(--color-ocean-teal)/12 text-(--color-ocean-teal)",
  clay: "bg-(--color-sunset-clay)/12 text-(--color-sunset-clay)",
  jungle: "bg-(--color-deep-jungle)/10 text-(--color-deep-jungle)",
};

export function Categories() {
  return (
    <section id="explore" className="pt-0 pb-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionHeading
          eyebrow="Browse by Category"
          title="Something for every kind of people-finder."
        />
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="rounded-(--radius-md) bg-(--color-surface) p-[22px] text-center shadow-(--shadow-soft) transition-transform duration-150 hover:-translate-y-1 hover:shadow-(--shadow-card)"
            >
              <div
                className={`mx-auto mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full ${
                  toneClasses[category.tone]
                }`}
              >
                <CategoryIcon slug={category.slug} className="h-5 w-5" />
              </div>
              <span className="text-[13.5px] font-semibold">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
