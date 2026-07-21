import Link from "next/link";
import { CalendarDays, Newspaper } from "lucide-react";
import type { NewsArticle } from "@/types";
import { PhotoTile } from "@/components/shared/photo-tile";
import { Badge } from "@/components/ui/badge";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/actualites/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-royal-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <PhotoTile
        icon={Newspaper}
        imageUrl={article.image || undefined}
        variant={article.category === "Résultats" ? "gold" : "royal"}
        className="aspect-[16/10] w-full"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100">{article.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            {formatDate(article.date)}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold leading-snug text-royal-900 transition-colors group-hover:text-royal-600">
          {article.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <span className="text-sm font-semibold text-royal-700 transition-transform group-hover:translate-x-1">
          Lire la suite →
        </span>
      </div>
    </Link>
  );
}
