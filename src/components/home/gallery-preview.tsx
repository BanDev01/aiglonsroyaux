import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CtaButton } from "@/components/shared/cta-button";

export function GalleryPreview() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galerie"
          title="La vie de notre école en images"
          description="Un aperçu de nos activités académiques, sportives et culturelles tout au long de l'année."
          className="mb-14"
        />

        <AnimatedReveal>
          <GalleryGrid items={galleryItems} showFilters={false} limit={6} />
        </AnimatedReveal>

        <div className="mt-12 flex justify-center">
          <CtaButton href="/galerie" variant="royal">
            Voir toute la galerie
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
