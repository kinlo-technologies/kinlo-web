import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const links = [
    { href: `/${lang}#explore`, label: dict.nav.explore },
    { href: `/${lang}#how-it-works`, label: dict.nav.howItWorks },
    { href: `/${lang}#organizers`, label: dict.nav.forOrganizers },
    { href: `/${lang}#community`, label: dict.nav.community },
    { href: `/${lang}#about`, label: dict.nav.about },
  ];
  const otherLang: Locale = lang === "en" ? "es" : "en";

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-(--color-warm-sand)/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:h-[84px] sm:px-8">
        <Link href={`/${lang}#top`} className="flex shrink-0 items-center">
          <Image
            src="/images/kinlo-logo-lockup.png"
            alt="Kinlo — Belong anywhere."
            width={2646}
            height={786}
            className="h-8 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
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

        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            href={`/${otherLang}`}
            className="text-[13px] font-bold tracking-[0.04em] text-(--color-text-secondary) uppercase transition-colors hover:text-(--color-text-primary)"
          >
            {otherLang}
          </Link>
          <span className="hidden sm:inline-flex">
            <Button href={`/${lang}#download`} size="sm">
              {dict.nav.getTheApp}
            </Button>
          </span>
          <MobileNav links={links} ariaLabel={lang === "en" ? "Menu" : "Menú"} />
        </div>
      </div>
    </header>
  );
}
