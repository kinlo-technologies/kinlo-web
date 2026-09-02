import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";
import type { ReactNode } from "react";

const stepIcons: ReactNode[] = [
  <>
    <circle key="c" cx="11" cy="11" r="7" />
    <path key="p" d="m21 21-4.3-4.3" />
  </>,
  <>
    <circle key="c" cx="9" cy="8" r="3.2" />
    <path key="p1" d="M3.5 20c0-3.4 2.5-5.5 5.5-5.5s5.5 2.1 5.5 5.5" />
    <path key="p2" d="M16 8.2a3 3 0 1 1 .5 5.9" />
    <path key="p3" d="M15.3 14.7c2.6.3 4.7 2.3 4.7 5.3" />
  </>,
  <path key="p" d="M20 6 9 17l-5-5" />,
  <path key="p" d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6z" />,
];

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="how-it-works" className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionHeading
          eyebrow={dict.howItWorks.eyebrow}
          title={dict.howItWorks.title}
          description={dict.howItWorks.description}
        />
        <div className="grid grid-cols-2 gap-7 md:grid-cols-4">
          {dict.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="p-2 text-center">
              <div className="mx-auto mb-[18px] flex h-14 w-14 items-center justify-center rounded-full bg-(--color-surface) text-(--color-ocean-teal) shadow-(--shadow-soft)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {stepIcons[i]}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-[14.5px] text-(--color-text-secondary)">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
