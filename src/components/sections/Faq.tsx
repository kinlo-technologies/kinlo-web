import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionHeading eyebrow="Good to Know" title="Kinlo, answered." />
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((item, i) => (
            <details
              key={item.question}
              open={i === 0}
              className="group rounded-(--radius-md) bg-(--color-surface) p-[22px] shadow-(--shadow-soft)"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold">
                {item.question}
                <span className="text-xl font-normal text-(--color-text-tertiary) group-open:hidden">
                  +
                </span>
                <span className="hidden text-xl font-normal text-(--color-text-tertiary) group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3.5 text-[14.5px] text-(--color-text-secondary)">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
