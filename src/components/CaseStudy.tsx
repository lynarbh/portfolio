import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Picture } from "@/components/Picture";
import { SplitText } from "@/components/SplitText";
import { ToolChips } from "@/components/ToolChips";
import { projects, type Project } from "@/data/projects";
import type { CaseStudyData, CsBlock, CsImage } from "@/data/case-studies";

// Moteur des études de cas : en-tête, sommaire, chapitres composés de blocs (voir
// src/data/case-studies.ts), fond vivant, visionneuse. Les images sont des carrés cliquables.

const SQ2 = "(min-width: 1152px) 552px, (min-width: 640px) calc(50vw - 40px), calc(100vw - 48px)";
const SQ3 = "(min-width: 1152px) 360px, (min-width: 640px) calc(33vw - 32px), calc(100vw - 48px)";
const SQ4 = "(min-width: 1152px) 264px, (min-width: 640px) calc(25vw - 28px), calc(50vw - 36px)";
const SQ5 = "(min-width: 1152px) 208px, (min-width: 640px) 18vw, calc(33vw - 24px)";
const SIZES_BY_COLS: Record<number, string> = { 2: SQ2, 3: SQ3, 4: SQ4, 5: SQ5 };

type Shot = { id: CsImage["id"]; alt: string };
type Open = (shot: Shot) => void;

