import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "royal" | "gold" | "mixed" | "dark";

const gradients: Record<Variant, string> = {
  royal: "from-royal-700 via-royal-600 to-royal-800",
  gold: "from-gold-500 via-gold-400 to-royal-700",
  mixed: "from-royal-800 via-royal-600 to-gold-500",
  dark: "from-royal-950 via-royal-800 to-royal-700",
};

interface PhotoTileProps {
  icon?: LucideIcon;
  label?: string;
  variant?: Variant;
  className?: string;
  imageUrl?: string;
  alt?: string;
  priority?: boolean;
}

export function PhotoTile({
  icon: Icon,
  label,
  variant = "royal",
  className,
  imageUrl,
  alt,
  priority,
}: PhotoTileProps) {
  if (imageUrl) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={imageUrl}
          alt={alt ?? label ?? ""}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br text-white",
        gradients[variant],
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-gold-400/20 blur-2xl"
      />
      {Icon && (
        <Icon className="relative mb-3 h-9 w-9 text-gold-300" strokeWidth={1.5} aria-hidden />
      )}
      {label && (
        <p className="relative max-w-[80%] text-center text-sm font-medium text-white/90">
          {label}
        </p>
      )}
    </div>
  );
}
