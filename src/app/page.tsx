import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { QuickIntro } from "@/components/home/quick-intro";
import { WhyUs } from "@/components/home/why-us";
import { NewsPreview } from "@/components/home/news-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { CtaFinal } from "@/components/home/cta-final";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <QuickIntro />
      <WhyUs />
      <NewsPreview />
      <GalleryPreview />
      <CtaFinal />
    </>
  );
}
