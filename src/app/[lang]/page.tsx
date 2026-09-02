import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { FeaturedExperiences } from "@/components/sections/FeaturedExperiences";
import { ForOrganizers } from "@/components/sections/ForOrganizers";
import { Community } from "@/components/sections/Community";
import { Faq } from "@/components/sections/Faq";
import { Waitlist } from "@/components/sections/Waitlist";
import { getDictionary } from "@/i18n/dictionaries";
import { hasLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main id="top">
        <Hero dict={dict} />
        <HowItWorks dict={dict} />
        <Categories dict={dict} />
        <FeaturedExperiences dict={dict} />
        <ForOrganizers dict={dict} />
        <Community dict={dict} />
        <Faq dict={dict} />
        <Waitlist dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  );
}
