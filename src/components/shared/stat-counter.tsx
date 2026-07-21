"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: ReactNode;
  light?: boolean;
}

export function StatCounter({ value, suffix = "", label, icon, light }: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString("fr-FR"));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      {icon && (
        <span
          className={
            light
              ? "mb-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold-300"
              : "mb-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-50 text-royal-700"
          }
        >
          {icon}
        </span>
      )}
      <p
        ref={ref}
        className={
          (light ? "text-white" : "text-royal-900") +
          " font-heading text-4xl font-extrabold tabular-nums sm:text-5xl"
        }
      >
        <motion.span>{rounded}</motion.span>
        <span className="text-gold-500">{suffix}</span>
      </p>
      <p className={light ? "text-sm text-white/75" : "text-sm text-muted-foreground"}>{label}</p>
    </div>
  );
}
