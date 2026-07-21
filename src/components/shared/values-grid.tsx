import { values } from "@/data/values";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

export function ValuesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value, index) => (
        <AnimatedReveal key={value.title} delay={index * 0.06}>
          <div className="flex h-full flex-col gap-3 rounded-2xl border border-royal-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
              <value.icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="font-heading text-base font-bold text-royal-900">{value.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}
