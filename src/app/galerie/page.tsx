import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { galleryItems } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Galerie",
  description:
    "Découvrez en images la vie scolaire, le sport, la culture, les laboratoires et les sorties éducatives du Complexe Scolaire Les Aiglons Royaux.",
  path: "/galerie",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="La vie de notre école en images"
        description="Vie scolaire, sport, culture, laboratoires et sorties éducatives : découvrez le quotidien de nos élèves."
        crumbLabel="Galerie"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </>
  );
}
