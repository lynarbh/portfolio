// Dossiers des pages projet (études de cas). Chaque projet sélectionne quelques visuels et les
// explique ; les textes sont ceux déjà présents sur le site (rédigés par Lyna) ou ceux de ses
// chartes. Le rendu est assuré par src/components/CaseStudy.tsx.
import type { MediaId } from "@/data/media.generated";
import type { videos } from "@/data/media.generated";

type VideoId = keyof typeof videos;

export type CsImage = {
  id: MediaId;
  alt: string;
  caption?: string;
  pos?: string; // classe Tailwind object-[x_y] pour le recadrage carré
  contain?: boolean; // visuel entier sur fond blanc (logos)
};

export type CsBlock =
  | { kind: "feature"; image: CsImage; text: string[]; flip?: boolean }
  | { kind: "duo"; images: [CsImage, CsImage]; text: string[] }
  | { kind: "grid"; images: CsImage[]; cols?: 2 | 3 | 4 | 5; text?: string[] }
  | {
      kind: "palette";
      groups: {
        label: string;
        text?: string[];
        colors: { hex: string; name?: string; cmjn?: string; note?: string }[];
      }[];
    }
  | {
      kind: "type";
      specs: {
        sample: string;
        name: string;
        use: string;
        family: "cinzel" | "dm" | "cormorant";
        color?: string;
        text: string[];
      }[];
    }
  | {
      kind: "series";
      items: { image: CsImage; title: string; sub?: string; color?: string; text: string[] }[];
    }
  | {
      kind: "video";
      youtube?: string;
      local?: VideoId;
      label?: string;
      text?: string[];
      vertical?: boolean;
    }
  | { kind: "embed"; src: string; title: string; text?: string[] }
  | { kind: "link"; href: string; label: string; text?: string[] };

type CsChapter = { id: string; title: string; blocks: CsBlock[] };

export type CaseStudyData = {
  kicker: string;
  title: string;
  accent?: string;
  slogan?: string;
  deliverables: string;
  frame: string;
  chapters: CsChapter[];
  next: string; // id du projet suivant
  fonts?: readonly "cinzel"[];
  note?: string;
};

