import { stats } from "@/data/stats";
import { StatCounter } from "@/components/shared/stat-counter";
import { AnimatedReveal } from "@/components/shared/animated-reveal";

export function StatsSection() {
  return (
    <section className="relative -mt-1 bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedReveal>
          <div className="grid grid-cols-2 gap-8 rounded-3xl border border-royal-100 bg-gradient-to-b from-royal-50/60 to-white p-8 shadow-sm sm:p-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={<stat.icon className="h-6 w-6" aria-hidden />}
              />
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
