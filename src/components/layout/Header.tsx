import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const links = [
    { href: "#explore", label: dict.nav.explore },
    { href: "#how-it-works", label: dict.nav.howItWorks },
    { href: "#organizers", label: dict.nav.forOrganizers },
    { href: "#community", label: dict.nav.community },
    { href: "#about", label: dict.nav.about },
  ];
  const otherLang: Locale = lang === "en" ? "es" : "en";

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-(--color-warm-sand)/85 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between px-8">
        <Link href="#top" className="flex items-center">
          <Image
            src="/images/kinlo-logo-lockup.png"
            alt="Kinlo — Belong anywhere."
            width={2646}
            height={786}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href={`/${otherLang}`}
            className="text-[13px] font-bold tracking-[0.04em] text-(--color-text-secondary) uppercase transition-colors hover:text-(--color-text-primary)"
          >
            {otherLang}
          </Link>
          <Button href="#download" size="sm">
            {dict.nav.getTheApp}
          </Button>
        </div>
      </div>
    </header>
  );
}