const FESTIVAL: CaseStudyData = {
  kicker: "Identité d'un festival · Branding",
  title: "Tafsut",
  accent: "Festival",
  slogan: "Racines & Renouveau",
  deliverables: "Logotype, charte graphique, affiche, billets, goodies, signalétique",
  frame: "Festival imaginé de A à Z, projet BUT MMI",
  fonts: ["cinzel"],
  next: "sae-2",
  note: "Extrait de la charte graphique (32 planches) : logotype, déclinaisons, couleurs, typographies et mises en situation.",
  chapters: [
    {
      id: "concept",
      title: "Concept",
      blocks: [
        {
          kind: "feature",
          image: {
            id: "festival-identite/planche-01",
            alt: "Logotype du Tafsut Festival dans son cercle, avec le slogan Racines & Renouveau",
          },
          text: [
            "Tafsut, qui signifie « printemps » en kabyle, donne son nom à ce festival culturel dédié à la jeunesse européenne, et plus particulièrement aux nouvelles générations issues des diasporas nord-africaines et berbères.",
            "Ancré dans la culture amazighe, il célèbre le renouveau, la transmission et la diversité à travers musique, artisanat, gastronomie et bien-être.",
            "Espace de rencontre entre traditions et modernité, le Tafsut Festival porte des valeurs d'inclusion, de liberté et de fierté culturelle, incarnées dès son identité visuelle par le symbole amazigh, l'homme libre.",
          ],
        },
      ],
    },
    {
      id: "pictogramme",
      title: "Pictogramme",
      blocks: [
        {
          kind: "feature",
          flip: true,
          image: {
            id: "festival-identite/crop-picto",
            alt: "Pictogramme du Tafsut Festival : symbole amazigh Yaz orné de fleurs et de motifs géométriques",
          },
          text: [
            "Le pictogramme du Tafsut Festival constitue le cœur de l'identité visuelle : une revisitation moderne du symbole amazigh (Yaz), l'emblème de l'homme libre.",
            "Ce symbole traditionnel est entièrement transformé par l'intégration d'éléments floraux délicats qui évoquent directement le printemps (Tafsut).",
            "L'ensemble est enrichi de motifs géométriques ornementaux inspirés des tapis berbères et des mosaïques andalouses, créant une composition symétrique et équilibrée.",
            "La palette chromatique (rouge, bleu, jaune, orange et rose) s'organise en bandes géométriques régulières qui structurent le motif tout en le rendant dynamique et ludique.",
          ],
        },
      ],
    },
    {
      id: "logotype",
      title: "Logotype",
      blocks: [
        {
          kind: "duo",
          images: [
            {
              id: "festival-identite/crop-logo-positif",
              alt: "Logotype complet, version positive",
              caption: "Version positive",
            },
            {
              id: "festival-identite/crop-logo-negatif",
              alt: "Logotype complet, version négative",
              caption: "Version négative",
            },
          ],
          text: [
            "Le logotype complet présente l'élément graphique inscrit dans un cercle aux contours délicats bleu.",
            "Sous ce motif central, le texte TAFSUT s'affiche en Cinzel Decorative rose vif, inspirée de l'alphabet berbère ancien, tandis que FESTIVAL en DM Sans apparaît en typographie épurée et contemporaine bleu.",
            "Le cercle fonctionne comme un cadre qui unifie tous les éléments, créant une harmonie formelle qui évoque un sceau.",
          ],
        },
      ],
    },
    {
      id: "declinaisons",
      title: "Déclinaisons",
      blocks: [
        {
          kind: "grid",
          cols: 5,
          images: [
            {
              id: "festival-identite/crop-pole-ateliers",
              alt: "Variante du logo, pôle Ateliers artisanaux",
              caption: "Ateliers artisanaux",
            },
            {
              id: "festival-identite/crop-pole-cuisine",
              alt: "Variante du logo, pôle Découvertes culinaires",
              caption: "Découvertes culinaires",
            },
            {
              id: "festival-identite/crop-pole-musique",
              alt: "Variante du logo, pôle Musique et danse",
              caption: "Musique et danse",
            },
            {
              id: "festival-identite/crop-pole-education",
              alt: "Variante du logo, pôle Éducation et héritage",
              caption: "Éducation et héritage",
            },
            {
              id: "festival-identite/crop-pole-soins",
              alt: "Variante du logo, pôle Soins et bien-être",
              caption: "Soins et bien-être",
            },
          ],
        },
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "festival-identite/crop-motifs",
              alt: "Éléments graphiques : frises ornementales et pictogramme",
              caption: "Éléments graphiques",
            },
            {
              id: "festival-identite/crop-texture",
              alt: "Texture rose inspirée des tapis berbères",
              caption: "Texture",
            },
          ],
        },
      ],
    },
    {
      id: "couleurs",
      title: "Couleurs",
      blocks: [
        {
          kind: "palette",
          groups: [
            {
              label: "Couleurs principales",
              colors: [
                { hex: "#EC6078", cmjn: "C0 · M75 · J35 · N0" },
                { hex: "#AADADD", cmjn: "C38 · M0 · J16 · N0" },
              ],
              text: [
                "Le rose et le bleu constituent la base de l'identité visuelle du festival. Leur association crée un univers moderne et printanier, pensé pour la jeunesse européenne.",
              ],
            },
            {
              label: "Couleurs secondaires",
              colors: [
                { hex: "#757EBC", cmjn: "C61 · M50 · J0 · N0" },
                { hex: "#7FC290", cmjn: "C55 · M0 · J55 · N0" },
                { hex: "#FDD596", cmjn: "C0 · M19 · J47 · N0" },
                { hex: "#FBF080", cmjn: "C5 · M0 · J61 · N0" },
                { hex: "#E8ABCE", cmjn: "C7 · M43 · J0 · N0" },
              ],
              text: [
                "Les couleurs secondaires s'inspirent du drapeau amazigh. Elles sont déclinées dans des nuances pastel afin de conserver ce lien culturel, tout en étant adaptées à l'univers du festival.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "typographies",
      title: "Typographies",
      blocks: [
        {
          kind: "type",
          specs: [
            {
              sample: "Tafsut",
              name: "Cinzel Decorative · Bold",
              use: "H1 — Titre · H2 — Section",
              family: "cinzel",
              color: "#EC6078",
              text: [
                "Cinzel Decorative est utilisée pour les éléments de titre et notamment pour « Tafsut » dans le logo. Son esthétique géométrique et ornementale, inspirée de formes anciennes proches de l'alphabet berbère, apporte une dimension identitaire forte. Elle est utilisée en graisse bold pour renforcer sa présence.",
              ],
            },
            {
              sample: "Festival",
              name: "DM Sans · Regular à Black",
              use: "Bold — Accent · Regular — Corps · Light — Caption",
              family: "dm",
              color: "#757EBC",
              text: [
                "DM Sans vient compléter cet univers par une approche plus moderne et lisible. Elle apporte du contraste avec les éléments plus traditionnels et inscrit le festival dans une dimension contemporaine, en lien avec un public jeune et multiculturel. Elle est utilisée pour le mot « FESTIVAL » dans le logo et pour les textes courants.",
              ],
            },
            {
              sample: "Racines & Renouveau",
              name: "Cormorant Garamond · Light, Italic",
              use: "Citations & sous-titres",
              family: "cormorant",
              text: [
                "Cormorant Garamond apporte une dimension plus expressive et élégante, avec une sensibilité presque florale. Elle est utilisée pour les slogans, citations et textes poétiques, notamment « Racines & Renouveau », et vient adoucir l'ensemble pour renforcer l'univers poétique et printanier du festival.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "supports",
      title: "Supports",
      blocks: [
        {
          kind: "grid",
          cols: 3,
          images: [
            {
              id: "festival-identite/planche-24",
              alt: "Affiche Danse Amazigh posée sur des marches",
              caption: "Affiche « Danse Amazigh »",
              pos: "object-[60%_50%]",
            },
            { id: "festival-identite/planche-25", alt: "Billets du festival", caption: "Billets" },
            {
              id: "festival-identite/planche-32",
              alt: "Enseigne ronde du festival",
              caption: "Enseigne",
            },
            {
              id: "festival-identite/planche-27",
              alt: "Gobelets aux couleurs du festival",
              caption: "Gobelets",
            },
            {
              id: "festival-identite/planche-28",
              alt: "Tote bag du festival",
              caption: "Tote bag",
            },
            {
              id: "festival-identite/planche-31",
              alt: "Food truck habillé aux motifs du festival",
              caption: "Food truck",
              pos: "object-[40%_50%]",
            },
          ],
        },
      ],
    },
  ],
};

const CARTE: CaseStudyData = {
  kicker: "Identité personnelle · Branding",
  title: "Identité",
  accent: "personnelle",
  slogan: "L & R, en rose ou en chocolat",
  deliverables: "Logo et déclinaisons, carte de visite recto/verso, palette, mock-ups",
  frame: "Identité visuelle personnelle, projet BUT MMI",
  next: "festival-identite",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: {
            id: "business-card-mockup/mockupcarterose",
            alt: "Mock-up de la carte de visite, variante rose",
          },
          text: [
            "Création d'un mock-up de carte de visite à partir d'une identité visuelle personnelle. L'exercice m'a permis de travailler sur le choix typographique, la palette de couleurs et la mise en scène du support, en cherchant un rendu qui me ressemble : sobre, doux, mais affirmé.",
          ],
        },
      ],
    },
    {
      id: "mockups",
      title: "Mock-ups",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "business-card-mockup/mockupcarterose",
              alt: "Mock-up carte de visite, variante rose",
              caption: "Variante rose",
            },
            {
              id: "business-card-mockup/mockupcartechocolat",
              alt: "Mock-up carte de visite, variante chocolat",
              caption: "Variante chocolat",
            },
          ],
          text: [
            "Deux mises en scène d'une même carte de visite, déclinées dans deux ambiances colorimétriques. L'idée était de montrer qu'une identité peut conserver toute sa cohérence tout en s'adaptant à des atmosphères très différentes.",
          ],
        },
      ],
    },
    {
      id: "design",
      title: "Design des cartes",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "business-card-mockup/designcarterose",
              alt: "Recto et verso de la carte, variante rose",
              caption: "Recto / verso · rose",
            },
            {
              id: "business-card-mockup/designcartechocolat",
              alt: "Recto et verso de la carte, variante chocolat",
              caption: "Recto / verso · chocolat",
            },
          ],
          text: [
            "Le recto et le verso de la carte, pensés avec une typographie épurée et une hiérarchie soignée, déclinés dans les deux gammes de couleurs.",
          ],
        },
      ],
    },
    {
      id: "logo",
      title: "Logo & déclinaisons",
      blocks: [
        {
          kind: "feature",
          flip: true,
          image: {
            id: "business-card-mockup/logoen8variantes",
            alt: "Logo personnel L et R, déclinaisons de couleurs",
            contain: true,
          },
          text: [
            "Un logo construit autour de mes initiales L et R, décliné en trois variantes roses et trois variantes chocolat. J'ai voulu proposer deux gammes chromatiques capables de s'adapter à n'importe quelle atmosphère — l'une douce et romantique, l'autre plus chaleureuse et terreuse.",
          ],
        },
      ],
    },
    {
      id: "palette",
      title: "Palette",
      blocks: [
        {
          kind: "palette",
          groups: [
            {
              label: "Cinq couleurs, deux gammes",
              colors: [
                {
                  hex: "#FDFBFC",
                  name: "Blanc nacré",
                  note: "La base lumineuse de la variante framboise : un blanc à peine teinté de rose, qui apporte de la respiration et met les autres couleurs en valeur sans jamais les écraser.",
                },
                {
                  hex: "#F5CAE1",
                  name: "Rose poudré",
                  note: "Fait partie de la variante framboise. Un rose très clair, doux et enveloppant. Il adoucit l'ensemble et donne immédiatement le ton — féminin, délicat, romantique.",
                },
                {
                  hex: "#EFC6C5",
                  name: "Rose nude",
                  note: "Composant principal de mon identité visuelle. Un rose plus chaud, à la frontière du beige rosé. Associé au chocolat doux, il crée une ambiance chaleureuse et sophistiquée.",
                },
                {
                  hex: "#D4348A",
                  name: "Fuchsia affirmé",
                  note: "Couleur d'accent présente dans la variante framboise. Plus saturée et plus vive, elle apporte du caractère et de la modernité — c'est elle qui empêche la palette de basculer dans le trop sage.",
                },
                {
                  hex: "#A78886",
                  name: "Chocolat doux",
                  note: "Composant principal de mon identité visuelle. Un brun chaud, légèrement rosé, qui sert d'ancrage à la palette. Associé au rose nude, il crée mon identité de base — une ambiance terreuse et chaleureuse.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const PROTOTYPE: CaseStudyData = {
  kicker: "Site web · UX / UI",
  title: "Prototype",
  accent: "accessible",
  slogan: "Un site pensé pour tous",
  deliverables: "Maquettes et prototype interactif Figma",
  frame: "Projet BUT MMI, normes WCAG",
  next: "business-card-mockup",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: {
            id: "prototype-site-accessible/prototype1",
            alt: "Écran Biographie du prototype",
            pos: "object-[50%_0%]",
          },
          text: [
            "Prototype Figma d'un site pensé pour être accessible au plus grand nombre. Le projet m'a poussée à interroger chaque choix de design — contrastes, typographies, hiérarchie, parcours clavier — afin de respecter les normes WCAG et de proposer une expérience adaptée aux utilisateurs en situation de handicap visuel ou auditif.",
          ],
        },
      ],
    },
    {
      id: "ecrans",
      title: "Écrans",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "prototype-site-accessible/prototype1",
              alt: "Écran Biographie",
              caption: "Accueil & biographie",
              pos: "object-[50%_0%]",
            },
            {
              id: "prototype-site-accessible/prototype2",
              alt: "Écran Boutique",
              caption: "Qui sommes-nous & boutique",
              pos: "object-[50%_0%]",
            },
          ],
        },
      ],
    },
    {
      id: "prototype",
      title: "Prototype",
      blocks: [
        {
          kind: "link",
          href: "https://www.figma.com/design/KzDhAAKdS4W1B4qOoqkig0/Prototype?node-id=0-1&t=t2Boeq54eu9Fu4tJ-1",
          label: "Ouvrir le prototype Figma ↗",
          text: ["Le prototype interactif est consultable sur Figma."],
        },
      ],
    },
  ],
};

