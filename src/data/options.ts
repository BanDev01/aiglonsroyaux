import {
  Atom,
  Car,
  Cog,
  Cpu,
  FlaskRound,
  GraduationCap,
  LineChart,
  Scissors,
  Zap,
} from "lucide-react";
import type { SchoolOption } from "@/types";

export const options: SchoolOption[] = [
  {
    slug: "pedagogie-generale",
    name: "Pédagogie Générale",
    description:
      "Une formation générale solide qui prépare aux études pédagogiques et à l'enseignement, avec un accent sur la culture générale, la communication et la méthodologie.",
    debouches: ["Instituts pédagogiques", "Enseignement", "Sciences humaines"],
    icon: GraduationCap,
    section: "secondaire-general",
  },
  {
    slug: "commerciale-et-gestion",
    name: "Commerciale et Gestion",
    description:
      "Comptabilité, gestion d'entreprise, économie et techniques commerciales pour former de futurs gestionnaires et entrepreneurs rigoureux.",
    debouches: ["Gestion", "Comptabilité", "Économie", "Entrepreneuriat"],
    icon: LineChart,
    section: "secondaire-general",
  },
  {
    slug: "sciences",
    name: "Sciences",
    description:
      "Mathématiques, physique, chimie et biologie approfondies pour les élèves visant des études supérieures scientifiques et médicales.",
    debouches: ["Médecine", "Ingénierie", "Sciences appliquées"],
    icon: Atom,
    section: "secondaire-general",
  },
  {
    slug: "mecanique-automobile",
    name: "Mécanique Automobile",
    description:
      "Diagnostic, entretien et réparation des véhicules à travers une formation pratique intensive sur des ateliers équipés.",
    debouches: ["Garage automobile", "Auto-entrepreneuriat", "Industrie automobile"],
    icon: Car,
    section: "secondaire-technique",
  },
  {
    slug: "mecanique-generale",
    name: "Mécanique Générale",
    description:
      "Usinage, ajustage et maintenance industrielle pour des techniciens capables d'intervenir sur tout type d'équipement mécanique.",
    debouches: ["Ateliers industriels", "Maintenance", "Fabrication mécanique"],
    icon: Cog,
    section: "secondaire-technique",
  },
  {
    slug: "electricite-generale",
    name: "Électricité Générale",
    description:
      "Installation, câblage et maintenance des systèmes électriques domestiques et industriels dans le respect strict des normes de sécurité.",
    debouches: ["Installation électrique", "Maintenance industrielle", "Bâtiment"],
    icon: Zap,
    section: "secondaire-technique",
  },
  {
    slug: "electronique-generale",
    name: "Électronique Générale",
    description:
      "Circuits, composants et systèmes électroniques pour des techniciens prêts à intervenir sur les équipements modernes.",
    debouches: ["Réparation électronique", "Télécommunications", "Systèmes embarqués"],
    icon: Cpu,
    section: "secondaire-technique",
  },
  {
    slug: "chimie-industrielle",
    name: "Chimie Industrielle",
    description:
      "Procédés chimiques, analyse et contrôle qualité pour préparer les élèves aux métiers de l'industrie chimique et agroalimentaire.",
    debouches: ["Laboratoires", "Industrie chimique", "Contrôle qualité"],
    icon: FlaskRound,
    section: "secondaire-technique",
  },
  {
    slug: "coupe-et-couture",
    name: "Coupe et Couture",
    description:
      "Patronage, confection et stylisme pour développer un savoir-faire artisanal recherché et un véritable potentiel entrepreneurial.",
    debouches: ["Atelier de couture", "Stylisme", "Auto-entrepreneuriat"],
    icon: Scissors,
    section: "secondaire-technique",
  },
];
