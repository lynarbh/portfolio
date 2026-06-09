export type Project = {
  id: string;
  title: string;
  category: "Site Web" | "Design" | "Branding" | "Illustration" | "Vidéo" | "SAE" | "Photo" | "Projet universitaire";
  thumbnail: string;
  media?: string[];
  video?: string;
  url?: string;
  shortDescription: string;
  description: string;
  tools: string[];
  role: string;
  inProgress?: boolean;
};

export const projects: Project[] = [
  // --- SITE WEB ---
  {
    id: "page-web-perso",
    title: "Page web personnelle",
    category: "Site Web",
    thumbnail: "/assets/portfolio-thumbnail-03-web.png",
    media: ["/assets/site.jpg"],
    shortDescription: "Conception et développement d'une page web personnelle.",
    description: "Réalisée dans le cadre du cours d'intégration web, cette page web personnelle a été l'occasion d'aller de la maquette Figma jusqu'à l'intégration en HTML et CSS. L'exercice avait également pour but de découvrir la mise en ligne d'un site : c'est mon tout premier site hébergé, déployé via AlwaysData.",
    url: "https://oukhtyauxjouesroses.alwaysdata.net/TP_WEB/",
    tools: ["Figma", "HTML", "CSS"],
    role: "Designer & développeuse front-end",
  },

  // --- PROTOTYPE SITE WEB ACCESSIBLE ---
  {
    id: "prototype-site-accessible",
    title: "Prototype de site accessible",
    category: "Site Web",
    thumbnail: "/assets/portfolio-thumbnail-03-web.png",
    media: ["/assets/prototype1.png", "/assets/prototype2.png"],
    shortDescription: "Prototype d'un site web accessible pour tous.",
    description:
      "Prototype Figma d'un site pensé pour être accessible au plus grand nombre. Le projet m'a poussée à interroger chaque choix de design — contrastes, typographies, hiérarchie, parcours clavier — afin de respecter les normes WCAG et de proposer une expérience adaptée aux utilisateurs en situation de handicap visuel ou auditif.",
    url: "https://www.figma.com/design/KzDhAAKdS4W1B4qOoqkig0/Prototype?node-id=0-1&t=t2Boeq54eu9Fu4tJ-1",
    tools: ["Figma"],
    role: "Designer & développeuse front-end",
  },

  // --- DESIGN ---
  {
    id: "business-card-mockup",
    title: "Identité personnelle",
    category: "Branding",
    thumbnail: "/assets/portfolio-thumbnail-01-branding.png",
    media: [],
    shortDescription: "Mock-up d'une carte de visite pour une identité personnelle.",
    description: "Création d'un mock-up de carte de visite à partir d'une identité visuelle personnelle. L'exercice m'a permis de travailler sur le choix typographique, la palette de couleurs et la mise en scène du support, en cherchant un rendu qui me ressemble : sobre, doux, mais affirmé.",
    tools: ["Photoshop", "Illustrator"],
    role: "Designer graphique",
  },

  // --- BRANDING ---
  {
    id: "festival-identite",
    title: "Identité d'un festival",
    category: "Branding",
    thumbnail: "/assets/portfolio-thumbnail-01-branding.png",
    media: ["/assets/festival-flyer.jpg", "/assets/festival-goodies.jpg"],
    shortDescription: "Identité visuelle complète d'un festival imaginaire.",
    description: "Conception de l'identité visuelle complète d'un festival imaginé de A à Z : du logo aux déclinaisons sur supports de communication (flyers, affiches, goodies). Un projet qui m'a permis d'explorer la construction d'un univers cohérent — direction artistique, charte graphique, ton de voix — et de raconter une histoire à travers chaque pièce.",
    tools: ["Illustrator", "Photoshop"],
    role: "Direction artistique & design",
    inProgress: true,
  },

  // --- ILLUSTRATION / PHOTO ---
  {
    id: "illustration-photoshop",
    title: "Illustration Photoshop",
    category: "Photo",
    thumbnail: "/assets/portfolio-thumbnail-02-flyers.png",
    media: ["/assets/affiche_sensibilisation_Lyna_Rebahi.png"],
    shortDescription: "Illustration numérique réalisée sur Photoshop.",
    description: "Affiche de sensibilisation réalisée dans le cadre du cours de culture artistique, sur un brief de campagne éco-citoyenne commanditée par l'UPEC pour ses étudiants. J'ai choisi de traiter l'acidification des océans à travers un angle moins évoqué que celui des coraux : ses conséquences sur le plancton, ces micro-organismes invisibles qui forment pourtant la base de la chaîne alimentaire marine. L'affiche montre trois pierres tombales portant chacune le nom d'une espèce de plancton, posées sur un fond océanique sombre. Derrière elles, un corail blanchi sur lequel se concentre toute la lumière de la scène. La phrase « Et si les premières victimes de l'acidification des océans étaient invisibles ? » traverse l'image, à moitié éclairée du côté du corail, à moitié plongée dans l'ombre — une manière de jouer sur ce qu'on voit et ce qu'on choisit de ne pas voir. Le travail a été réalisé sur Photoshop au format A2, 300 dpi.",
    tools: ["Photoshop"],
    role: "Illustratrice",
  },
  {
    id: "portraits-illustration",
    title: "Portraits vectoriels",
    category: "Illustration",
    thumbnail: "/assets/portfolio-thumbnail-02-flyers.png",
    media: ["/assets/Lyna.jpg", "/assets/Joseph.jpg", "/assets/Imad.jpg"],
    shortDescription: "Série de portraits réalisés sur Illustrator.",
    description: "Série de trois portraits vectoriels réalisés sur Illustrator : un autoportrait et deux portraits de camarades de promo. J'ai cherché à garder une vraie cohérence d'ensemble, en travaillant tous les visages dans le même style — notamment au niveau des ombrestion : retranscrire un visage uniquement avec des courbes, des aplats et des nuances, sans trahir l'identité du modèle.",
    tools: ["Illustrator"],
    role: "Illustratrice",
  },

  // --- VIDÉO ---
  {
    id: "stop-motion",
    title: "Stop motion",
    category: "Vidéo",
    thumbnail: "/assets/portfolio-thumbnail-04-video.png",
    video: "https://www.youtube.com/embed/hKmZZ7tPWEY",
    shortDescription: "Courte vidéo en stop motion.",
    description: "Courte vidéo en stop motion pensée comme une mini-séquence façon dessin animé. Je me suis inspirée des génériques Disney Channel, ceux qui présentent un par un les personnages d'une série — ici, deux camarades de promo et moi qui passons à l'écran tour à tour. Une technique qui demande beaucoup : storyboard, prises de vue image par image, montage, calage du rythme... mais qui m'a confirmé mon goût pour la narration visuelle et l'envie de continuer à explorer la vidéo.",
    tools: ["Photoshop", "Premiere Pro"],
    role: "Réalisatrice & monteuse",
  },
  {
    id: "clip",
    title: "Clip — Blue (Yung Kai)",
    category: "Vidéo",
    thumbnail: "/assets/portfolio-thumbnail-04-video.png",
    video: "https://www.youtube.com/embed/Z2ge0r9_vfU",
    shortDescription: "Clip vidéo — Blue, Yung Kai (en cours de réalisation).",
    description: "Clip vidéo sur le morceau Blue de Yung Kai, actuellement fini. Ce projet traduit en images l'ambiance du clip original, avec un montage en lien avec le rythme et les paroles de la musique. J'ai voulu exploré une mise en scène narrative et anecdotique.",
    tools: ["Photoshop", "Premiere Pro"],
    role: "Réalisatrice & monteuse",
  },
  {
    id: "mashup",
    title: "Mashup vidéo — Hier encore",
    category: "Vidéo",
    thumbnail: "/assets/portfolio-thumbnail-04-video.png",
    video: "https://www.youtube.com/embed/Q9N3hK1jLFc",
    shortDescription: "Mashup vidéo sur la chanson « Hier encore » de Charles Aznavour.",
    description: "Ce mashup vidéo recompose un récit intime à partir des rushes fournis par le professeur. Bien que la majorité des extraits proposés se concentrait sur des scènes de danse dynamiques, j'ai cherché à mettre en évidence des moments plus isolés et personnels — des fragments d'intimité et de mélancolie qui s'alignent avec la tonalité nostalgique d'« Hier encore » de Charles Aznavour. Le montage, sans voix off ni commentaire, s'appuie uniquement sur cette bande sonore pour générer une atmosphère émotionnelle. Les plans ont été réarrangés pour créer une nouvelle narration visuelle, où l'absence de mouvement frénétique laisse place à la contemplation et au souvenir. Le résultat final dure 3 minutes 15 et utilise entre 60% et 70% des rushes originaux, soigneusement sélectionnés pour leur capacité à évoquer une forme de solitude douce et d'introspection.",
    tools: ["Premiere Pro"],
    role: "Réalisatrice & monteuse",
  },

  // --- SAE ---
  {
    id: "sae-1",
    title: "SAE — Projet 1",
    category: "Projet universitaire",
    thumbnail: "/assets/SAE1.png",
    media: [],
    shortDescription: "Projet universitaire en groupe — SAE.",
    description: "Projet pluridisciplinaire réalisé en groupe dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation). Une expérience qui m'a poussée à mobiliser un large éventail de compétences — design graphique, vidéo, prototypage, intégration — tout en apprenant à coordonner les rôles, à gérer un planning (Diagramme de GANTT, tableau de bord) et à défendre nos choix créatifs face à un commanditaire.",
    tools: ["Illustrator", "Photoshop", "Figma", "Premiere Pro", "Visual Studio Code"],
    role: "Membre du groupe",
  },
  {
    id: "sae-2",
    title: "SAE — Projet 2",
    category: "Projet universitaire",
    thumbnail: "/assets/SAE2.png",
    media: ["/assets/sae2-1.jpg"],
    shortDescription: "Projet universitaire en groupe — SAE.",
    description: "Deuxième projet de groupe en SAE, davantage centré sur la conception graphique et le prototypage d'interface. Le travail collectif y a pris encore plus de place : itérations partagées sur Figma, allers-retours sur la charte graphique et recherche d'une cohérence visuelle d'un livrable à l'autre.",
    tools: ["Figma", "Illustrator"],
    role: "Membre du groupe",
  },
];