const AFFICHE: CaseStudyData = {
  kicker: "Illustration · Photoshop",
  title: "Affiche de",
  accent: "sensibilisation",
  slogan: "Et si les premières victimes étaient invisibles ?",
  deliverables: "Affiche A2, 300 dpi",
  frame: "Cours de culture artistique, brief UPEC",
  next: "portraits-illustration",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: {
            id: "illustration-photoshop/affiche-sensibilisation-lyna-rebahi",
            alt: "Affiche de sensibilisation à l'acidification des océans",
            pos: "object-[50%_30%]",
          },
          text: [
            "Affiche de sensibilisation réalisée dans le cadre du cours de culture artistique, sur un brief de campagne éco-citoyenne commanditée par l'UPEC pour ses étudiants.",
            "J'ai choisi de traiter l'acidification des océans à travers un angle moins évoqué que celui des coraux : ses conséquences sur le plancton, ces micro-organismes invisibles qui forment pourtant la base de la chaîne alimentaire marine.",
          ],
        },
      ],
    },
    {
      id: "image",
      title: "L'image",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "illustration-photoshop/affiche-sensibilisation-lyna-rebahi",
              alt: "Détail : la phrase à moitié éclairée",
              caption: "La phrase, entre lumière et ombre",
              pos: "object-[50%_8%]",
            },
            {
              id: "illustration-photoshop/affiche-sensibilisation-lyna-rebahi",
              alt: "Détail : les pierres tombales et le corail blanchi",
              caption: "Les pierres tombales et le corail",
              pos: "object-[50%_80%]",
            },
          ],
          text: [
            "L'affiche montre trois pierres tombales portant chacune le nom d'une espèce de plancton, posées sur un fond océanique sombre. Derrière elles, un corail blanchi sur lequel se concentre toute la lumière de la scène.",
            "La phrase « Et si les premières victimes de l'acidification des océans étaient invisibles ? » traverse l'image, à moitié éclairée du côté du corail, à moitié plongée dans l'ombre — une manière de jouer sur ce qu'on voit et ce qu'on choisit de ne pas voir. Le travail a été réalisé sur Photoshop au format A2, 300 dpi.",
          ],
        },
      ],
    },
  ],
};

