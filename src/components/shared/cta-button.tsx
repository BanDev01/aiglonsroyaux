import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "royal" | "outline" | "ghost-light";
  icon?: LucideIcon;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
}

const variants: Record<string, string> = {
  gold: "bg-gold-500 text-royal-950 hover:bg-gold-400 shadow-lg shadow-gold-500/30",
  royal: "bg-royal-700 text-white hover:bg-royal-600 shadow-lg shadow-royal-900/20",
  outline: "border-2 border-royal-700 text-royal-700 hover:bg-royal-700 hover:text-white",
  "ghost-light": "border-2 border-white/70 text-white hover:bg-white hover:text-royal-800",
};

export function CtaButton({
  href,
  children,
  variant = "gold",
  icon: Icon,
  className,
  external,
  showArrow = true,
}: CtaButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" aria-hidden />}
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
