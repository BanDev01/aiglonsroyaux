import type { LucideIcon } from "lucide-react";

export type SectionSlug =
  | "maternelle"
  | "primaire"
  | "secondaire-general"
  | "secondaire-technique";

export interface SchoolSection {
  slug: SectionSlug;
  name: string;
  shortName: string;
  ageRange: string;
  tagline: string;
  description: string;
  objectifs: string[];
  methodes: string[];
  gallery: { url: string; alt: string }[];
  heroImage: string;
  icon: LucideIcon;
  color: "royal" | "gold";
}

export interface SchoolOption {
  slug: string;
  name: string;
  description: string;
  debouches: string[];
  icon: LucideIcon;
  section: SectionSlug;
}

export type NewsCategory =
  | "Communiqué"
  | "Résultats"
  | "Événement"
  | "Vie scolaire";

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: NewsCategory;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export type GalleryCategory =
  | "Vie scolaire"
  | "Sport"
  | "Culture"
  | "Laboratoire"
  | "Sorties";

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  category: GalleryCategory;
  title: string;
  url: string;
  videoId?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
