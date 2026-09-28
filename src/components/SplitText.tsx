import { Fragment, type CSSProperties } from "react";

// Texte découpé en lettres ou en mots pour les animations d'entrée (montée masquée).
// `trigger: "load"` joue au chargement (animation CSS) ; `trigger: "reveal"` attend qu'un
// ancêtre `.reveal` reçoive `.in` (transition CSS). `accent` est rendu en <em> (italique rouge).
// Les lecteurs d'écran lisent le texte complet (sr-only) ; les morceaux sont aria-hidden.
export function SplitText({
  text,
  accent,
  by = "chars",
  trigger = "reveal",
  step = 40,
  delay = 0,
  className = "",
}: {
  text: string;
  accent?: string;
  by?: "chars" | "words";
  trigger?: "load" | "reveal";
  step?: number;
  delay?: number;
  className?: string;
}) {
  let i = 0;
  const pieces = (s: string) =>
    (by === "chars" ? Array.from(s) : s.split(" ")).map((p, k, arr) => {
      const idx = i++;
      const content = p === " " ? " " : p;
      const sep = by === "words" && k < arr.length - 1 ? " " : null;
      return (
        <Fragment key={`${idx}-${p}`}>
          <span className="st-w">
            <span className="st-p" style={{ "--d": `${delay + idx * step}ms` } as CSSProperties}>
              {content}
            </span>
          </span>
          {sep}
        </Fragment>
      );
    });

  return (
    <span className={`st st--${trigger} ${className}`}>
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <span aria-hidden="true">
        {pieces(text)}
        {accent ? (
          <>
            {" "}
            <em className="st-accent">{pieces(accent)}</em>
          </>
        ) : null}
      </span>
    </span>
  );
}
