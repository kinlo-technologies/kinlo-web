import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <footer className="bg-(--color-charcoal) py-[72px] text-white/85">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-5 md:gap-10">
          <div className="col-span-2">
            <Link href={`/${lang}#top`} className="flex items-center">
              <Image
                src="/images/kinlo-logo-lockup-white.png"
                alt="Kinlo — Belong anywhere."
                width={2646}
                height={786}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-3.5 max-w-[240px] text-sm text-white/50">{dict.footer.tagline}</p>
          </div>

          {dict.footer.columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-xs font-bold tracking-[0.06em] text-white/45 uppercase">
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={`/${lang}${link.href}`}
                      className="text-[14.5px] text-white/78 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-white/12 pt-6 text-[13px] text-white/42 sm:flex-row sm:justify-between">
          <span>{dict.footer.copyright}</span>
          <span>{dict.footer.madeFor}</span>
        </div>
      </div>
    </footer>
  );
}
