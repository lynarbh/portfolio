import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { ToolLogo } from "@/components/ToolLogo";
import { TOOL_GROUPS, tools } from "@/data/tools";

// Grille des outils, 3 groupes (Vidéo · Design · Web). L'entrée en cascade est pilotée par
// `--i` (index dans le groupe) une fois le bloc révélé (`.reveal.in`).
export function Tools() {
  return (
    <div className="tools" aria-label="Outils">
      {TOOL_GROUPS.map((g, gi) => (
        <Reveal key={g.id} delay={gi * 120} className="tools-group">
          <h3 className="tools-title">
            <span className="tools-title__n">0{gi + 1}</span> {g.label}
          </h3>
          <ul className="tools-grid">
            {tools
              .filter((t) => t.group === g.id)
              .map((t, i) => (
                <li
                  key={t.id}
                  className="tool"
                  style={{ "--i": i, "--tool": t.color } as CSSProperties}
                >
                  <ToolLogo tool={t} />
                  <span className="tool-name">{t.name}</span>
                </li>
              ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
