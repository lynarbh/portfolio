import type { CSSProperties } from "react";

// Bandeau défilant infini (CSS pur, contenu dupliqué). `reverse` inverse le sens,
// `outline` rend le texte en contour. Se met en pause au survol ; statique en mouvement réduit.
export function Marquee({
  items,
  reverse = false,
  outline = false,
  speed = 38,
}: {
  items: readonly string[];
  reverse?: boolean;
  outline?: boolean;
  speed?: number;
}) {
  const row = (ariaHidden: boolean) => (
    <span className="marquee-row" aria-hidden={ariaHidden || undefined}>
      {items.map((it, i) => (
        <span key={`${i}-${it}`} className="marquee-item">
          {it}
          <span className="marquee-star" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${outline ? "marquee--outline" : ""}`}
      style={{ "--speed": `${speed}s` } as CSSProperties}
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
