import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Newspaper, User } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { PhotoTile } from "@/components/shared/photo-tile";
import { ArticleCard } from "@/components/news/article-card";
import { Badge } from "@/components/ui/badge";
import { getArticleBySlug, newsArticles } from "@/data/news";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/actualites/${article.slug}`,
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} crumbLabel={article.title} />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100">{article.category}</Badge>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden />
                {article.author}
              </span>
            </div>

            <PhotoTile
              icon={Newspaper}
              label={article.title}
              variant="mixed"
              className="mb-10 aspect-[16/9] w-full rounded-2xl shadow-lg"
            />

            <div className="flex flex-col gap-5">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-royal-950/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 font-heading text-2xl font-bold text-royal-900">
              Articles liés
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
