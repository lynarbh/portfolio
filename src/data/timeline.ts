// Parcours de Lyna : formations, expériences et engagements, du plus récent au plus ancien.
// Source : CV (public/media/cv-lyna-rebahi.pdf). Les coordonnées personnelles restent dans le PDF.

export type TimelineKind = "objectif" | "formation" | "experience" | "engagement";

export type TimelineEntry = {
  id: string;
  kind: TimelineKind;
  period: string;
  title: string;
  org: string;
  place?: string;
  details: readonly string[];
  current?: boolean;
};

export const TIMELINE_KIND_LABEL: Record<TimelineKind, string> = {
  objectif: "Objectif",
  formation: "Formation",
  experience: "Expérience",
  engagement: "Engagement",
};

export const timeline: readonly TimelineEntry[] = [
  {
    id: "alternance-2026",
    kind: "objectif",
    period: "À partir de 2026 · 2 ans",
    title: "Alternance chargée de communication",
    org: "Recherche en cours",
    details: [
      "Communication digitale, réalisation et montage vidéo, identités visuelles",
      "Rythme alternance sur 2 ans, dans le cadre du BUT MMI",
    ],
    current: true,
  },
  {
    id: "but-mmi",
    kind: "formation",
    period: "2025 — aujourd'hui",
    title: "BUT Métiers du multimédia et de l'internet",
    org: "IUT Sénart-Fontainebleau · Université Paris-Est Créteil",
    place: "Sénart",
    details: ["Audiovisuel, design graphique, développement web et communication"],
    current: true,
  },
  {
    id: "sumud",
    kind: "engagement",
    period: "Aujourd'hui",
    title: "Chargée de communication bénévole",
    org: "sumud.asso",
    details: ["Identité visuelle d'une nouvelle association centrée sur le sport et la solidarité"],
    current: true,
  },
  {
    id: "mamans-citoyennes",
    kind: "engagement",
    period: "2025 — aujourd'hui",
    title: "Bénévole, association culturelle",
    org: "Les Mamans Citoyennes",
    place: "Melun",
    details: ["Voyages humanitaires, ateliers bien-être, cercles d'échange"],
    current: true,
  },
  {
    id: "nakamabooth",
    kind: "experience",
    period: "Été 2025",
    title: "Animatrice événementielle digitale",
    org: "Nakamabooth",
    details: [
      "Mariages et anniversaires : installation de photobooths, livre d'or audio et éléments décoratifs",
      "Gestion du matériel et accompagnement des invités pendant les événements",
    ],
  },
  {
    id: "gxo",
    kind: "experience",
    period: "Juin 2025",
    title: "Opératrice logistique polyvalente",
    org: "GXO Logistics Sport France",
    place: "Réau",
    details: [
      "Traitement des marchandises et préparation des commandes clients",
      "Tâches logistiques en entrepôt",
    ],
  },
  {
    id: "pharmacie",
    kind: "experience",
    period: "2024 · 4 mois",
    title: "Apprentie préparatrice en pharmacie",
    org: "Pharmacie Mont-Saint-Martin",
    place: "Nemours",
    details: [
      "Délivrance de médicaments sur ordonnance et conseil en vente libre",
      "Télétransmission à l'Assurance Maladie, gestion des stocks et des péremptions",
      "Désinfection et stérilisation du matériel médical",
    ],
  },
  {
    id: "bac",
    kind: "formation",
    period: "2021 — 2024",
    title: "Baccalauréat général, mention Bien",
    org: "Lycée polyvalent Frédéric Joliot-Curie",
    details: ["Spécialités : mathématiques, SVT, physique-chimie"],
  },
];

export const languages = [
  { name: "Français", level: "natal" },
  { name: "Arabe dialectal", level: "natal" },
  { name: "Anglais", level: "niveau professionnel" },
] as const;

export const CV_PDF = "/media/cv-lyna-rebahi.pdf";
export const CV_PDF_LABEL = "Télécharger le CV (PDF · 420 Ko)";