const PORTRAITS: CaseStudyData = {
  kicker: "Illustration · Illustrator",
  title: "Portraits",
  accent: "vectoriels",
  slogan: "Trois visages, un même trait",
  deliverables: "Série de trois portraits vectoriels",
  frame: "Projet BUT MMI",
  next: "stop-motion",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: { id: "portraits-illustration/lyna", alt: "Autoportrait vectoriel" },
          text: [
            "Série de trois portraits vectoriels réalisés sur Illustrator : un autoportrait et deux portraits de camarades de promo. J'ai cherché à garder une vraie cohérence d'ensemble, en travaillant tous les visages dans le même style — notamment au niveau des ombrestion : retranscrire un visage uniquement avec des courbes, des aplats et des nuances, sans trahir l'identité du modèle.",
          ],
        },
      ],
    },
    {
      id: "serie",
      title: "La série",
      blocks: [
        {
          kind: "grid",
          cols: 3,
          images: [
            { id: "portraits-illustration/lyna", alt: "Autoportrait", caption: "Autoportrait" },
            { id: "portraits-illustration/joseph", alt: "Portrait de Joseph", caption: "Joseph" },
            { id: "portraits-illustration/imad", alt: "Portrait d'Imad", caption: "Imad" },
          ],
        },
      ],
    },
  ],
};

