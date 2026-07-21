# Complexe Scolaire Les Aiglons Royaux — Site web

Site vitrine premium orienté conversion pour le Complexe Scolaire Les Aiglons Royaux
(Lubumbashi), construit avec Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4,
shadcn/ui et Framer Motion.

> **Note** : l'école ouvre pour la toute première fois à la rentrée 2026–2027. Le contenu
> du site (textes, actualités, feuille de route) reflète volontairement une école en
> lancement — aucune statistique de résultats, ancienneté ou témoignage n'est affichée,
> puisque l'établissement n'a pas encore d'historique. Voir la section
> [Contenu à personnaliser](#contenu-à-personnaliser-avant-mise-en-production) ci-dessous.

## Stack technique

- **Next.js 15** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — palette personnalisée `royal` (bleu) / `gold` (doré)
- **shadcn/ui** (base sur Base UI) — Sheet, Dialog, Select, Accordion, Tabs, Form...
- **Framer Motion** — animations au scroll, compteurs animés, hero dynamique
- **React Hook Form + Zod** — validation des formulaires Admissions & Contact
- **Resend** — envoi des emails des formulaires

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copiez `.env.example` vers `.env.local` et complétez :

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (SEO, sitemap, Open Graph) |
| `NEXT_PUBLIC_ENROLLMENT_URL` | URL du logiciel de gestion scolaire externe (bouton "S'inscrire") |
| `RESEND_API_KEY` | Clé API [Resend](https://resend.com) pour l'envoi d'emails. **Sans cette clé, les formulaires fonctionnent en mode démo** : la soumission réussit côté visiteur mais le contenu est seulement journalisé dans la console serveur, sans email envoyé. |
| `RESEND_FROM_EMAIL` | Adresse d'expédition des emails (doit être un domaine vérifié dans Resend) |

## Contenu à personnaliser avant mise en production

### 1. Photos réelles de l'école

Aucune photo d'archive fiable et fidèle à l'identité "école d'excellence" n'a pu être
sourcée automatiquement (voir note ci-dessous). L'identité visuelle repose donc
actuellement sur des **dégradés bleu/or + icônes** générés par le composant
`src/components/shared/photo-tile.tsx`, utilisés partout où une photo serait attendue
(hero, sections, galerie, actualités...).

Pour brancher une vraie photo à un endroit précis, il suffit de renseigner le champ
`imageUrl` correspondant dans les fichiers de données (`src/data/*.ts`) ou de passer une
prop `imageUrl` au composant `PhotoTile` — le composant bascule alors automatiquement sur
un `next/image` réel. Aucune modification de mise en page n'est nécessaire.

> Pourquoi pas des photos stock par défaut ? Nous n'avions pas accès à une recherche
> d'images fiable (l'API de recherche Unsplash nécessite une clé, et les résultats
> vérifiables via Wikimedia Commons montraient soit des écoles publiques modestes non
> représentatives du positionnement premium de l'établissement, soit des photos hors
> sujet). Utiliser de vraies photos de l'école reste la meilleure option.

### 2. Lien du logiciel de gestion scolaire

Définissez `NEXT_PUBLIC_ENROLLMENT_URL` avec l'URL réelle du logiciel de gestion utilisé
pour les inscriptions — le bouton "S'inscrire" (header + CTA) y renvoie directement.

### 3. Emails (Resend)

1. Créez un compte sur [resend.com](https://resend.com)
2. Vérifiez le domaine `aiglonsroyaux.com` (ou un sous-domaine dédié)
3. Renseignez `RESEND_API_KEY` et `RESEND_FROM_EMAIL`

Les deux formulaires (`/admissions`, `/contact`) envoient un email récapitulatif à
`contact@aiglonsroyaux.com` (voir `src/lib/email.ts`).

### 4. Réseaux sociaux

Les liens Facebook / Instagram / YouTube / LinkedIn dans `src/data/site.ts`
(`siteConfig.social`) sont des placeholders à remplacer par les vrais comptes.

## Architecture

```
src/
  app/            Routes (App Router) — une page par section du site
  components/
    layout/       Header, Footer, Container
    home/         Sections de la page d'accueil
    shared/       Composants réutilisables (SectionHeading, PhotoTile, CtaButton...)
    sections/     Sections scolaires (cartes, détail)
    options/      Options techniques/académiques
    admissions/   Formulaire d'admission
    contact/      Formulaire de contact
    news/         Actualités (liste, carte, détail)
    gallery/      Galerie (grille masonry + lightbox)
    ui/           Composants shadcn/ui
  data/           Contenu du site (données de démonstration, centralisées et typées)
  lib/            Utilitaires (validation Zod, email, SEO, cn)
  types/          Types TypeScript partagés
```

Toutes les données affichées (sections, options, actualités, galerie,
statistiques) sont centralisées dans `src/data/*.ts` avec des types stricts
(`src/types/index.ts`). Cette architecture permet de brancher facilement un futur back-
office ou CMS : il suffira de remplacer ces exports statiques par des appels API/CMS
respectant les mêmes interfaces TypeScript, sans toucher aux composants d'affichage.

## SEO

- Metadata dynamique par page (`src/lib/seo.ts`)
- JSON-LD `EducationalOrganization` dans `src/app/layout.tsx`
- `sitemap.xml` et `robots.txt` générés dynamiquement (`src/app/sitemap.ts`, `robots.ts`)
- Open Graph / Twitter Cards sur toutes les pages

## Déploiement (Vercel)

1. Poussez le dépôt sur GitHub/GitLab
2. Importez le projet dans [Vercel](https://vercel.com/new)
3. Renseignez les variables d'environnement (voir ci-dessus)
4. Déployez — aucune configuration supplémentaire requise
