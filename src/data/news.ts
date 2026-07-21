import type { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "ouverture-inscriptions-2026-2027",
    title: "Ouverture des inscriptions pour l'année scolaire 2026–2027",
    excerpt:
      "Le Complexe Scolaire Les Aiglons Royaux ouvre officiellement les inscriptions pour sa toute première rentrée, dans toutes ses sections.",
    content: [
      "Le Complexe Scolaire Les Aiglons Royaux a le plaisir d'annoncer l'ouverture des inscriptions pour l'année scolaire 2026–2027, dans toutes ses sections : Maternelle, Primaire, Secondaire Général et Secondaire Technique.",
      "Les parents désireux d'inscrire leurs enfants sont invités à se présenter au secrétariat avec les documents requis, ou à soumettre une demande via notre formulaire d'admission en ligne.",
      "Pour rappel, tout parent inscrivant trois enfants bénéficie de la gratuité des frais scolaires pour un quatrième enfant, au niveau dont le tarif est le moins élevé.",
    ],
    category: "Communiqué",
    date: "2026-07-05",
    author: "Direction Générale",
    image: "",
    featured: true,
  },
  {
    slug: "bienvenue-aiglons-royaux",
    title: "Bienvenue au Complexe Scolaire Les Aiglons Royaux",
    excerpt:
      "Un nouvel établissement d'excellence ouvre ses portes à Lubumbashi, porté par les valeurs de travail, d'excellence et de discipline.",
    content: [
      "C'est avec une grande fierté que nous présentons le Complexe Scolaire Les Aiglons Royaux, un nouvel établissement pensé pour offrir aux familles de Lubumbashi un enseignement d'excellence, du préscolaire au secondaire technique.",
      "Notre projet éducatif repose sur trois piliers : le travail, l'excellence et la discipline. Anglais et informatique sont enseignés dès la maternelle, dans un cadre moderne, sécurisant et bienveillant.",
      "Nous avons hâte d'accueillir notre toute première promotion d'élèves dès la rentrée de septembre 2026.",
    ],
    category: "Communiqué",
    date: "2026-06-20",
    author: "Direction Générale",
    image: "",
    featured: true,
  },
  {
    slug: "mot-du-directeur-rentree-2026",
    title: "Le mot de la Direction pour notre première rentrée",
    excerpt:
      "À l'approche de notre première rentrée scolaire, la Direction partage sa vision et son engagement envers les familles.",
    content: [
      "Chers parents, chers futurs élèves, c'est avec beaucoup d'enthousiasme que notre équipe pédagogique se prépare à accueillir la toute première promotion du Complexe Scolaire Les Aiglons Royaux.",
      "Nous avons conçu cet établissement pour offrir un encadrement exigeant et bienveillant, avec un programme conforme aux exigences nationales, enrichi de l'anglais et de l'informatique dès la maternelle.",
      "Nous nous engageons à accompagner chaque enfant avec rigueur et attention, pour poser dès cette première année les bases de sa réussite.",
    ],
    category: "Communiqué",
    date: "2026-06-05",
    author: "Direction Générale",
    image: "",
  },
  {
    slug: "notre-approche-pedagogique",
    title: "Notre approche : anglais et informatique dès la maternelle",
    excerpt:
      "Découvrez comment notre programme intègre l'anglais et l'informatique dès les premières années de scolarité.",
    content: [
      "Convaincus que la maîtrise des langues et des outils numériques est essentielle à la réussite future de nos élèves, nous avons choisi d'intégrer l'anglais et l'informatique dès la section maternelle.",
      "Cet apprentissage se poursuit de façon progressive tout au long du parcours scolaire, jusqu'à la dernière année du secondaire, afin de préparer nos élèves aux exigences du monde moderne.",
    ],
    category: "Vie scolaire",
    date: "2026-05-14",
    author: "Cellule pédagogique",
    image: "",
  },
  {
    slug: "nos-infrastructures",
    title: "Découvrez nos infrastructures flambant neuves",
    excerpt:
      "Salles de classe, laboratoires, ateliers techniques et bibliothèque : un cadre moderne pensé pour l'apprentissage.",
    content: [
      "Le Complexe Scolaire Les Aiglons Royaux dispose de salles de classe modernes, de laboratoires scientifiques, d'ateliers techniques équipés et d'une bibliothèque, pensés pour accompagner nos élèves dans les meilleures conditions dès l'ouverture de l'établissement.",
      "Ces infrastructures continueront d'évoluer au fil des années pour répondre aux besoins pédagogiques de chaque section.",
    ],
    category: "Communiqué",
    date: "2026-04-22",
    author: "Direction Générale",
    image: "",
  },
  {
    slug: "portes-ouvertes-2026",
    title: "Journée portes ouvertes : venez découvrir notre nouvel établissement",
    excerpt:
      "Parents et futurs élèves sont invités à visiter nos infrastructures et rencontrer notre équipe pédagogique avant la rentrée.",
    content: [
      "À l'approche de notre première rentrée, nous invitons les familles de Lubumbashi à une journée portes ouvertes pour découvrir nos salles de classe, nos laboratoires, notre bibliothèque et nos ateliers techniques.",
      "Ce sera l'occasion d'échanger avec la Direction et l'équipe pédagogique autour du projet éducatif de l'établissement, et de poser toutes vos questions sur les admissions.",
    ],
    category: "Événement",
    date: "2026-03-10",
    author: "Direction Générale",
    image: "",
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
