"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Radio } from "lucide-react";
import { newsArticles } from "@/data/news";

const ROTATE_MS = 5000;

export function NewsTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (newsArticles.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % newsArticles.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  if (newsArticles.length === 0) return null;

  const current = newsArticles[index];

  return (
    <div className="fixed inset-x-0 top-20 z-40 h-10 bg-royal-950 shadow-sm">
      <div className="container mx-auto flex h-full items-center gap-3 px-4 sm:px-6 lg:px-8">
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-500/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-400">
          <Radio className="h-3 w-3" aria-hidden />
          Actualités
        </span>
        <div className="relative h-full flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center"
            >
              <Link
                href={`/actualites/${current.slug}`}
                className="truncate text-sm font-medium text-white/90 transition-colors hover:text-gold-300"
              >
                {current.title}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
