import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Picture } from "@/components/Picture";
import { SplitText } from "@/components/SplitText";
import type { MediaId } from "@/data/media.generated";

// Étude de cas « Tafsut Festival » (projet festival-identite). Les textes sont ceux de la charte
// graphique de Lyna (typos corrigées) ; seuls quelques visuels sont montrés, recadrés au carré.

const SQ2 = "(min-width: 1152px) 552px, (min-width: 640px) calc(50vw - 40px), calc(100vw - 48px)";
const SQ3 = "(min-width: 1152px) 360px, (min-width: 640px) calc(33vw - 32px), calc(100vw - 48px)";
const SQ5 = "(min-width: 1152px) 208px, (min-width: 640px) 18vw, calc(50vw - 36px)";

const CHAPTERS = [
  ["concept", "Concept"],
  ["pictogramme", "Pictogramme"],
  ["logotype", "Logotype"],
  ["declinaisons", "Déclinaisons"],
  ["couleurs", "Couleurs"],
  ["typographies", "Typographies"],
  ["supports", "Supports"],
] as const;

const PRIMARY = [
  { hex: "#EC6078", cmjn: "C0 · M75 · J35 · N0" },
  { hex: "#AADADD", cmjn: "C38 · M0 · J16 · N0" },
];
const SECONDARY = [
  { hex: "#757EBC", cmjn: "C61 · M50 · J0 · N0" },
  { hex: "#7FC290", cmjn: "C55 · M0 · J55 · N0" },
  { hex: "#FDD596", cmjn: "C0 · M19 · J47 · N0" },
  { hex: "#FBF080", cmjn: "C5 · M0 · J61 · N0" },
  { hex: "#E8ABCE", cmjn: "C7 · M43 · J0 · N0" },
];

const POLES: readonly { id: MediaId; label: string }[] = [
  { id: "festival-identite/crop-pole-ateliers", label: "Ateliers artisanaux" },
  { id: "festival-identite/crop-pole-cuisine", label: "Découvertes culinaires" },
  { id: "festival-identite/crop-pole-musique", label: "Musique et danse" },
  { id: "festival-identite/crop-pole-education", label: "Éducation et héritage" },
  { id: "festival-identite/crop-pole-soins", label: "Soins et bien-être" },
];

const SUPPORTS: readonly { id: MediaId; label: string; pos?: string }[] = [
  {
    id: "festival-identite/planche-24",
    label: "Affiche « Danse Amazigh »",
    pos: "object-[60%_50%]",
  },
  { id: "festival-identite/planche-25", label: "Billets" },
  { id: "festival-identite/planche-32", label: "Enseigne" },
  { id: "festival-identite/planche-27", label: "Gobelets" },
  { id: "festival-identite/planche-28", label: "Tote bag" },
  { id: "festival-identite/planche-31", label: "Food truck", pos: "object-[40%_50%]" },
];

