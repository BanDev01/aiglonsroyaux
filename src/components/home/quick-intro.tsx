import { GraduationCap, Laptop, Languages, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { PhotoTile } from "@/components/shared/photo-tile";
import { CtaButton } from "@/components/shared/cta-button";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Encadrement rigoureux",
    text: "Une discipline structurante qui forme des élèves responsables et confiants.",
  },
  {
    icon: Languages,
    title: "Anglais dès la maternelle",
    text: "Un apprentissage progressif de l'anglais, du préscolaire au secondaire.",
  },
  {
    icon: Laptop,
    title: "Informatique dès la maternelle",
    text: "Des compétences numériques essentielles construites année après année.",
  },
  {
    icon: GraduationCap,
    title: "Excellence académique",
    text: "Un programme exigeant et un accompagnement individualisé pour chaque élève, dès la première rentrée.",
  },
];

export function QuickIntro() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <AnimatedReveal direction="right">
            <PhotoTile
              variant="mixed"
              icon={GraduationCap}
              label="Un cadre moderne, exigeant et bienveillant"
              className="aspect-[5/4] w-full rounded-[2rem] shadow-xl shadow-royal-950/10"
            />
          </AnimatedReveal>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Qui sommes-nous"
              title="Une école pensée pour la réussite de chaque élève"
              description="Le Complexe Scolaire Les Aiglons Royaux accompagne les enfants du préscolaire au secondaire technique, avec une pédagogie exigeante, moderne et résolument tournée vers l'avenir."
              align="left"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <AnimatedReveal key={item.title} delay={index * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-royal-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="font-heading text-sm font-bold text-royal-900">{item.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>

            <div>
              <CtaButton href="/a-propos" variant="outline">
                En savoir plus sur notre école
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
