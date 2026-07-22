import type { Metadata } from "next";
import { Award, BookOpenCheck, Building2, Compass, Target, Users2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ValuesGrid } from "@/components/shared/values-grid";
import { Timeline } from "@/components/about/timeline";
import { PhotoTile } from "@/components/shared/photo-tile";
import { CtaButton } from "@/components/shared/cta-button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Découvrez l'histoire, la mission, la vision et les valeurs du Complexe Scolaire Les Aiglons Royaux à Lubumbashi.",
  path: "/a-propos",
});

const whyUs = [
  {
    icon: Award,
    title: "Un programme conforme et exigeant",
    text: "Un cursus respectant le programme national officiel, avec l'ambition affichée de devenir une référence en matière d'enseignement.",
  },
  {
    icon: Users2,
    title: "Une équipe qualifiée",
    text: "Des enseignants qualifiés et expérimentés, pleinement investis dès cette première rentrée.",
  },
  {
    icon: Building2,
    title: "Des infrastructures neuves",
    text: "Salles de classe, laboratoires, ateliers techniques et bibliothèque, pensés et équipés pour l'ouverture de l'établissement.",
  },
  {
    icon: BookOpenCheck,
    title: "Une ambition claire",
    text: "Travail, excellence et discipline comme piliers dès le premier jour, pour construire durablement la réussite de chaque élève.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une école bâtie sur l'exigence et la bienveillance"
        description="Nouvellement ouvert à Lubumbashi, le Complexe Scolaire Les Aiglons Royaux ambitionne de former des élèves compétents, disciplinés et confiants, prêts à relever les défis de demain."
        crumbLabel="À propos"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <AnimatedReveal>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-royal-100 bg-white p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                  <BookOpenCheck className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-heading text-xl font-bold text-royal-900">Notre histoire</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Le Complexe Scolaire Les Aiglons Royaux ouvre ses portes à Lubumbashi en 2026,
                  né de la volonté d&apos;offrir aux familles congolaises un enseignement
                  d&apos;excellence, alliant rigueur académique, discipline et ouverture sur le
                  monde, de la maternelle au secondaire technique.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-royal-100 bg-white p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                  <Target className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-heading text-xl font-bold text-royal-900">Notre mission</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Offrir à chaque élève un encadrement pédagogique exigeant et bienveillant,
                  fondé sur le travail, l&apos;excellence et la discipline, afin de former des
                  citoyens compétents, responsables et prêts à réussir dans un monde en constante
                  évolution.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.16}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-royal-100 bg-white p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                  <Compass className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="font-heading text-xl font-bold text-royal-900">Notre vision</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Être reconnu comme l&apos;un des établissements scolaires de référence en
                  République Démocratique du Congo, en formant des leaders responsables, capables
                  d&apos;exceller aussi bien localement qu&apos;à l&apos;international.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Les piliers de notre projet éducatif"
            description="Six valeurs fondamentales guident chaque décision pédagogique et chaque interaction au sein de notre établissement."
            className="mb-14"
          />
          <ValuesGrid />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <AnimatedReveal direction="right">
              <PhotoTile
                icon={Users2}
                label="Le mot de la Direction"
                variant="dark"
                className="aspect-square w-full rounded-[2rem] shadow-xl shadow-royal-950/10 sm:aspect-[4/5]"
              />
            </AnimatedReveal>
            <AnimatedReveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700">
                Le mot de la Direction
              </span>
              <blockquote className="text-balance font-heading text-2xl font-semibold leading-snug text-royal-900 sm:text-3xl">
                &ldquo;Notre ambition est simple : donner à chaque enfant qui nous est confié les
                moyens de devenir la meilleure version de lui-même, par le travail, l&apos;excellence
                et la discipline.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Chaque jour, notre équipe pédagogique s&apos;engage à accompagner vos enfants avec
                exigence et bienveillance. Nous croyons profondément que l&apos;éducation est le
                socle sur lequel se construisent les leaders de demain — c&apos;est cette conviction
                qui anime chacune de nos actions, de la salle de classe à la cour de récréation.
              </p>
              <p className="mt-4 font-heading text-sm font-bold text-royal-900">
                La Direction Générale
                <span className="block text-xs font-medium text-muted-foreground">
                  Complexe Scolaire Les Aiglons Royaux
                </span>
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre feuille de route"
            title="Notre première année, étape par étape"
            className="mb-16"
          />
          <Timeline />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title="Pourquoi choisir Les Aiglons Royaux ?"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, index) => (
              <AnimatedReveal key={item.title} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-royal-100 bg-white p-6 text-center shadow-sm">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                    <item.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="font-heading text-sm font-bold text-royal-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaButton href="#" variant="gold">
              Inscrire mon enfant
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
