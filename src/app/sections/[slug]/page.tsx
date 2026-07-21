import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ListChecks, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { PhotoTile } from "@/components/shared/photo-tile";
import { CtaButton } from "@/components/shared/cta-button";
import { getSectionBySlug, sections } from "@/data/sections";
import { options } from "@/data/options";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) return {};

  return buildMetadata({
    title: section.name,
    description: section.description,
    path: `/sections/${section.slug}`,
  });
}

export default async function SectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);
  if (!section) notFound();

  const relatedOptions = options.filter((option) => option.section === section.slug);

  return (
    <>
      <PageHero
        eyebrow={`Section · ${section.ageRange}`}
        title={section.name}
        description={section.tagline}
        crumbLabel={section.name}
        parentCrumb={{ label: "Sections & Options", href: "/sections" }}
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="flex flex-col gap-10">
              <AnimatedReveal>
                <p className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {section.description}
                </p>
              </AnimatedReveal>

              <AnimatedReveal delay={0.08}>
                <div className="rounded-2xl border border-royal-100 bg-white p-7 shadow-sm">
                  <h2 className="mb-5 flex items-center gap-2 font-heading text-lg font-bold text-royal-900">
                    <ListChecks className="h-5 w-5 text-gold-600" aria-hidden />
                    Nos objectifs pédagogiques
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {section.objectifs.map((objectif) => (
                      <li key={objectif} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" aria-hidden />
                        {objectif}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.16}>
                <div className="rounded-2xl border border-royal-100 bg-white p-7 shadow-sm">
                  <h2 className="mb-5 flex items-center gap-2 font-heading text-lg font-bold text-royal-900">
                    <Users className="h-5 w-5 text-gold-600" aria-hidden />
                    Nos méthodes pédagogiques
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {section.methodes.map((methode) => (
                      <li key={methode} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" aria-hidden />
                        {methode}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>

              {relatedOptions.length > 0 && (
                <AnimatedReveal delay={0.2}>
                  <div>
                    <h2 className="mb-5 font-heading text-lg font-bold text-royal-900">
                      Options disponibles
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                      {relatedOptions.map((option) => (
                        <span
                          key={option.slug}
                          className="rounded-full border border-royal-200 bg-royal-50 px-4 py-2 text-sm font-medium text-royal-800"
                        >
                          {option.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedReveal>
              )}
            </div>

            <AnimatedReveal direction="right" className="lg:sticky lg:top-28">
              <div className="flex flex-col gap-4">
                <PhotoTile
                  icon={section.icon}
                  label={section.name}
                  variant={section.color}
                  className="aspect-square w-full rounded-[1.75rem] shadow-lg"
                />
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <PhotoTile
                      key={i}
                      icon={section.icon}
                      variant={i % 2 === 0 ? "gold" : "mixed"}
                      className="aspect-square w-full rounded-xl"
                    />
                  ))}
                </div>
                <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6 text-center">
                  <p className="font-heading text-base font-bold text-royal-900">
                    Envie d&apos;inscrire votre enfant en {section.name} ?
                  </p>
                  <p className="mt-2 text-sm text-royal-800/70">
                    Places disponibles pour l&apos;année scolaire 2026–2027.
                  </p>
                  <div className="mt-4">
                    <CtaButton href="/admissions" variant="gold" className="w-full">
                      Faire une demande d&apos;admission
                    </CtaButton>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Découvrir aussi"
            title="Les autres sections de notre établissement"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {sections
              .filter((s) => s.slug !== section.slug)
              .slice(0, 3)
              .map((other) => (
                <a
                  key={other.slug}
                  href={`/sections/${other.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-royal-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                    <other.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-royal-900">{other.name}</p>
                    <p className="text-xs text-muted-foreground">{other.ageRange}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
