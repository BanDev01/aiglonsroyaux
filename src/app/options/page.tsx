import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { OptionCard } from "@/components/options/option-card";
import { CtaButton } from "@/components/shared/cta-button";
import { options } from "@/data/options";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nos options",
  description:
    "Découvrez les 9 options proposées par le Complexe Scolaire Les Aiglons Royaux : Pédagogie Générale, Commerciale et Gestion, Sciences, Mécanique Automobile, Mécanique Générale, Électricité Générale, Électronique Générale, Chimie Industrielle et Coupe et Couture.",
  path: "/options",
});

export default function OptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos options"
        title="9 options pour construire l'avenir de chaque élève"
        description="Du secondaire général au secondaire technique, nos options offrent des parcours variés, académiques ou professionnalisants, adaptés aux ambitions de chaque élève."
        crumbLabel="Options"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
