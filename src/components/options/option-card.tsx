import { Briefcase } from "lucide-react";
import type { SchoolOption } from "@/types";

export function OptionCard({ option }: { option: SchoolOption }) {
  return (
    <div className="group flex h-full flex-col gap-4 rounded-2xl border border-royal-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-600 to-royal-800 text-gold-300 shadow-md shadow-royal-900/10 transition-transform group-hover:scale-105">
        <option.icon className="h-7 w-7" aria-hidden />
      </span>
      <h3 className="font-heading text-lg font-bold text-royal-900">{option.name}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
      <div>
        <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
          <Briefcase className="h-3.5 w-3.5" aria-hidden />
          Débouchés
        </p>
        <div className="flex flex-wrap gap-1.5">
          {option.debouches.map((debouche) => (
            <span
              key={debouche}
              className="rounded-full bg-royal-50 px-3 py-1 text-xs font-medium text-royal-800"
            >
              {debouche}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
