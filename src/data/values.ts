import { BookOpenCheck, Handshake, Lightbulb, ShieldCheck, Target, Trophy } from "lucide-react";
import type { FaqItem, ValueItem } from "@/types";

export const values: ValueItem[] = [
  {
    title: "Travail",
    description: "Nous cultivons l'effort constant et la rigueur comme clés de la réussite.",
    icon: Target,
  },
  {
    title: "Excellence",
    description: "Nous visons le plus haut niveau académique et humain, sans compromis.",
    icon: Trophy,
  },
  {
    title: "Discipline",
    description: "Un cadre structuré et exigeant qui forme le caractère et la responsabilité.",
    icon: ShieldCheck,
  },
  {
    title: "Intégrité",
    description: "L'honnêteté et le respect guident chaque relation au sein de l'école.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    description: "Une pédagogie moderne, ouverte au numérique et aux méthodes actives.",
    icon: Lightbulb,
  },
  {
    title: "Savoir",
    description: "Une transmission exigeante des connaissances, du préscolaire au technique.",
    icon: BookOpenCheck,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Quelles sont les conditions d'admission ?",
    answer:
      "L'admission se fait sur dossier (bulletins précédents, acte de naissance, photos) et selon les places disponibles par classe. Un test de niveau peut être organisé pour les classes d'accueil au primaire et au secondaire.",
  },
  {
    question: "Les cours d'anglais et d'informatique sont-ils inclus dans le programme ?",
    answer:
      "Oui. L'anglais et l'informatique sont enseignés dès la maternelle et se poursuivent jusqu'à la dernière année du secondaire, sans frais supplémentaires.",
  },
  {
    question: "Comment fonctionne l'avantage famille ?",
    answer:
      "Tout parent inscrivant trois (3) enfants au sein de notre complexe scolaire bénéficie de la gratuité des frais scolaires pour un quatrième enfant, au niveau dont le tarif est le moins élevé.",
  },
  {
    question: "Proposez-vous un transport scolaire ?",
    answer:
      "Des informations sur le transport scolaire sont communiquées lors de l'inscription. Contactez notre secrétariat pour connaître les itinéraires disponibles.",
  },
];
