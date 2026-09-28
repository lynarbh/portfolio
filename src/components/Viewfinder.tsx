import type { ReactNode } from "react";

const RING_TEXT = "Je filme · J'imagine · Je dessine · Je monte · Je raconte · ";

// Portrait mis en scène comme un viseur de caméra : crochets de cadre, collimateur qui fait
// la mise au point, métadonnées de prise de vue, et un anneau de texte qui tourne (ses mots).
export function Viewfinder({ children }: { children: ReactNode }) {
  return (
    <div className="vf">
      <div className="vf-media">{children}</div>
      <div className="vf-ui" aria-hidden="true">
        <span className="vf-corner vf-corner--tl" />
        <span className="vf-corner vf-corner--tr" />
        <span className="vf-corner vf-corner--bl" />
        <span className="vf-corner vf-corner--br" />
        <span className="vf-focus" />
        <span className="vf-cross" />
        <span className="vf-meta vf-meta--tl">
          <span className="rec-dot" /> REC
        </span>
        <span className="vf-meta vf-meta--tr">4K · 25p</span>
        <span className="vf-meta vf-meta--bl">ISO 400 · f/1.8 · 1/50</span>
        <span className="vf-meta vf-meta--br">00:00:07:12</span>
      </div>
      <svg className="vf-ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="vf-ring-path" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <circle cx="100" cy="100" r="54" />
        <text>
          <textPath href="#vf-ring-path">{RING_TEXT}</textPath>
        </text>
      </svg>
    </div>
  );
}
