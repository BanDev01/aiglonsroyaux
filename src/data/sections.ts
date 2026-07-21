import { Baby, BookOpen, FlaskConical, Wrench } from "lucide-react";
import type { SchoolSection } from "@/types";

export const sections: SchoolSection[] = [
  {
    slug: "maternelle",
    name: "Maternelle",
    shortName: "Maternelle",
    ageRange: "3 – 5 ans",
    tagline: "L'éveil en douceur, les bases pour la vie.",
    description:
      "Notre section maternelle accueille les tout-petits dans un cadre chaleureux, sécurisant et stimulant. À travers le jeu, la découverte sensorielle et les premiers apprentissages structurés, nous posons les fondations de la curiosité, de la sociabilité et de la discipline qui accompagneront l'enfant tout au long de sa scolarité.",
    objectifs: [
      "Développer le langage oral en français et les premières notions d'anglais",
      "Éveiller la motricité fine et globale par le jeu encadré",
      "Favoriser l'autonomie, la politesse et le respect des règles de vie collective",
      "Initier aux formes, couleurs, chiffres et lettres de manière ludique",
      "Premiers pas dans l'univers numérique et informatique",
    ],
    methodes: [
      "Pédagogie active centrée sur le jeu et la manipulation",
      "Ateliers en petits groupes encadrés par des éducatrices qualifiées",
      "Apprentissage de l'anglais par l'immersion ludique (chants, comptines)",
      "Suivi individualisé du développement de chaque enfant",
    ],
    gallery: [],
    heroImage: "",
    icon: Baby,
    color: "gold",
  },
  {
    slug: "primaire",
    name: "Primaire",
    shortName: "Primaire",
    ageRange: "6 – 11 ans",
    tagline: "Construire des savoirs solides, cultiver la rigueur.",
    description:
      "La section primaire consolide les apprentissages fondamentaux — lecture, écriture, calcul — tout en développant l'esprit critique, la curiosité scientifique et le goût de l'effort. Nos enseignants accompagnent chaque élève avec exigence et bienveillance pour bâtir des bases académiques durables.",
    objectifs: [
      "Maîtriser la lecture, l'écriture et le calcul selon le programme national",
      "Renforcer les compétences en anglais et en informatique",
      "Développer la méthode de travail, l'organisation et l'autonomie",
      "Encourager l'expression orale, le raisonnement logique et la créativité",
      "Préparer sereinement le passage vers le secondaire",
    ],
    methodes: [
      "Programme national enrichi (anglais et informatique dès la 1ère année)",
      "Évaluations régulières et suivi personnalisé des progrès",
      "Ateliers de lecture, de calcul mental et de sciences expérimentales",
      "Activités parascolaires favorisant la discipline et l'esprit d'équipe",
    ],
    gallery: [],
    heroImage: "",
    icon: BookOpen,
    color: "royal",
  },
  {
    slug: "secondaire-general",
    name: "Secondaire Général",
    shortName: "Secondaire Général",
    ageRange: "12 – 18 ans",
    tagline: "Approfondir, orienter, exceller.",
    description:
      "Le secondaire général prépare les élèves aux exigences académiques supérieures à travers les options Pédagogie Générale, Commerciale et Gestion, et Sciences. Nous conjuguons excellence académique, orientation personnalisée et ouverture sur le monde pour former des bacheliers prêts à réussir à l'université comme dans la vie professionnelle.",
    objectifs: [
      "Approfondir les disciplines fondamentales selon l'option choisie",
      "Développer l'analyse critique, la rigueur scientifique et méthodologique",
      "Renforcer la maîtrise de l'anglais et des outils informatiques avancés",
      "Accompagner l'orientation vers l'enseignement supérieur",
      "Cultiver le leadership, la discipline et l'esprit d'excellence",
    ],
    methodes: [
      "Options : Pédagogie Générale, Commerciale et Gestion, Sciences",
      "Corps enseignant qualifié et évaluations conformes au programme national",
      "Préparation ciblée aux examens d'État",
      "Clubs académiques, concours et journées scientifiques",
    ],
    gallery: [],
    heroImage: "",
    icon: FlaskConical,
    color: "royal",
  },
  {
    slug: "secondaire-technique",
    name: "Secondaire Technique",
    shortName: "Secondaire Technique",
    ageRange: "12 – 18 ans",
    tagline: "Des compétences concrètes pour un avenir professionnel solide.",
    description:
      "La section technique forme des élèves compétents et immédiatement opérationnels dans des filières porteuses : mécanique automobile, mécanique générale, électricité, électronique, chimie industrielle et coupe et couture. Ateliers pratiques, encadrement technique spécialisé et rigueur professionnelle sont au cœur de cette formation.",
    objectifs: [
      "Acquérir une expertise technique pratique reconnue",
      "Développer la précision, la sécurité et le sens des responsabilités",
      "Préparer à l'insertion professionnelle ou à la poursuite d'études techniques",
      "Renforcer les bases théoriques indispensables à chaque filière",
      "Cultiver l'esprit d'initiative et l'entrepreneuriat",
    ],
    methodes: [
      "Options : Mécanique Automobile, Mécanique Générale, Électricité Générale, Électronique Générale, Chimie Industrielle, Coupe et Couture",
      "Ateliers équipés et encadrement par des formateurs expérimentés",
      "Stages pratiques et projets concrets",
      "Partenariats en vue de l'insertion professionnelle",
    ],
    gallery: [],
    heroImage: "",
    icon: Wrench,
    color: "gold",
  },
];

export function getSectionBySlug(slug: string) {
  return sections.find((section) => section.slug === slug);
}
