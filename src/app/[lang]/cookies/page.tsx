import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/pages/LegalPage";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/cookies">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return { title: `${dict.pages.cookies.title} — Kinlo` };
}

export default async function CookiesPage({ params }: PageProps<"/[lang]/cookies">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const page = dict.pages.cookies;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalPage
          lang={lang}
          title={page.title}
          updated={page.updated}
          intro={page.intro}
          sections={page.sections}
          backLabel={dict.pages.backHome}
        />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
