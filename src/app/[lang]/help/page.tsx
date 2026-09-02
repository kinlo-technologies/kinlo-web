import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/pages/LegalPage";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/help">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return { title: `${dict.pages.help.title} — Kinlo` };
}

export default async function HelpPage({ params }: PageProps<"/[lang]/help">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const page = dict.pages.help;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalPage lang={lang} title={page.title} intro={page.intro} backLabel={dict.pages.backHome}>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href={`/${lang}#about`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-(--color-deep-jungle) px-[26px] text-[15px] font-semibold text-white transition-all duration-150 ease-out hover:-translate-y-px hover:bg-[#163a34]"
            >
              {page.faqLinkLabel}
            </Link>
            <span className="text-[15px] text-(--color-text-secondary)">
              {page.emailLabel}{" "}
              <a href={`mailto:${page.email}`} className="font-semibold underline">
                {page.email}
              </a>
            </span>
          </div>
        </LegalPage>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
