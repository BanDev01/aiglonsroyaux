import type { Metadata } from "next";
import { Baby, CheckCircle2, Gift, Laptop2, Languages, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { AdmissionForm } from "@/components/admissions/admission-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sections } from "@/data/sections";
import { faqs } from "@/data/values";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admissions 2026–2027",
  description:
    "Inscriptions ouvertes pour l'année scolaire 2026–2027 au Complexe Scolaire Les Aiglons Royaux : Maternelle, Primaire et Secondaire.",
  path: "/admissions",
});

const advantages = [
  {
    icon: Gift,
    title: "Avantage Famille",
    text: "Tout parent inscrivant trois (3) enfants bénéficie de la gratuité des frais scolaires pour un quatrième enfant, au niveau dont le tarif est le moins élevé.",
  },
  {
    icon: Languages,
    title: "Anglais dès la maternelle",
    text: "Les cours d'anglais sont dispensés de la maternelle jusqu'à la dernière année du secondaire, afin de développer les compétences linguistiques des élèves dès leur plus jeune âge.",
  },
  {
    icon: Laptop2,
    title: "Informatique dès la maternelle",
    text: "Les cours d'informatique commencent dès la maternelle et se poursuivent jusqu'à la dernière année, préparant les élèves à maîtriser les outils numériques indispensables à leur réussite.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Inscriptions ouvertes 2026 – 2027"
        description="Offrez dès aujourd'hui à votre enfant un enseignement d'excellence, du préscolaire au secondaire technique."
        crumbLabel="Admissions"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6 sm:p-8">
              <p className="mb-4 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-gold-700">
                <Sparkles className="h-4 w-4" aria-hidden />
                Les inscriptions sont ouvertes pour :
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Maternelle", icon: sections[0].icon },
                  { label: "Primaire", icon: sections[1].icon },
                  { label: "Secondaire", icon: sections[2].icon },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-royal-50 text-royal-700">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-heading text-sm font-bold text-royal-900">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="py-8 pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <AnimatedReveal direction="right">
              <div className="rounded-3xl border border-royal-100 bg-white p-7 shadow-sm sm:p-9">
                <h2 className="mb-1 font-heading text-2xl font-bold text-royal-900">
                  Formulaire d&apos;admission
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Remplissez ce formulaire, notre équipe vous recontactera pour finaliser
                  l&apos;inscription.
                </p>
                <AdmissionForm />
              </div>
            </AnimatedReveal>

            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Pourquoi nous choisir"
                title="Des avantages pensés pour votre famille"
                align="left"
                className="mb-2"
              />
              {advantages.map((advantage, index) => (
                <AnimatedReveal key={advantage.title} delay={index * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-royal-100 bg-white p-6 shadow-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 text-gold-300">
                      <advantage.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-royal-900">
                        {advantage.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {advantage.text}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}

              <AnimatedReveal delay={0.3}>
                <div className="rounded-2xl border border-royal-100 bg-royal-950 p-6 text-white">
                  <p className="mb-3 flex items-center gap-2 font-heading text-sm font-bold">
                    <Baby className="h-4 w-4 text-gold-400" aria-hidden />
                    Documents à fournir
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-white/75">
                    {[
                      "Copie de l'acte de naissance",
                      "Bulletins de l'année précédente",
                      "4 photos passeport",
                      "Certificat de fin d'études (si applicable)",
                    ].map((doc) => (
                      <li key={doc} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Tout ce qu'il faut savoir sur l'admission"
            className="mb-12"
          />
          <div className="mx-auto max-w-2xl rounded-2xl border border-royal-100 bg-white p-6 shadow-sm sm:p-8">
            <Accordion>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="font-heading text-royal-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
