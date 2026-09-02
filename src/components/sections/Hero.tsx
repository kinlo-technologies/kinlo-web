import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="pt-14 pb-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="overflow-hidden rounded-[20px] shadow-(--shadow-card)">
          <video
            src="/videos/hero.mp4"
            poster="/images/hero-poster.jpg"
            aria-label={dict.hero.imageAlt}
            autoPlay
            loop
            muted
            playsInline
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
