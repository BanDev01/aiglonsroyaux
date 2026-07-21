import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { NewsExplorer } from "@/components/news/news-explorer";
import { newsArticles } from "@/data/news";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Actualités",
  description:
    "Communiqués, résultats, événements et vie scolaire : suivez toute l'actualité du Complexe Scolaire Les Aiglons Royaux.",
  path: "/actualites",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Toute l'actualité de notre école"
        description="Communiqués officiels, résultats académiques, événements et vie scolaire : restez informés."
        crumbLabel="Actualités"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsExplorer articles={newsArticles} />
        </div>
      </section>
    </>
  );
}
