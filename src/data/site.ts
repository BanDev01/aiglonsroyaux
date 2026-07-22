export const siteConfig = {
  name: "Complexe Scolaire Les Aiglons Royaux",
  shortName: "Les Aiglons Royaux",
  motto: "Travail • Excellence • Discipline",
  description:
    "Complexe Scolaire Les Aiglons Royaux — un établissement d'excellence à Lubumbashi qui forme, du préscolaire au secondaire technique, les leaders de demain grâce à une pédagogie rigoureuse, l'anglais et l'informatique dès la maternelle.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aiglonsroyaux.com",
  ogImage: "/logo.png",
  enrollmentUrl: process.env.NEXT_PUBLIC_ENROLLMENT_URL ?? "#",
  contact: {
    address: "Golf Maisha, Route Munua, Référence Premier Marché, Lubumbashi",
    city: "Lubumbashi",
    country: "République Démocratique du Congo",
    phone: "+243 813 503 175",
    phoneHref: "tel:+243813503175",
    whatsappHref: "https://wa.me/243813503175",
    email: "contact@aiglonsroyaux.com",
    website: "www.aiglonsroyaux.com",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Golf+Maisha+Route+Munua+Lubumbashi&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Golf+Maisha+Route+Munua+Lubumbashi",
  },
  hours: [
    { day: "Lundi – Vendredi", hours: "07h00 – 16h00" },
    { day: "Samedi", hours: "08h00 – 12h00 (activités & rattrapages)" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  social: {
    facebook: "https://facebook.com/aiglonsroyaux",
    instagram: "https://instagram.com/aiglonsroyaux",
    youtube: "https://youtube.com/@aiglonsroyaux",
    linkedin: "https://linkedin.com/company/aiglonsroyaux",
  },
} as const;

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Sections & Options", href: "/sections" },
  { label: "Admissions", href: "/admissions" },
  { label: "Vie scolaire", href: "/vie-scolaire" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Sections & Options", href: "/sections" },
  { label: "Admissions", href: "/admissions" },
  { label: "Vie scolaire", href: "/vie-scolaire" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];
