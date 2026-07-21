import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionCard } from "@/components/sections/section-card";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { sections } from "@/data/sections";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nos sections",
  description:
    "Découvrez les 4 sections du Complexe Scolaire Les Aiglons Royaux : Maternelle, Primaire, Secondaire Général et Secondaire Technique.",
  path: "/sections",
});

export default function SectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos sections"
        title="Un parcours complet, du préscolaire au secondaire technique"
        description="Chaque section bénéficie d'une pédagogie adaptée à l'âge des élèves, avec un même engagement d'excellence."
        crumbLabel="Sections"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {sections.map((section, index) => (
              <AnimatedReveal key={section.slug} delay={index * 0.08}>
                <SectionCard section={section} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
