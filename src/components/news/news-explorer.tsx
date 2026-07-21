"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { NewsArticle, NewsCategory } from "@/types";
import { ArticleCard } from "@/components/news/article-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories: (NewsCategory | "Toutes")[] = [
  "Toutes",
  "Communiqué",
  "Résultats",
  "Événement",
  "Vie scolaire",
];

const PAGE_SIZE = 6;

export function NewsExplorer({ articles }: { articles: NewsArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Toutes");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "Toutes" || article.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleFilterChange(next: () => void) {
    next();
    setPage(1);
  }

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5">
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input
            value={query}
            onChange={(e) => handleFilterChange(() => setQuery(e.target.value))}
            placeholder="Rechercher un article..."
            className="pl-10"
            aria-label="Rechercher un article"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => handleFilterChange(() => setCategory(c))}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                category === c
                  ? "border-royal-700 bg-royal-700 text-white"
                  : "border-royal-200 text-royal-800 hover:bg-royal-50"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {paginated.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted-foreground">
          Aucun article ne correspond à votre recherche.
        </p>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i + 1 ? "page" : undefined}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                page === i + 1
                  ? "bg-royal-700 text-white"
                  : "border border-royal-200 text-royal-800 hover:bg-royal-50"
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
