import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="pt-14 pb-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="overflow-hidden rounded-[20px] shadow-(--shadow-card)">
          <Image
            src="/images/hero-banner.png"
            alt={dict.hero.imageAlt}
            width={1672}
            height={941}
            priority
            className="w-full"
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="#explore" variant="primary">
            {dict.hero.ctaPrimary}
          </Button>
          <Button href="#how-it-works" variant="secondary">
            {dict.hero.ctaSecondary}
          </Button>
        </div>
        <p className="mt-[18px] text-center text-sm text-(--color-text-tertiary)">
          {dict.hero.caption}
        </p>
      </div>
    </section>
  );
}
