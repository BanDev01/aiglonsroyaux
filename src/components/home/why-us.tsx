import { Gift, Globe2, Laptop2, ShieldCheck, Trophy, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

const reasons = [
  {
    icon: Trophy,
    title: "Un programme d'excellence",
    text: "Un cursus conforme au programme national, porté par une équipe pédagogique exigeante et engagée dès la première rentrée.",
  },
  {
    icon: Globe2,
    title: "Anglais dès la maternelle",
    text: "Un apprentissage précoce et progressif de l'anglais jusqu'à la fin du secondaire.",
  },
  {
    icon: Laptop2,
    title: "Informatique dès la maternelle",
    text: "Des compétences numériques développées dès le plus jeune âge pour préparer l'avenir.",
  },
  {
    icon: Gift,
    title: "Avantage famille",
    text: "3 enfants inscrits, le 4ème bénéficie de la gratuité des frais scolaires au niveau le moins élevé.",
  },
  {
    icon: ShieldCheck,
    title: "Cadre sécurisant",
    text: "Un environnement discipliné, moderne et bienveillant, pensé pour l'épanouissement des enfants.",
  },
  {
    icon: Users2,
    title: "Équipe qualifiée",
    text: "Des enseignants expérimentés, formés et engagés dans la réussite de chaque élève.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-royal-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-[1px]"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pourquoi choisir notre école"
          title="Des avantages concrets pour la réussite de votre enfant"
          description="Une pédagogie moderne, une discipline exigeante et des avantages pensés pour accompagner chaque famille."
          light
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimatedReveal key={reason.title} delay={index * 0.06}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/10">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-royal-950">
                  <reason.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold text-white">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{reason.text}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
