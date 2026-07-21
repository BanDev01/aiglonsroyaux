import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import type { SchoolSection } from "@/types";
import { PhotoTile } from "@/components/shared/photo-tile";

export function SectionCard({ section }: { section: SchoolSection }) {
  return (
    <Link
      href={`/sections/${section.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-royal-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <PhotoTile
        icon={section.icon}
        label={section.name}
        variant={section.color}
        className="aspect-[16/11] w-full"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-600">
          <Users className="h-3.5 w-3.5" aria-hidden />
          {section.ageRange}
        </div>
        <h3 className="font-heading text-xl font-bold text-royal-900">{section.name}</h3>
        <p className="text-sm italic text-muted-foreground">{section.tagline}</p>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {section.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-700">
          En savoir plus
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
