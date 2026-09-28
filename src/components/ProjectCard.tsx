import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Picture } from "@/components/Picture";
import type { Project } from "@/data/projects";
import type { MediaId } from "@/data/media.generated";

const MAX_IMAGES = 9;
const CYCLE_MS = 1100;
const SIZES = "(min-width: 1280px) 260px, (min-width: 1024px) 22vw, (min-width: 640px) 32vw, 60vw";

// Carte projet : mosaïque carrée des vraies images du projet (1, 2 ou 3 tuiles). Au survol ou au
// focus, chaque tuile passe aux images suivantes en fondu ; les images supplémentaires ne sont
// montées qu'à ce moment-là pour ne rien charger d'inutile au repos.
export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const imgs = useMemo(() => (p.preview ?? p.media ?? []).slice(0, MAX_IMAGES), [p]);
  const tiles = Math.min(imgs.length, 3);
  const rounds = tiles ? Math.ceil(imgs.length / tiles) : 0;
  const [armed, setArmed] = useState(false);
  const [round, setRound] = useState(0);
  const timer = useRef<number | null>(null);

  const stop = () => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  };
  const start = () => {
    if (rounds <= 1) return;
    setArmed(true);
    stop();
    timer.current = window.setInterval(() => setRound((r) => (r + 1) % rounds), CYCLE_MS);
  };
  const rest = () => {
    stop();
    setRound(0);
  };
  useEffect(() => stop, []);

  const at = (t: number, r: number): MediaId => imgs[(t + r * tiles) % imgs.length];
  const layout = tiles === 3 ? "pc-mosaic--3" : tiles === 2 ? "pc-mosaic--2" : "pc-mosaic--1";
  const count = p.video ? "Vidéo" : `${imgs.length} visuel${imgs.length > 1 ? "s" : ""}`;

  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: p.id }}
      className={`pc ${p.inProgress ? "is-soon" : ""}`}
      aria-label={`Voir le projet ${p.title}`}
      data-cursor={p.inProgress ? "Bientôt" : "Voir"}
      onPointerEnter={start}
      onPointerLeave={rest}
      onFocus={start}
      onBlur={rest}
    >
      <div className={`pc-media ${layout}`}>
        {Array.from({ length: tiles }, (_, t) => {
          const current = at(t, round);
          const shown = armed
            ? [...new Set(Array.from({ length: rounds }, (_, r) => at(t, r)))]
            : [at(t, 0)];
          return (
            <div key={t} className="pc-tile">
              {shown.map((id) => (
                <Picture
                  key={id}
                  id={id}
                  alt=""
                  sizes={SIZES}
                  className={`pc-img h-full ${id === current ? "is-on" : ""}`}
                />
              ))}
            </div>
          );
        })}
        {tiles === 0 && <div className="pc-tile pc-tile--empty" />}
        {p.video && (
          <span className="pc-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        )}
        <span className="pc-count">{count}</span>
        {p.inProgress && (
          <span className="stamp stamp--card">
            En cours
            <br />
            de dev
          </span>
        )}
      </div>
      <div className="pc-meta">
        <span className="pc-index">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="pc-title">{p.title}</h3>
        <span className="pc-arrow" aria-hidden="true">
          →
        </span>
      </div>
      <p className="pc-sub">
        {p.category} · {p.tools.join(", ")}
      </p>
    </Link>
  );
}
