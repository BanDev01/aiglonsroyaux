import { GraduationCap } from "lucide-react";
import { CtaButton } from "@/components/shared/cta-button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-royal-gradient pt-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="container relative mx-auto flex flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300">
          <GraduationCap className="h-8 w-8" aria-hidden />
        </span>
        <p className="font-heading text-7xl font-extrabold text-gold-400">404</p>
        <h1 className="text-balance font-heading text-2xl font-bold text-white sm:text-3xl">
          Cette page n&apos;existe pas
        </h1>
        <p className="max-w-md text-balance text-white/75">
          La page que vous recherchez a peut-être été déplacée ou n&apos;existe plus. Retournez à
          l&apos;accueil pour continuer votre navigation.
        </p>
        <CtaButton href="/" variant="gold">
          Retour à l&apos;accueil
        </CtaButton>
      </div>
    </section>
  );
}
