"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/shared/cta-button";
import { siteConfig } from "@/data/site";

export function Hero() {
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
      <motion.div
        aria-hidden
        className="absolute -right-32 top-16 h-[28rem] w-[28rem] rounded-full bg-gold-400/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-royal-400/25 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Inscriptions ouvertes 2026 – 2027
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Former aujourd&apos;hui{" "}
            <span className="text-gradient-gold">les leaders</span> de demain.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-balance text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Le Complexe Scolaire Les Aiglons Royaux offre à Lubumbashi un enseignement
            d&apos;excellence de la maternelle au secondaire technique — anglais et informatique
            dès le plus jeune âge, encadrement rigoureux et cadre moderne et sécurisant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton href="#" variant="gold">
              Inscrire mon enfant
            </CtaButton>
            <CtaButton href="/a-propos" variant="ghost-light" showArrow={false}>
              Découvrir l&apos;école
            </CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 pt-2 text-sm text-white/70"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <GraduationCap className="h-4 w-4 text-gold-300" aria-hidden />
            </span>
            {siteConfig.motto}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass relative aspect-[4/5] w-full rounded-[2rem] border-white/20 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-royal-800 via-royal-700 to-royal-900">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(245,180,0,0.9) 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <GraduationCap className="h-16 w-16 text-gold-400" strokeWidth={1.3} aria-hidden />
                <p className="font-heading text-2xl font-bold text-white">
                  Excellence Académique
                </p>
                <p className="text-sm text-white/70">
                  Maternelle • Primaire • Secondaire Général • Secondaire Technique
                </p>
              </div>
            </div>
          </div>
          <div className="glass absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 text-royal-950 font-heading font-bold">
              2026
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-royal-900">Première rentrée</p>
              <p className="text-[11px] text-royal-700/70">de notre nouvel établissement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
