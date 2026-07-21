import { newsArticles } from "@/data/news";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ArticleCard } from "@/components/news/article-card";
import { CtaButton } from "@/components/shared/cta-button";

export function NewsPreview() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Actualités"
            title="Les dernières nouvelles de l'école"
            align="left"
            className="mb-0"
          />
          <CtaButton href="/vie-scolaire" variant="outline" className="shrink-0">
            Toutes les actualités
          </CtaButton>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((article, index) => (
            <AnimatedReveal key={article.slug} delay={index * 0.08}>
              <ArticleCard article={article} />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
