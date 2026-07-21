import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionCard } from "@/components/sections/section-card";
import { OptionCard } from "@/components/options/option-card";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { CtaButton } from "@/components/shared/cta-button";
import { sections } from "@/data/sections";
import { options } from "@/data/options";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sections & Options",
  description:
    "Découvrez les 4 sections du Complexe Scolaire Les Aiglons Royaux (Maternelle, Primaire, Secondaire Général, Secondaire Technique) et les 9 options proposées.",
  path: "/sections",
});

export default function SectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sections & Options"
        title="Un parcours complet, du préscolaire au secondaire technique"
        description="Chaque section bénéficie d'une pédagogie adaptée à l'âge des élèves, et le secondaire s'enrichit de 9 options académiques et techniques."
        crumbLabel="Sections & Options"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos sections"
            title="4 sections, un même engagement d'excellence"
            align="left"
            className="mb-14"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {sections.map((section, index) => (
              <AnimatedReveal key={section.slug} delay={index * 0.08}>
                <SectionCard section={section} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos options"
            title="9 options pour construire l'avenir de chaque élève"
            description="Disponibles au secondaire général et au secondaire technique, nos options offrent des parcours variés, académiques ou professionnalisants, adaptés aux ambitions de chaque élève."
            align="left"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((option, index) => (
              <AnimatedReveal key={option.slug} delay={(index % 3) * 0.08}>
                <OptionCard option={option} />
              </AnimatedReveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <CtaButton href="/admissions" variant="gold">
              Inscrire mon enfant
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
