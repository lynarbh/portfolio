import { ToolLogo } from "@/components/ToolLogo";
import { tools, type Tool } from "@/data/tools";

const ALIASES: Record<string, string> = {
  "visual studio code": "vs-code",
  vscode: "vs-code",
  aftereffect: "after-effects",
  "after effect": "after-effects",
  "davinci resolve": "davinci-resolve",
  "html / css / js / php": "html-css",
};

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

// Retrouve l'entrée du registre d'outils à partir d'un libellé libre (données projets).
function findTool(name: string): Tool | undefined {
  const n = norm(name);
  const id = ALIASES[n] ?? n.replace(/\s+/g, "-");
  return tools.find((t) => t.id === id || norm(t.name) === n);
}

// Puces d'outils avec leur picto (même rendu que la grille de l'accueil) ; un libellé sans
// picto connu est affiché en texte seul.
export function ToolChips({
  names,
  className = "",
}: {
  names: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`tool-chips ${className}`} aria-label="Outils">
      {names.map((name) => {
        const t = findTool(name);
        return (
          <li
            key={name}
            className="tool tool--static"
            style={t ? ({ "--tool": t.color } as React.CSSProperties) : undefined}
          >
            {t ? <ToolLogo tool={t} /> : null}
            <span className="tool-name">{t ? t.name : name}</span>
          </li>
        );
      })}
    </ul>
  );
}
