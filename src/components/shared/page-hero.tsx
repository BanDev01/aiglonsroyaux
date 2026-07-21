import { Breadcrumbs } from "@/components/shared/breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbLabel: string;
  parentCrumb?: { label: string; href: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbLabel,
  parentCrumb,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-royal-gradient pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div aria-hidden className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
      <div aria-hidden className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-royal-400/20 blur-3xl" />

      <div className="container relative mx-auto flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            ...(parentCrumb ? [parentCrumb] : []),
            { label: crumbLabel },
          ]}
        />
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-balance text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
