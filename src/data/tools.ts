// Registre des outils affichés dans « Qui suis-je » (13 outils, liste de Lyna + Lightroom, Animate, VS Code).
// Les icônes officielles Adobe, Canva, CapCut et VS Code ne sont pas librement redistribuables : elles sont
// rendues en monogrammes aux couleurs de la marque. Pour utiliser un fichier fourni par Lyna, déposer
// `public/media/logos/<id>.png` (ou .svg) et remplacer l'entrée `icon` par `{ kind: "file", src: "/media/logos/<id>.png" }`.
import { simpleIcons, type SimpleIconSlug } from "@/data/tool-icons";

export type ToolGroup = "video" | "design" | "web";

type ToolIcon =
  | { kind: "si"; slug: SimpleIconSlug }
  | { kind: "cluster"; slugs: readonly SimpleIconSlug[] }
  | { kind: "mono"; text: string; bg: string; fg: string; serif?: boolean }
  | { kind: "file"; src: string };

export type Tool = {
  id: string;
  name: string;
  group: ToolGroup;
  color: string; // couleur dominante, utilisée pour le halo au survol
  icon: ToolIcon;
};

export const TOOL_GROUPS: readonly { id: ToolGroup; label: string }[] = [
  { id: "video", label: "Vidéo" },
  { id: "design", label: "Design" },
  { id: "web", label: "Web" },
];

const adobe = (text: string, bg: string, fg: string): ToolIcon => ({ kind: "mono", text, bg, fg });

export const tools: readonly Tool[] = [
  // --- VIDÉO ---
  {
    id: "premiere-pro",
    name: "Premiere Pro",
    group: "video",
    color: "#9999FF",
    icon: adobe("Pr", "#00005B", "#9999FF"),
  },
  {
    id: "after-effects",
    name: "After Effects",
    group: "video",
    color: "#9999FF",
    icon: adobe("Ae", "#00005B", "#9999FF"),
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    group: "video",
    color: simpleIcons.davinciresolve.color,
    icon: { kind: "si", slug: "davinciresolve" },
  },
  {
    id: "capcut",
    name: "CapCut",
    group: "video",
    color: "#111111",
    icon: { kind: "mono", text: "Cc", bg: "#111111", fg: "#FFFFFF" },
  },
  // --- DESIGN ---
  {
    id: "photoshop",
    name: "Photoshop",
    group: "design",
    color: "#31A8FF",
    icon: adobe("Ps", "#001E36", "#31A8FF"),
  },
  {
    id: "illustrator",
    name: "Illustrator",
    group: "design",
    color: "#FF9A00",
    icon: adobe("Ai", "#330000", "#FF9A00"),
  },
  {
    id: "indesign",
    name: "InDesign",
    group: "design",
    color: "#FF3366",
    icon: adobe("Id", "#49021F", "#FF3366"),
  },
  {
    id: "lightroom",
    name: "Lightroom",
    group: "design",
    color: "#31A8FF",
    icon: adobe("Lr", "#001E36", "#31A8FF"),
  },
  {
    id: "animate",
    name: "Animate",
    group: "design",
    color: "#9999FF",
    icon: adobe("An", "#00005B", "#9999FF"),
  },
  {
    id: "canva",
    name: "Canva",
    group: "design",
    color: "#00C4CC",
    icon: {
      kind: "mono",
      text: "C",
      bg: "linear-gradient(135deg, #00C4CC, #7D2AE8)",
      fg: "#FFFFFF",
      serif: true,
    },
  },
  // --- WEB ---
  {
    id: "figma",
    name: "Figma",
    group: "web",
    color: simpleIcons.figma.color,
    icon: { kind: "si", slug: "figma" },
  },
  {
    id: "html-css",
    name: "HTML / CSS / JS / PHP",
    group: "web",
    color: simpleIcons.html5.color,
    icon: { kind: "cluster", slugs: ["html5", "css", "javascript", "php"] },
  },
  {
    id: "vs-code",
    name: "VS Code",
    group: "web",
    color: "#23A9F2",
    icon: { kind: "mono", text: "VS", bg: "#0066B8", fg: "#FFFFFF" },
  },
];