function Square({
  image,
  sizes = SQ3,
  n,
  onOpen,
}: {
  image: CsImage;
  sizes?: string;
  n?: string;
  onOpen: Open;
}) {
  return (
    <figure className="cs-sq">
      <button
        type="button"
        className={`cs-sq__img ${image.contain ? "is-contain" : ""}`}
        data-cursor="Agrandir"
        aria-label={`Agrandir : ${image.alt}`}
        onClick={() => onOpen({ id: image.id, alt: image.alt })}
      >
        <Picture
          id={image.id}
          alt={image.alt}
          sizes={sizes}
          className={`h-full w-full ${image.contain ? "object-contain" : "object-cover"} ${image.pos ?? ""}`}
        />
      </button>
      {image.caption ? (
        <figcaption className="cs-cap">
          {n ? <span className="cs-cap__n">{n}</span> : null}
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Text({ text, size = "" }: { text: string[]; size?: "" | "lg" | "sm" }) {
  return (
    <div className={`cs-text ${size ? `cs-text--${size}` : ""}`}>
      {text.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
}

function Block({ block, onOpen }: { block: CsBlock; onOpen: Open }) {
  switch (block.kind) {
    case "feature":
      return (
        <div className={`cs-grid-2 ${block.flip ? "cs-grid-2--flip" : ""}`}>
          <Reveal delay={100}>
            <Square image={block.image} sizes={SQ2} onOpen={onOpen} />
          </Reveal>
          <Reveal delay={200}>
            <Text text={block.text} size="lg" />
          </Reveal>
        </div>
      );
    case "duo":
      return (
        <div className="cs-grid-3">
          {block.images.map((img, i) => (
            <Reveal key={img.id} delay={80 + i * 80}>
              <Square image={img} n={i === 0 ? "A" : "B"} onOpen={onOpen} />
            </Reveal>
          ))}
          <Reveal delay={240} className="cs-text--sm">
            <Text text={block.text} size="sm" />
          </Reveal>
        </div>
      );
    case "grid": {
      const cols = block.cols ?? 3;
      return (
        <>
          <div className={`cs-grid-${cols}`}>
            {block.images.map((img, i) => (
              <Reveal key={`${img.id}-${i}`} delay={(i % cols) * 80}>
                <Square image={img} sizes={SIZES_BY_COLS[cols]} n={`0${i + 1}`} onOpen={onOpen} />
              </Reveal>
            ))}
          </div>
          {block.text ? (
            <Reveal delay={120} className="cs-after">
              <Text text={block.text} />
            </Reveal>
          ) : null}
        </>
      );
    }
    case "palette": {
      const withNotes = block.groups.some((g) => g.colors.some((c) => c.note));
      return (
        <div className={withNotes ? "" : "cs-grid-2"}>
          {block.groups.map((g, gi) => (
            <Reveal key={g.label} delay={80 + gi * 100}>
              <p className="cs-sub">{g.label}</p>
              <ul
                className={`cs-swatches ${withNotes ? "cs-swatches--notes" : g.colors.length > 3 ? "cs-swatches--5" : "cs-swatches--2"}`}
              >
                {g.colors.map((c) => (
                  <li key={c.hex}>
                    <span className="cs-swatch" style={{ background: c.hex }} />
                    {c.name ? <strong className="cs-swatch__name">{c.name}</strong> : null}
                    <b>{c.hex}</b>
                    {c.cmjn ? <small>{c.cmjn}</small> : null}
                    {c.note ? <span className="cs-swatch__note">{c.note}</span> : null}
                  </li>
                ))}
              </ul>
              {g.text ? (
                <div className="mt-6">
                  <Text text={g.text} size="sm" />
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      );
    }
    case "type":
      return (
        <div className="cs-grid-3 cs-type">
          {block.specs.map((s, i) => (
            <Reveal key={s.name} delay={80 + i * 80}>
              <div className={`cs-spec cs-spec--${s.family}`}>
                <span className="cs-spec__sample" style={s.color ? { color: s.color } : undefined}>
                  {s.sample}
                </span>
                <span className="cs-spec__name">{s.name}</span>
                <span className="cs-spec__use">{s.use}</span>
              </div>
              <Text text={s.text} size="sm" />
            </Reveal>
          ))}
        </div>
      );
    case "series":
      return (
        <div className="cs-grid-4 cs-series">
          {block.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <Square image={it.image} sizes={SQ4} onOpen={onOpen} />
              <h3 className="cs-series__title" style={it.color ? { color: it.color } : undefined}>
                {it.title}
              </h3>
              {it.sub ? <p className="cs-series__sub">{it.sub}</p> : null}
              <Text text={it.text} size="sm" />
            </Reveal>
          ))}
        </div>
      );
    case "video":
      return (
        <Reveal delay={100}>
          <div className={`monitor cs-video ${block.vertical ? "cs-video--vertical" : ""}`}>
            <span className="monitor-label">
              <span className="rec-dot" /> {block.label ?? "Vidéo"}
            </span>
            <div className="cs-video__frame">
              <iframe
                src={block.youtube}
                title={block.label ?? "Vidéo"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          {block.text ? (
            <div className="cs-after">
              <Text text={block.text} />
            </div>
          ) : null}
        </Reveal>
      );
    case "embed":
      return (
        <Reveal delay={100}>
          <div className="monitor cs-embed">
            <span className="monitor-label">
              <span className="rec-dot" /> Interactif
            </span>
            <iframe src={block.src} title={block.title} allowFullScreen loading="lazy" />
          </div>
          {block.text ? (
            <div className="cs-after">
              <Text text={block.text} />
            </div>
          ) : null}
        </Reveal>
      );
    case "link":
      return (
        <Reveal delay={100} className="cs-linkblock">
          {block.text ? <Text text={block.text} /> : null}
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="quest-btn"
            data-cursor="Ouvrir"
          >
            {block.label}
          </a>
        </Reveal>
      );
  }
}

function Chapter({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="cs-chapter">
      <Reveal className="reveal--focus">
        <p className="cs-kicker" data-cursor-fx="blend">
          <span>{n}</span> {title}
        </p>
      </Reveal>
      <div className="cs-blocks">{children}</div>
    </section>
  );
}

function Lightbox({ shot, onClose }: { shot: Shot; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={shot.alt} onClick={onClose}>
      <button type="button" className="lb-close" aria-label="Fermer" data-cursor="Fermer" autoFocus>
        ✕
      </button>
      <div className="lb-img" onClick={(e) => e.stopPropagation()}>
        <Picture id={shot.id} alt={shot.alt} sizes="(min-width: 1024px) 1100px, 92vw" />
      </div>
      <p className="lb-cap">{shot.alt}</p>
    </div>
  );
}

export function CaseStudy({ project, data }: { project: Project; data: CaseStudyData }) {
  const [shot, setShot] = useState<Shot | null>(null);
  const close = () => setShot(null);
  const next = projects.find((p) => p.id === data.next);
  return (
    <main className="cs">
      <div className="cs-bg" aria-hidden="true">
        <span className="cs-bg__blob cs-bg__blob--1" />
        <span className="cs-bg__blob cs-bg__blob--2" />
        <span className="cs-bg__blob cs-bg__blob--3" />
        <span className="cs-bg__dots" />
        <span className="cs-bg__film cs-bg__film--l" />
        <span className="cs-bg__film cs-bg__film--r" />
        <span className="cs-bg__grain" />
        <span className="cs-bg__vignette" />
      </div>
      {shot ? <Lightbox shot={shot} onClose={close} /> : null}
      <div className="cs-wrap">
        <Reveal>
          <Link to="/" hash="projects" className="link-line" data-cursor="Retour">
            ← Retour aux créations
          </Link>
        </Reveal>

        <header className="cs-head">
          <Reveal delay={80}>
            <p className="sec-kicker">{data.kicker}</p>
            <h1 className="cs-h1" data-cursor-fx="blend">
              <SplitText by="words" text={data.title} accent={data.accent} step={110} />
            </h1>
            {data.slogan ? <p className="cs-slogan">{data.slogan}</p> : null}
          </Reveal>
          <Reveal delay={200} className="cs-meta">
            <dl>
              <div>
                <dt>Rôle</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Livrables</dt>
                <dd>{data.deliverables}</dd>
              </div>
              <div>
                <dt>Outils</dt>
                <dd>
                  <ToolChips names={project.tools} />
                </dd>
              </div>
              <div>
                <dt>Cadre</dt>
                <dd>{data.frame}</dd>
              </div>
            </dl>
          </Reveal>
        </header>

        <nav className="cs-nav" aria-label="Chapitres">
          {data.chapters.map((c, i) => (
            <a key={c.id} href={`#${c.id}`}>
              <span>{String(i + 1).padStart(2, "0")}</span> {c.title}
            </a>
          ))}
        </nav>

        <div className="cs-body">
          {data.chapters.map((c, i) => (
            <Chapter key={c.id} id={c.id} n={String(i + 1).padStart(2, "0")} title={c.title}>
              {c.blocks.map((b, bi) => (
                <Block key={`${c.id}-${bi}`} block={b} onOpen={setShot} />
              ))}
            </Chapter>
          ))}
        </div>

        <footer className="cs-foot">
          <Reveal>
            {data.note ? <p className="cs-foot__note">{data.note}</p> : null}
            <div className="cs-foot__links">
              <Link to="/" hash="projects" className="quest-btn" data-cursor="Retour">
                Toutes mes créations →
              </Link>
              {next ? (
                <Link
                  to="/projects/$projectId"
                  params={{ projectId: next.id }}
                  className="link-line"
                  data-cursor="Voir"
                >
                  Projet suivant : {next.title} →
                </Link>
              ) : null}
            </div>
          </Reveal>
        </footer>
      </div>
    </main>
  );
}
