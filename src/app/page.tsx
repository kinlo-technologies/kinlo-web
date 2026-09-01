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

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <HowItWorks />
        <Categories />
        <FeaturedExperiences />
        <ForOrganizers />
        <Community />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