const STOP: CaseStudyData = {
  kicker: "Vidéo · Animation image par image",
  title: "Stop",
  accent: "motion",
  slogan: "Un générique façon dessin animé",
  deliverables: "Court métrage en stop motion",
  frame: "Projet BUT MMI",
  next: "clip",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: { id: "stop-motion/image-youtube", alt: "Image du stop motion" },
          text: [
            "Courte vidéo en stop motion pensée comme une mini-séquence façon dessin animé. Je me suis inspirée des génériques Disney Channel, ceux qui présentent un par un les personnages d'une série — ici, deux camarades de promo et moi qui passons à l'écran tour à tour.",
            "Une technique qui demande beaucoup : storyboard, prises de vue image par image, montage, calage du rythme... mais qui m'a confirmé mon goût pour la narration visuelle et l'envie de continuer à explorer la vidéo.",
          ],
        },
      ],
    },
    {
      id: "video",
      title: "La vidéo",
      blocks: [
        {
          kind: "video",
          youtube: "https://www.youtube.com/embed/hKmZZ7tPWEY",
          label: "Stop motion",
        },
      ],
    },
  ],
};

const CLIP: CaseStudyData = {
  kicker: "Vidéo · Réalisation & montage",
  title: "Clip",
  accent: "Blue",
  slogan: "La mémoire comme reconstruction émotionnelle",
  deliverables: "Dossier de production et clip",
  frame: "Projet BUT MMI",
  next: "sae-1",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: { id: "clip/image-youtube", alt: "Image du clip Blue" },
          text: [
            "Clip vidéo sur le morceau Blue de Yung Kai, actuellement fini. Ce projet traduit en images l'ambiance du clip original, avec un montage en lien avec le rythme et les paroles de la musique. J'ai voulu exploré une mise en scène narrative et anecdotique.",
            "Blue est un dossier de production audiovisuelle réalisé dans le cadre du BUT MMI. Il s'articule autour de la chanson Blue de Yung Kai, titre indie-pop sorti en août 2024, extrait de son premier album Stay with the Ocean, I'll Find You. La chanson dure 3 minutes 41 et se construit autour d'une structure classique : introduction, deux couplets, deux refrains, une transition instrumentale et un outro.",
          ],
        },
      ],
    },
    {
      id: "clip",
      title: "Le clip",
      blocks: [
        {
          kind: "video",
          youtube: "https://www.youtube.com/embed/Z2ge0r9_vfU",
          label: "Blue — Yung Kai",
        },
      ],
    },
    {
      id: "analyse",
      title: "Analyse du clip original",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "clip/clip2",
              alt: "Analyse musicale, première partie",
              caption: "Lecture séquence par séquence",
            },
            {
              id: "clip/clip3",
              alt: "Analyse musicale, deuxième partie",
              caption: "Couplets et refrain",
            },
          ],
          text: [
            "Le travail s'ouvre sur une étude musicale approfondie du clip officiel de Blue, séquence par séquence. L'introduction installe une ambiance de rêve éveillé grâce à des plans de nature surexposés (arbres, soleil, lac). Le premier couplet met en scène une femme observée à distance, idéalisée dès les premières paroles. Le refrain bascule vers l'imaginaire : les deux personnages courent, rient, se photographient au Polaroid — mais tout ce qu'on voit est une projection intérieure du narrateur, pas nécessairement la réalité. Le deuxième couplet rompt cette harmonie : l'homme est désormais seul, habillé différemment, et la femme semble ne plus le voir.",
          ],
        },
      ],
    },
    {
      id: "plan-final",
      title: "Le plan final",
      blocks: [
        {
          kind: "feature",
          flip: true,
          image: { id: "clip/clip6", alt: "Analyse du plan final", pos: "object-[50%_30%]" },
          text: [
            "La fin du clip est particulièrement travaillée dans l'analyse. À partir de 3h15, la caméra zoome lentement sur le visage de l'homme avant de dézoomer à mesure que la mélodie ralentit. Il est seul. La musique s'efface, remplacée par le bruit des vagues.",
            "L'analyse pose trois hypothèses ouvertes : la femme n'a peut-être jamais existé que dans l'imaginaire du narrateur, ou la relation appartient au passé, ou encore c'est un souvenir qui s'efface au moment même où on le revit. C'est cette ambiguïté qui constitue le point de départ de la note d'intention.",
          ],
        },
      ],
    },
    {
      id: "intention",
      title: "Note d'intention",
      blocks: [
        {
          kind: "feature",
          image: { id: "clip/clip7", alt: "Note d'intention", pos: "object-[50%_20%]" },
          text: [
            "Pour la création du clip personnel, une transposition a été choisie : plutôt que de représenter une histoire romantique, l'idée centrale devient « la mémoire comme reconstruction émotionnelle du passé ». Le clip raconte les souvenirs d'une femme âgée qui se remémore sa jeunesse et ses amitiés à travers une photographie.",
            "Ce qui se voit dans le clip n'est pas la réalité objective mais une réalité idéalisée — les moments entre amies deviennent plus beaux, plus doux, presque irréels, à l'image de la chanson elle-même. Le présent est traité de manière neutre et figée, tandis que le passé est lumineux, coloré, vivant.",
          ],
        },
      ],
    },
    {
      id: "dispositifs",
      title: "Dispositifs & mise en scène",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            { id: "clip/clip9", alt: "Storyboard, première planche", caption: "Storyboard" },
            { id: "clip/clip10", alt: "Storyboard, deuxième planche", caption: "Split screen" },
          ],
          text: [
            "Plusieurs effets techniques structurent la narration visuelle. Le passage entre présent et passé est déclenché par une photographie qui prend vie — l'image figée se transforme en vidéo, symbole que les souvenirs continuent de vivre. Un effet de rembobinage (rewind) ponctue le montage pour matérialiser l'idée de replonger dans ses souvenirs. L'écran se divise en split screen à quatre colonnes, chaque personnage associé à une couleur dominante propre. Les quatre femmes se retrouvent finalement dans les rues de Paris où leurs chemins convergent vers un même carrefour, symbolisant leur réunion.",
          ],
        },
      ],
    },
    {
      id: "esthetique",
      title: "Esthétique & références",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "clip/clip11",
              alt: "Références visuelles : caméra DV et rewind",
              caption: "Caméra DV, rewind",
            },
            { id: "clip/clip12", alt: "Moodboard du clip", caption: "Moodboard" },
          ],
          text: [
            "L'esthétique du clip s'inspire d'une ambiance caméra DV années 2000 : luminosité très saturée, légèrement floue, grain numérique vintage. Des plans de nature récurrents (fleurs, feuillage, lumière dorée) servent d'écrin aux souvenirs. La référence formelle principale est Mean Girls pour l'effet split screen et la romantisation de l'amitié féminine. Le moodboard construit autour du projet illustre ce contraste entre le présent sobre et le passé chargé d'émotions — photos éparpillées, selfies miroir au digicam, sorties entre amies, lumière solaire chaude.",
          ],
        },
      ],
    },
  ],
};