function Square({
  id,
  alt,
  sizes = SQ3,
  pos = "",
  caption,
  n,
}: {
  id: MediaId;
  alt: string;
  sizes?: string;
  pos?: string;
  caption?: string;
  n?: string;
}) {
  return (
    <figure className="cs-sq">
      <div className="cs-sq__img">
        <Picture id={id} alt={alt} sizes={sizes} className={`h-full w-full object-cover ${pos}`} />
      </div>
      {caption ? (
        <figcaption className="cs-cap">
          {n ? <span className="cs-cap__n">{n}</span> : null}
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
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
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="cs-chapter">
      <Reveal className="reveal--focus">
        <p className="cs-kicker">
          <span>{n}</span> {title}
        </p>
      </Reveal>
      {children}
    </section>
  );
}

export function FestivalCaseStudy({ role, tools }: { role: string; tools: readonly string[] }) {
  return (
    <main className="cs">
      <div className="cs-wrap">
        <Reveal>
          <Link to="/" hash="projects" className="link-line" data-cursor="Retour">
            ← Retour aux créations
          </Link>
        </Reveal>

        <header className="cs-head">
          <Reveal delay={80}>
            <p className="sec-kicker">Identité d'un festival · Branding</p>
            <h1 className="cs-h1">
              <SplitText by="words" text="Tafsut" accent="Festival" step={110} />
            </h1>
            <p className="cs-slogan">Racines &amp; Renouveau</p>
          </Reveal>
          <Reveal delay={200} className="cs-meta">
            <dl>
              <div>
                <dt>Rôle</dt>
                <dd>{role}</dd>
              </div>
              <div>
                <dt>Livrables</dt>
                <dd>Logotype, charte graphique, affiche, billets, goodies, signalétique</dd>
              </div>
              <div>
                <dt>Outils</dt>
                <dd>{tools.join(", ")}</dd>
              </div>
              <div>
                <dt>Cadre</dt>
                <dd>Festival imaginé de A à Z, projet BUT MMI</dd>
              </div>
            </dl>
          </Reveal>
        </header>

        <nav className="cs-nav" aria-label="Chapitres">
          {CHAPTERS.map(([id, label], i) => (
            <a key={id} href={`#${id}`}>
              <span>0{i + 1}</span> {label}
            </a>
          ))}
        </nav>

        <div className="cs-body">
          <Chapter id="concept" n="01" title="Concept">
            <div className="cs-grid-2">
              <Reveal delay={100}>
                <Square
                  id="festival-identite/planche-01"
                  alt="Logotype du Tafsut Festival dans son cercle, avec le slogan Racines & Renouveau"
                  sizes={SQ2}
                />
              </Reveal>
              <Reveal delay={200} className="cs-text cs-text--lg">
                <p>
                  Tafsut, qui signifie « printemps » en kabyle, donne son nom à ce festival culturel
                  dédié à la jeunesse européenne, et plus particulièrement aux nouvelles générations
                  issues des diasporas nord-africaines et berbères.
                </p>
                <p>
                  Ancré dans la culture amazighe, il célèbre le renouveau, la transmission et la
                  diversité à travers musique, artisanat, gastronomie et bien-être.
                </p>
                <p>
                  Espace de rencontre entre traditions et modernité, le Tafsut Festival porte des
                  valeurs d'inclusion, de liberté et de fierté culturelle, incarnées dès son
                  identité visuelle par le symbole amazigh, l'homme libre.
                </p>
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="pictogramme" n="02" title="Pictogramme">
            <div className="cs-grid-2 cs-grid-2--flip">
              <Reveal delay={100} className="cs-text">
                <p>
                  Le pictogramme du Tafsut Festival constitue le cœur de l'identité visuelle : une
                  revisitation moderne du symbole amazigh (Yaz), l'emblème de l'homme libre.
                </p>
                <p>
                  Ce symbole traditionnel est entièrement transformé par l'intégration d'éléments
                  floraux délicats qui évoquent directement le printemps (Tafsut).
                </p>
                <p>
                  L'ensemble est enrichi de motifs géométriques ornementaux inspirés des tapis
                  berbères et des mosaïques andalouses, créant une composition symétrique et
                  équilibrée.
                </p>
                <p>
                  La palette chromatique (rouge, bleu, jaune, orange et rose) s'organise en bandes
                  géométriques régulières qui structurent le motif tout en le rendant dynamique et
                  ludique.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Square
                  id="festival-identite/crop-picto"
                  alt="Pictogramme du Tafsut Festival : symbole amazigh Yaz orné de fleurs et de motifs géométriques"
                  sizes={SQ2}
                />
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="logotype" n="03" title="Logotype">
            <div className="cs-grid-3">
              <Reveal delay={80}>
                <Square
                  id="festival-identite/crop-logo-positif"
                  alt="Logotype complet, version positive"
                  caption="Version positive"
                  n="A"
                />
              </Reveal>
              <Reveal delay={160}>
                <Square
                  id="festival-identite/crop-logo-negatif"
                  alt="Logotype complet, version négative"
                  caption="Version négative"
                  n="B"
                />
              </Reveal>
              <Reveal delay={240} className="cs-text cs-text--sm">
                <p>
                  Le logotype complet présente l'élément graphique inscrit dans un cercle aux
                  contours délicats bleu.
                </p>
                <p>
                  Sous ce motif central, le texte TAFSUT s'affiche en Cinzel Decorative rose vif,
                  inspirée de l'alphabet berbère ancien, tandis que FESTIVAL en DM Sans apparaît en
                  typographie épurée et contemporaine bleu.
                </p>
                <p>
                  Le cercle fonctionne comme un cadre qui unifie tous les éléments, créant une
                  harmonie formelle qui évoque un sceau.
                </p>
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="declinaisons" n="04" title="Déclinaisons">
            <div className="cs-grid-5">
              {POLES.map((p, i) => (
                <Reveal key={p.id} delay={i * 70}>
                  <Square
                    id={p.id}
                    alt={`Variante du logo, pôle ${p.label}`}
                    sizes={SQ5}
                    caption={p.label}
                    n={`0${i + 1}`}
                  />
                </Reveal>
              ))}
            </div>
            <div className="cs-grid-2 mt-8">
              <Reveal delay={100}>
                <Square
                  id="festival-identite/crop-motifs"
                  alt="Éléments graphiques : frises ornementales et pictogramme"
                  sizes={SQ2}
                  caption="Éléments graphiques"
                />
              </Reveal>
              <Reveal delay={200}>
                <Square
                  id="festival-identite/crop-texture"
                  alt="Texture rose inspirée des tapis berbères"
                  sizes={SQ2}
                  caption="Texture"
                />
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="couleurs" n="05" title="Couleurs">
            <div className="cs-grid-2">
              <Reveal delay={80}>
                <p className="cs-sub">Couleurs principales</p>
                <ul className="cs-swatches cs-swatches--2">
                  {PRIMARY.map((c) => (
                    <li key={c.hex}>
                      <span className="cs-swatch" style={{ background: c.hex }} />
                      <b>{c.hex}</b>
                      <small>{c.cmjn}</small>
                    </li>
                  ))}
                </ul>
                <div className="cs-text cs-text--sm mt-6">
                  <p>
                    Le rose et le bleu constituent la base de l'identité visuelle du festival. Leur
                    association crée un univers moderne et printanier, pensé pour la jeunesse
                    européenne.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <p className="cs-sub">Couleurs secondaires</p>
                <ul className="cs-swatches cs-swatches--5">
                  {SECONDARY.map((c) => (
                    <li key={c.hex}>
                      <span className="cs-swatch" style={{ background: c.hex }} />
                      <b>{c.hex}</b>
                      <small>{c.cmjn}</small>
                    </li>
                  ))}
                </ul>
                <div className="cs-text cs-text--sm mt-6">
                  <p>
                    Les couleurs secondaires s'inspirent du drapeau amazigh. Elles sont déclinées
                    dans des nuances pastel afin de conserver ce lien culturel, tout en étant
                    adaptées à l'univers du festival.
                  </p>
                </div>
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="typographies" n="06" title="Typographies">
            <div className="cs-grid-3 cs-type">
              <Reveal delay={80}>
                <div className="cs-spec cs-spec--cinzel">
                  <span className="cs-spec__sample">Tafsut</span>
                  <span className="cs-spec__name">Cinzel Decorative · Bold</span>
                  <span className="cs-spec__use">H1 — Titre · H2 — Section</span>
                </div>
                <div className="cs-text cs-text--sm">
                  <p>
                    Cinzel Decorative est utilisée pour les éléments de titre et notamment pour «
                    Tafsut » dans le logo. Son esthétique géométrique et ornementale, inspirée de
                    formes anciennes proches de l'alphabet berbère, apporte une dimension
                    identitaire forte. Elle est utilisée en graisse bold pour renforcer sa présence.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="cs-spec cs-spec--dm">
                  <span className="cs-spec__sample">Festival</span>
                  <span className="cs-spec__name">DM Sans · Regular à Black</span>
                  <span className="cs-spec__use">
                    Bold — Accent · Regular — Corps · Light — Caption
                  </span>
                </div>
                <div className="cs-text cs-text--sm">
                  <p>
                    DM Sans vient compléter cet univers par une approche plus moderne et lisible.
                    Elle apporte du contraste avec les éléments plus traditionnels et inscrit le
                    festival dans une dimension contemporaine, en lien avec un public jeune et
                    multiculturel. Elle est utilisée pour le mot « FESTIVAL » dans le logo et pour
                    les textes courants.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="cs-spec cs-spec--cormorant">
                  <span className="cs-spec__sample">Racines &amp; Renouveau</span>
                  <span className="cs-spec__name">Cormorant Garamond · Light, Italic</span>
                  <span className="cs-spec__use">Citations &amp; sous-titres</span>
                </div>
                <div className="cs-text cs-text--sm">
                  <p>
                    Cormorant Garamond apporte une dimension plus expressive et élégante, avec une
                    sensibilité presque florale. Elle est utilisée pour les slogans, citations et
                    textes poétiques, notamment « Racines &amp; Renouveau », et vient adoucir
                    l'ensemble pour renforcer l'univers poétique et printanier du festival.
                  </p>
                </div>
              </Reveal>
            </div>
          </Chapter>

          <Chapter id="supports" n="07" title="Supports">
            <div className="cs-grid-3">
              {SUPPORTS.map((s, i) => (
                <Reveal key={s.id} delay={(i % 3) * 90}>
                  <Square
                    id={s.id}
                    alt={`Mise en situation : ${s.label}`}
                    pos={s.pos}
                    caption={s.label}
                    n={`0${i + 1}`}
                  />
                </Reveal>
              ))}
            </div>
          </Chapter>
        </div>

        <footer className="cs-foot">
          <Reveal>
            <p className="cs-foot__note">
              Extrait de la charte graphique (32 planches) : logotype, déclinaisons, couleurs,
              typographies et mises en situation.
            </p>
            <div className="cs-foot__links">
              <Link to="/" hash="projects" className="quest-btn" data-cursor="Retour">
                Toutes mes créations →
              </Link>
              <Link
                to="/projects/$projectId"
                params={{ projectId: "sae-2" }}
                className="link-line"
                data-cursor="Voir"
              >
                Projet suivant : SkøllRub →
              </Link>
            </div>
          </Reveal>
        </footer>
      </div>
    </main>
  );
}
