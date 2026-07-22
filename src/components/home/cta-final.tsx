import { GraduationCap } from "lucide-react";
import { CtaButton } from "@/components/shared/cta-button";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-royal-gradient py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-royal-400/20 blur-3xl" />

      <div className="container relative mx-auto flex flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <AnimatedReveal>
          <span className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300">
            <GraduationCap className="h-7 w-7" aria-hidden />
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Offrez à votre enfant l&apos;excellence qu&apos;il mérite
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-white/80">
            Les inscriptions pour l&apos;année scolaire 2026–2027 sont ouvertes. Rejoignez dès
            aujourd&apos;hui la famille des Aiglons Royaux.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="#" variant="gold">
              Inscrire mon enfant
            </CtaButton>
            <CtaButton href="/contact" variant="ghost-light" showArrow={false}>
              Nous contacter
            </CtaButton>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
