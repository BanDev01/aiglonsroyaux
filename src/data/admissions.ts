export const admissionDocuments = [
  "Fiche d'inscription remplie et signée",
  "Copie de l'acte de naissance et deux photos passeport",
  "Dernier bulletin et fiche de mouvement en cas de transfert",
  "Présentation de l'élève pour orientation, si nécessaire",
  "Dossier complet et informations exactes",
  "Validation du dossier et paiement à la confirmation",
];

export const feeSchedule = [
  { level: "Maternelle", tuition: "90 $ / mois", extra: "Cantine : 10 $ / mois", total: "100 $ / mois" },
  { level: "Primaire", tuition: "90 $ / mois", extra: "—", total: "90 $ / mois" },
  { level: "Secondaire de base", tuition: "90 $ / mois", extra: "—", total: "90 $ / mois" },
  { level: "Humanités générales", tuition: "90 $ / mois", extra: "—", total: "90 $ / mois" },
  { level: "Humanités techniques", tuition: "90 $ / mois", extra: "—", total: "90 $ / mois" },
  {
    level: "Entretien ateliers & laboratoires (Humanités techniques)",
    tuition: "—",
    extra: "150 $ / an",
    total: "150 $ / an",
  },
  { level: "Fournitures sanitaires (tous niveaux)", tuition: "—", extra: "60 $ / an", total: "60 $ / an" },
];

export const monthlyDueDates = [
  { month: "Sept. 2026", date: "05/09/2026" },
  { month: "Oct. 2026", date: "05/10/2026" },
  { month: "Nov. 2026", date: "05/11/2026" },
  { month: "Déc. 2026", date: "05/12/2026" },
  { month: "Janv. 2027", date: "05/01/2027" },
  { month: "Fév. 2027", date: "05/02/2027" },
  { month: "Mars 2027", date: "05/03/2027" },
  { month: "Avr. 2027", date: "05/04/2027" },
  { month: "Mai 2027", date: "05/05/2027" },
  { month: "Juin 2027", date: "05/06/2027" },
];

export const dressCode = {
  boys: [
    "Chemise blanche (manches courtes au primaire, longues au secondaire), pantalon bleu, chaussures noires",
    "Cheveux courts (ras) et propres, sans fantaisie",
    "Ceinture noire et cravate selon le modèle",
  ],
  girls: [
    "Chemise blanche (manches courtes au primaire, longues au secondaire), jupe bleue plissée, chaussures noires",
    "Coiffure simple, propre et sans fantaisie",
    "Maquillage et bijoux voyants interdits",
  ],
  all: [
    "Uniforme complet, propre et repassé",
    "Hygiène corporelle irréprochable",
    "Téléphones interdits sans autorisation",
  ],
};

export const admissionNotes = [
  "L'inscription est gratuite.",
  "Le mois de septembre se paye à l'inscription.",
  "Les frais de pratiques (ateliers et laboratoires) sont payables en deux tranches (1er et 2e semestre).",
  "Les frais de fournitures sanitaires (60 $) sont payables en deux tranches : 30 $ à l'inscription et 30 $ en janvier.",
  "Tout parent inscrivant trois enfants bénéficie de la gratuité des frais scolaires pour un quatrième enfant, au niveau dont le tarif est le moins élevé.",
  "Les uniformes, fournitures, transport, frais de l'État, examens officiels et autres charges parascolaires ne sont pas inclus.",
];

export const admissionConditionsPdfUrl = "/documents/Conditions_Admission_CSAR_2026-2027.pdf";
