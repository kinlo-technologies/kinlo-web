import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { domine, publicSans } from "@/lib/fonts";
import { locales, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [{ url: "/assets/kinlo-logo.png", width: 3250, height: 1334 }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["/assets/kinlo-logo.png"],
    },
    alternates: {
      languages: { en: "/en", es: "/es" },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${domine.variable} ${publicSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