const SAE1: CaseStudyData = {
  kicker: "Projet universitaire · SAE 1",
  title: "Food",
  accent: "Fighters",
  slogan: "Lutter contre le gaspillage alimentaire",
  deliverables: "Logotype, flyers, maquette du site",
  frame: "Projet de groupe, BUT MMI",
  next: "sae-2",
  chapters: [
    {
      id: "projet",
      title: "Le projet",
      blocks: [
        {
          kind: "feature",
          image: { id: "sae-1/logoprincipal", alt: "Logo principal Food Fighters", contain: true },
          text: [
            "Projet pluridisciplinaire réalisé en groupe dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation). Une expérience qui m'a poussée à mobiliser un large éventail de compétences — design graphique, vidéo, prototypage, intégration — tout en apprenant à coordonner les rôles, à gérer un planning (Diagramme de GANTT, tableau de bord) et à défendre nos choix créatifs face à un commanditaire.",
          ],
        },
      ],
    },
    {
      id: "pub",
      title: "Extrait publicitaire",
      blocks: [
        {
          kind: "video",
          local: "pub-foodfighters",
          label: "Food Fighters — extrait publicitaire",
          text: ["Extrait de la vidéo publicitaire réalisée pour l'association."],
        },
      ],
    },
    {
      id: "logos",
      title: "Logotypes",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "sae-1/logoprincipal",
              alt: "Logo principal",
              caption: "Logo principal",
              contain: true,
            },
            {
              id: "sae-1/logosecondaire",
              alt: "Logo secondaire",
              caption: "Logo secondaire",
              contain: true,
            },
          ],
          text: [
            "Les deux variantes du logo créées pour le projet SAE 1 montrent l'identité principale et son déclinaison secondaire, pour une utilisation flexible sur les supports imprimés et numériques.",
          ],
        },
      ],
    },
    {
      id: "flyers",
      title: "Flyers",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            {
              id: "sae-1/flyer1",
              alt: "Flyer Appel à bénévoles",
              caption: "Appel à bénévoles",
              pos: "object-[50%_0%]",
            },
            {
              id: "sae-1/flyer2",
              alt: "Flyer Grande maraude",
              caption: "Grande maraude",
              pos: "object-[50%_0%]",
            },
          ],
          text: [
            "Ces deux flyers présentent la communication visuelle du projet avec une hiérarchie claire et une identité colorielle cohérente pour attirer l'attention du public.",
          ],
        },
      ],
    },
    {
      id: "maquettes",
      title: "Maquettes",
      blocks: [
        {
          kind: "grid",
          cols: 3,
          images: [
            {
              id: "sae-1/maquette1",
              alt: "Maquette, page d'accueil",
              caption: "Accueil",
              pos: "object-[50%_0%]",
            },
            {
              id: "sae-1/maquette3",
              alt: "Maquette, actions",
              caption: "Actions",
              pos: "object-[50%_0%]",
            },
            {
              id: "sae-1/maquette4",
              alt: "Maquette, faire un don",
              caption: "Faire un don",
              pos: "object-[50%_0%]",
            },
          ],
          text: [
            "Maquette du site réalisée pour l'expérience utilisateur, avec une mise en page claire et une navigation adaptée à la cible du projet.",
          ],
        },
        { kind: "link", href: "https://foodfighters.fr", label: "Voir le site en ligne ↗" },
      ],
    },
  ],
};

