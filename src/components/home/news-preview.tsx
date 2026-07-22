import { newsArticles } from "@/data/news";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ArticleCard } from "@/components/news/article-card";

export function NewsPreview() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Actualités"
          title="Les dernières nouvelles de l'école"
          align="left"
          className="mb-14"
        />

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
