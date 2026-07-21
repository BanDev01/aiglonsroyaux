import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-sm">
      <Link
        href="/"
        className="flex items-center gap-1 text-white/70 transition-colors hover:text-gold-300"
      >
        <Home className="h-3.5 w-3.5" aria-hidden />
        Accueil
      </Link>
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
          {item.href && index !== items.length - 1 ? (
            <Link href={item.href} className="text-white/70 transition-colors hover:text-gold-300">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="font-medium text-gold-300">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
