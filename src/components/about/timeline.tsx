import { AnimatedReveal } from "@/components/shared/animated-reveal";

const milestones = [
  {
    year: "Juil. 2026",
    title: "Ouverture des inscriptions",
    text: "Lancement des inscriptions pour la toute première rentrée du Complexe Scolaire Les Aiglons Royaux.",
  },
  {
    year: "Sept. 2026",
    title: "Rentrée scolaire inaugurale",
    text: "Accueil des premiers élèves en Maternelle, Primaire, Secondaire Général et Secondaire Technique.",
  },
  {
    year: "Oct. 2026",
    title: "Lancement de la vie scolaire",
    text: "Mise en place des premiers clubs et activités sportives et culturelles.",
  },
  {
    year: "Déc. 2026",
    title: "Premier bilan trimestriel",
    text: "Premières évaluations et rencontres entre parents et enseignants.",
  },
  {
    year: "2027",
    title: "Une ambition qui grandit",
    text: "Renforcement continu des infrastructures et de l'équipe pédagogique pour accompagner la croissance de l'école.",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-[15px] top-2 bottom-2 w-px bg-royal-100 sm:left-1/2"
      />
      <div className="flex flex-col gap-10">
        {milestones.map((milestone, index) => (
          <AnimatedReveal
            key={milestone.year}
            delay={index * 0.08}
            direction={index % 2 === 0 ? "right" : "left"}
          >
            <div
              className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gold-500 shadow-md sm:left-1/2 sm:-translate-x-1/2" />
              <div className="w-full pl-10 sm:w-1/2 sm:pl-0 sm:even:pl-10">
                <div
                  className={`rounded-2xl border border-royal-100 bg-white p-6 shadow-sm ${
                    index % 2 === 0 ? "sm:mr-10" : "sm:ml-10"
                  }`}
                >
                  <span className="font-heading text-xl font-extrabold text-gold-600">
                    {milestone.year}
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-royal-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {milestone.text}
                  </p>
                </div>
              </div>
              <div className="hidden w-1/2 sm:block" />
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </div>
  );
}
