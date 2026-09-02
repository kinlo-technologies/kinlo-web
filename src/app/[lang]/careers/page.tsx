import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/pages/LegalPage";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/careers">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return { title: `${dict.pages.careers.title} — Kinlo` };
}

export default async function CareersPage({ params }: PageProps<"/[lang]/careers">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const page = dict.pages.careers;

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <LegalPage lang={lang} title={page.title} backLabel={dict.pages.backHome}>
          <p className="mb-4 text-lg text-(--color-text-secondary)">{page.body}</p>
          <p className="text-lg text-(--color-text-secondary)">{page.body2}</p>
        </LegalPage>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
