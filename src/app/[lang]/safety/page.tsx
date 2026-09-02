import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/pages/LegalPage";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/safety">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return { title: `${dict.pages.safety.title} — Kinlo` };
}

export default async function SafetyPage({ params }: PageProps<"/[lang]/safety">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const page = dict.pages.safety;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalPage
          lang={lang}
          title={page.title}
          intro={page.intro}
          sections={page.sections}
          backLabel={dict.pages.backHome}
        />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
