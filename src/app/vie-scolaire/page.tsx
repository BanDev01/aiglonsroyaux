import type { Metadata } from "next";
import {
  BookMarked,
  FlaskConical,
  Map,
  Medal,
  Music,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { PhotoTile } from "@/components/shared/photo-tile";
import { NewsExplorer } from "@/components/news/news-explorer";
import { newsArticles } from "@/data/news";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vie scolaire & Actualités",
  description:
    "Activités culturelles, sportives, clubs, laboratoires, bibliothèque, sorties éducatives et toute l'actualité du Complexe Scolaire Les Aiglons Royaux.",
  path: "/vie-scolaire",
});

const activities = [
  {
    icon: Music,
    title: "Activités culturelles",
    text: "Chorales, danses, concours d'art oratoire et expositions valorisent la créativité de nos élèves.",
    variant: "gold" as const,
  },
  {
    icon: Trophy,
    title: "Activités sportives",
    text: "Football, basketball, athlétisme : le sport développe l'esprit d'équipe et la discipline physique.",
    variant: "royal" as const,
  },
  {
    icon: Users,
    title: "Clubs",
    text: "Clubs de lecture, de débat, d'informatique et d'entrepreneuriat pour cultiver les passions.",
    variant: "mixed" as const,
  },
  {
    icon: FlaskConical,
    title: "Laboratoires",
    text: "Des laboratoires scientifiques et ateliers techniques équipés pour l'apprentissage par la pratique.",
    variant: "dark" as const,
  },
  {
    icon: BookMarked,
    title: "Bibliothèque",
    text: "Un espace calme et riche en ressources pour cultiver le goût de la lecture et de la recherche.",
    variant: "royal" as const,
  },
  {
    icon: Map,
    title: "Sorties éducatives",
    text: "Visites de musées, d'entreprises et de sites scientifiques pour ancrer les apprentissages dans le réel.",
    variant: "gold" as const,
  },
  {
    icon: Medal,
    title: "Concours",
    text: "Concours académiques, sportifs et artistiques qui valorisent l'excellence et le mérite.",
    variant: "mixed" as const,
  },
  {
    icon: Sparkles,
    title: "Journées scientifiques",
    text: "Une journée annuelle où les élèves présentent leurs projets scientifiques et techniques.",
    variant: "dark" as const,
  },
];

export default function VieScolairePage() {
  return (
    <>
      <PageHero
        eyebrow="Vie scolaire & Actualités"
        title="Une vie scolaire riche, et toute l'actualité de l'école"
        description="Au-delà des cours, nous cultivons chez nos élèves la curiosité, l'esprit d'équipe et le goût de l'effort — et vous tenons informés de la vie de l'établissement."
        crumbLabel="Vie scolaire & Actualités"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vie scolaire"
            title="Une vie scolaire riche et épanouissante"
            align="left"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, index) => (
              <AnimatedReveal key={activity.title} delay={(index % 4) * 0.08}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-royal-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <PhotoTile
                    icon={activity.icon}
                    variant={activity.variant}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="font-heading text-base font-bold text-royal-900">
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{activity.text}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Actualités"
            title="Toute l'actualité de notre école"
            description="Communiqués officiels, événements et vie scolaire : restez informés."
            align="left"
            className="mb-14"
          />
          <NewsExplorer articles={newsArticles} />
        </div>
      </section>
    </>
  );
}
