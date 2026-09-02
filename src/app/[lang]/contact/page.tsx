import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/pages/LegalPage";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return { title: `${dict.pages.contact.title} — Kinlo` };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const page = dict.pages.contact;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalPage lang={lang} title={page.title} intro={page.intro} backLabel={dict.pages.backHome}>
          <a
            href={`mailto:${page.email}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-(--color-deep-jungle) px-[26px] text-[15px] font-semibold text-white transition-all duration-150 ease-out hover:-translate-y-px hover:bg-[#163a34]"
          >
            {page.emailLabel} {page.email}
          </a>
        </LegalPage>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
