import { Award, CalendarRange, GraduationCap, School } from "lucide-react";
import type { StatItem } from "@/types";

export const stats: StatItem[] = [
  { label: "Année de fondation", value: 2026, icon: CalendarRange },
  { label: "Sections d'enseignement", value: 4, icon: School },
  { label: "Options proposées", value: 9, icon: GraduationCap },
  { label: "Programme national respecté", value: 100, suffix: "%", icon: Award },
];