const SAE2: CaseStudyData = {
  kicker: "Projet universitaire · SAE 2 · Branding",
  title: "Skøll",
  accent: "Rub",
  slogan: "Bière artisanale · Mythologie nordique",
  deliverables: "Logo, charte, étiquettes, communication Instagram, animation, vidéo, site web",
  frame: "Projet de groupe, BUT MMI",
  next: "prototype-site-accessible",
  chapters: [
    {
      id: "projet",
      title: "La bière & l'histoire",
      blocks: [
        {
          kind: "feature",
          image: {
            id: "sae-2/skollrub-logo-final",
            alt: "Logo SkøllRub : les deux loups et la lune",
            contain: true,
          },
          text: [
            "SkøllRub est une blonde de style ALE (fermentation haute, d'inspiration anglaise), conçue pour être équilibrée et accessible. Elle repose sur un malt Pilsner peu torréfié, qui lui donne une robe blonde claire avec de légers reflets rosés. Le profil aromatique est construit autour du houblon Citra et de framboises et cranberries séchées pour renforcer les arômes de fruits rouges.",
            "SkøllRub, c'est bien plus qu'une bière. C'est une histoire inspirée de la mythologie nordique. Les deux loups magiques Sköll et Hati courent éternellement après le soleil et la lune. Avec SkøllRub, ils poursuivent nos fruits : la cranberry et la framboise. Nous avons créé plusieurs variantes de la bière, chacune basée sur une légende différente, cultivant une identité de « bon vivant » et profondément proche de sa communauté, que nous appelons « la meute ».",
            "Le logo SkøllRub représente les deux loups magiques de la mythologie nordique, avec la lune dont la couleur change selon chaque variante.",
          ],
        },
      ],
    },
    {
      id: "charte",
      title: "Charte graphique",
      blocks: [
        {
          kind: "feature",
          flip: true,
          image: {
            id: "sae-2/chartegraphique-skollrub",
            alt: "Charte graphique SkøllRub",
            pos: "object-[70%_50%]",
          },
          text: [
            "La charte graphique définit les principes visuels de la marque : typographies, palettes de couleurs, utilisation du logo et des éléments graphiques pour garantir une cohérence à travers tous les supports.",
          ],
        },
      ],
    },
    {
      id: "variantes",
      title: "Les quatre variantes",
      blocks: [
        {
          kind: "series",
          items: [
            {
              image: {
                id: "sae-2/etiquettes-skollrub-original-1",
                alt: "Étiquette SkøllRub Original",
              },
              title: "Original",
              sub: "Cranberry & framboise",
              color: "#D4348A",
              text: [
                "C'est la légende mère. Sköll et Hati poursuivent la cranberry rougeâtre et la framboise. La couleur de la lune est rose/magenta, reflétant l'équilibre entre les fruits rouges et la magie du mythe originel.",
              ],
            },
            {
              image: { id: "sae-2/etiquettes-skollrub-angerboda-1", alt: "Étiquette Angerboda" },
              title: "Angerboda",
              sub: "Mûre & myrtille",
              color: "#6B4C8A",
              text: [
                "La géante des glaces : une bière plus sombre et intense. Les notes de mûre et myrtille apportent une amertume prononcée. La lune prend une teinte violette-noire, rappelant les nuits d'hiver nordiques.",
              ],
            },
            {
              image: { id: "sae-2/etiquettes-skollrub-cerisicide-1", alt: "Étiquette Cerisicide" },
              title: "Cerisicide",
              sub: "Cerise & figue",
              color: "#A52A2A",
              text: [
                "Le dieu de la guerre : la plus intense de la gamme. Les cerises apportent une acidité mordante, les figues une richesse sombre. La lune prend une teinte rougeâtre-sang.",
              ],
            },
            {
              image: { id: "sae-2/etiquettes-skollrub-freya-1", alt: "Étiquette Freya" },
              title: "Freya",
              sub: "Raisin & kumquat · 0 % alcool",
              color: "#DAA520",
              text: [
                "La déesse de l'amour : accessible et inclusive. Le raisin apporte des notes classiques, le kumquat une originalité légère. La lune est dorée et lumineuse.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "instagram",
      title: "Communication Instagram",
      blocks: [
        {
          kind: "grid",
          cols: 4,
          images: [
            { id: "sae-2/original1", alt: "Post Instagram Original", caption: "Original" },
            { id: "sae-2/angerboda1", alt: "Post Instagram Angerboda", caption: "Angerboda" },
            { id: "sae-2/cerisicide1", alt: "Post Instagram Cerisicide", caption: "Cerisicide" },
            { id: "sae-2/freya1", alt: "Post Instagram Freya", caption: "Freya" },
          ],
          text: [
            "Chaque variante dispose d'une stratégie de communication visuelle sur Instagram avec deux versions pour chaque bière.",
          ],
        },
      ],
    },
    {
      id: "moodboard",
      title: "Moodboard",
      blocks: [
        {
          kind: "grid",
          cols: 2,
          images: [
            { id: "sae-2/moodboard-lyna", alt: "Moodboard SkøllRub", caption: "Moodboard" },
            {
              id: "sae-2/original2",
              alt: "Post Instagram Original, seconde version",
              caption: "L'Original, en légende",
            },
          ],
        },
      ],
    },
    {
      id: "animation",
      title: "Animation interactive",
      blocks: [
        {
          kind: "embed",
          src: "/animate/1_MOHAMED.html",
          title: "SkøllRub — animation interactive",
          text: [
            "Animation réalisée sur Adobe Animate : cliquez dans la scène pour avancer de personnage en personnage.",
          ],
        },
      ],
    },
    {
      id: "video",
      title: "Vidéo publicitaire",
      blocks: [
        {
          kind: "video",
          youtube: "https://www.youtube.com/embed/4fZkbMxrIRg",
          label: "SkøllRub — vidéo publicitaire",
          vertical: true,
        },
      ],
    },
    {
      id: "site",
      title: "Le site web",
      blocks: [
        {
          kind: "grid",
          cols: 4,
          images: [
            {
              id: "sae-2/site1",
              alt: "Site web, accueil",
              caption: "Accueil",
              pos: "object-[0%_50%]",
            },
            {
              id: "sae-2/site2",
              alt: "Site web, nos bières",
              caption: "Nos bières",
              pos: "object-[0%_50%]",
            },
            { id: "sae-2/site3", alt: "Site web, l'équipe", caption: "L'équipe" },
            { id: "sae-2/site4", alt: "Site web, panier", caption: "Panier" },
          ],
          text: [
            "Découvrez la présence en ligne de SkøllRub, où l'univers mythologique se déploie à travers une interface immersive et captivante.",
          ],
        },
        { kind: "link", href: "https://skollrub.but1.mmi-iutsf.org/", label: "Visiter le site ↗" },
      ],
    },
  ],
};

export const caseStudies: Record<string, CaseStudyData> = {
  "festival-identite": FESTIVAL,
  "business-card-mockup": CARTE,
  "prototype-site-accessible": PROTOTYPE,
  "illustration-photoshop": AFFICHE,
  "portraits-illustration": PORTRAITS,
  "stop-motion": STOP,
  clip: CLIP,
  "sae-1": SAE1,
  "sae-2": SAE2,
};
