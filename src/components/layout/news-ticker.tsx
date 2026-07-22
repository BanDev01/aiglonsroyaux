"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { newsArticles } from "@/data/news";

const PIXELS_PER_SECOND = 65;

export function NewsTicker() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState<{ start: number; end: number } | null>(null);

  const current = newsArticles[index];

  // Reset measurement whenever the headline changes, so the animated element
  // only ever mounts once we know its real start/end position — this avoids
  // Framer Motion redirecting a running animation mid-flight (which read as
  // jittery/shaky).
  useLayoutEffect(() => {
    setTravel(null);
  }, [current?.slug]);

  useLayoutEffect(() => {
    if (travel || !containerRef.current || !measureRef.current) return;
    setTravel({
      start: containerRef.current.offsetWidth,
      end: -measureRef.current.scrollWidth,
    });
  });

  if (newsArticles.length === 0) return null;

  const scrollDuration = travel ? (travel.start - travel.end) / PIXELS_PER_SECOND : 0;

  return (
    <div className="fixed inset-x-0 top-20 z-40 h-10 bg-royal-950 shadow-sm">
      <div className="container mx-auto flex h-full items-center gap-3 px-4 sm:px-6 lg:px-8">
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-500/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-400">
          <Radio className="h-3 w-3" aria-hidden />
          Actualités
        </span>
        <div ref={containerRef} className="relative h-full flex-1 overflow-hidden">
          {!travel && (
            <div
              ref={measureRef}
              className="invisible absolute inset-y-0 flex items-center whitespace-nowrap text-sm font-medium"
              aria-hidden
            >
              {current.title}
            </div>
          )}
          {travel && (
            <motion.div
              key={current.slug}
              initial={{ x: travel.start }}
              animate={{ x: travel.end }}
              transition={{ duration: scrollDuration, ease: "linear" }}
              onAnimationComplete={() => setIndex((i) => (i + 1) % newsArticles.length)}
              className="absolute inset-y-0 flex items-center whitespace-nowrap"
            >
              <Link
                href={`/actualites/${current.slug}`}
                className="text-sm font-medium text-white/90 transition-colors hover:text-gold-300"
              >
                {current.title}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
