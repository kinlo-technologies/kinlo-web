import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="pt-14 pb-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="overflow-hidden rounded-[20px] shadow-(--shadow-card)">
          <Image
            src="/images/hero-banner.png"
            alt="Kinlo — Discover experiences. Meet your people. Belong anywhere."
            width={1672}
            height={941}
            priority
            className="w-full"
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="#explore" variant="primary">
            Explore Experiences
          </Button>
          <Button href="#how-it-works" variant="secondary">
            How It Works
          </Button>
        </div>
        <p className="mt-[18px] text-center text-sm text-(--color-text-tertiary)">
          Now welcoming early hosts &amp; communities in Tulum, Mexico
        </p>
      </div>
    </section>
  );
}
