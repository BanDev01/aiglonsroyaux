"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/types";
import { galleryCategories } from "@/data/gallery";
import { PhotoTile } from "@/components/shared/photo-tile";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  items: GalleryItem[];
  showFilters?: boolean;
  limit?: number;
}

export function GalleryGrid({ items, showFilters = true, limit }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "Tous">("Tous");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const base =
      activeCategory === "Tous" ? items : items.filter((item) => item.category === activeCategory);
    return limit ? base.slice(0, limit) : base;
  }, [items, activeCategory, limit]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {(["Tous", ...galleryCategories] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-royal-700 bg-royal-700 text-white"
                  : "border-royal-200 text-royal-800 hover:bg-royal-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-2xl text-left shadow-sm transition-shadow hover:shadow-lg"
            aria-label={`Agrandir : ${item.title}`}
          >
            <PhotoTile
              icon={Images}
              label={item.title}
              variant={
                index % 3 === 0 ? "royal" : index % 3 === 1 ? "mixed" : "gold"
              }
              className={cn(
                "w-full transition-transform duration-500 group-hover:scale-105",
                index % 4 === 0 ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          Aucune photo dans cette catégorie pour le moment.
        </p>
      )}

      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-2xl border-none bg-transparent p-0 shadow-none sm:max-w-2xl"
        >
          <DialogTitle className="sr-only">{current?.title ?? "Aperçu galerie"}</DialogTitle>
          {current && (
            <div className="relative">
              <PhotoTile
                icon={Images}
                label={current.title}
                variant="mixed"
                className="aspect-square w-full rounded-2xl sm:aspect-[4/3]"
              />
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Fermer"
                className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-royal-900 shadow-md"
              >
                <X className="h-4 w-4" />
              </button>
              <button
                onClick={() =>
                  setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
                }
                aria-label="Photo précédente"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-royal-900 shadow-md hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))}
                aria-label="Photo suivante"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-royal-900 shadow-md hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <p className="mt-3 text-center text-sm font-medium text-white">
                {current.title} · <span className="text-gold-300">{current.category}</span>
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
