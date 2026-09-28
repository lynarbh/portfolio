import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Picture } from "@/components/Picture";
import { Timeline } from "@/components/Timeline";
import { SplitText } from "@/components/SplitText";
import { Marquee } from "@/components/Marquee";
import { Magnetic } from "@/components/Magnetic";
import { Tools } from "@/components/Tools";
import { ProjectCard } from "@/components/ProjectCard";
import { Viewfinder } from "@/components/Viewfinder";
import { languages, CV_PDF, CV_PDF_LABEL } from "@/data/timeline";
import { videos } from "@/data/media.generated";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        href: videos.hero.poster,
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  "Tout",
  "Vidéo",
  "Photo",
  "Branding",
  "Illustration",
  "Projet universitaire",
] as const;
type Category = (typeof CATEGORIES)[number];

// Les mots du bandeau sont ceux de Lyna (texte « Qui suis-je »).
const MARQUEE_WORDS = [
  "Je filme",
  "J'imagine",
  "Je dessine",
  "Je monte",
  "Je crée des identités visuelles",
  "Je raconte",
] as const;

const NAV_LINKS = [
  { href: "#about", label: "À propos", n: "02" },
  { href: "#parcours", label: "Parcours", n: "03" },
  { href: "#projects", label: "Créations", n: "04" },
  { href: "#contact", label: "Contact", n: "05" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-nav fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="nav-brand" aria-label="Haut de page">
            Lyna <em>Rebahi</em>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Sections">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nav-pill">
              <span className="nav-pill__dot" aria-hidden="true" /> Dispo sept. 2026
            </a>
          </nav>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="nav-burger md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>
      {open && (
        <nav className="nav-sheet md:hidden" aria-label="Sections">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label} <small>SC. {l.n}</small>
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

// Décor « écran de caméra » partagé par le hero et le contact : scanlines, grain, cadre bombé,
// métadonnées de coins. La vidéo de fond (fixe) est celle du hero.
function ScreenChrome({
  scene,
  paused = false,
  timecode,
  noButton = false,
}: {
  scene: string;
  paused?: boolean;
  timecode?: string;
  noButton?: boolean;
}) {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <div className={`film-grain ${paused ? "is-paused" : ""}`} aria-hidden="true" />
      <div className="screen-frame" aria-hidden="true" />
      <div className={`hud-corners ${noButton ? "hud-corners--nobtn" : ""}`} aria-hidden="true">
        <span className="hud-corner hud-corner--tl">
          <b>Lyna Rebahi</b>
          <br />
          (Réalisation / Montage / Communication)
        </span>
        <span className="hud-corner hud-corner--tc">
          BUT MMI · Communication digitale
          <br />
          Instagram : @lynae.quiet
        </span>
        <span className="hud-corner hud-corner--tr">
          <b>Dites bonjour</b>
          <br />
          lyna.rebahi@gmail.com
        </span>
        <span className="hud-corner hud-corner--bl">
          <b>Portfolio</b>
          <br />
          2026 · Alternance
        </span>
        <span className="hud-corner hud-corner--br">
          <span className="rec-dot" /> REC{timecode ? ` ${timecode}` : ""}
          <br />
          {scene}
        </span>
      </div>
    </>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"playing" | "paused">("paused");
  const [failed, setFailed] = useState(false);
  const [timecode, setTimecode] = useState("00:00:00");
  const userPaused = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onPlay = () => setState("playing");
    const onPause = () => setState("paused");
    const onError = () => setFailed(true);
    const onTime = () => {
      const t = Math.floor(v.currentTime);
      const mm = String(Math.floor(t / 60)).padStart(2, "0");
      const ss = String(t % 60).padStart(2, "0");
      setTimecode(`00:${mm}:${ss}`);
    };
    const onVisibility = () => {
      if (document.hidden) v.pause();
      else if (!userPaused.current && !reduce) v.play().catch(() => {});
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("error", onError);
    v.addEventListener("timeupdate", onTime);
    document.addEventListener("visibilitychange", onVisibility);
    v.muted = true;
    if (!reduce) v.play().catch(() => {});
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("error", onError);
      v.removeEventListener("timeupdate", onTime);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (state === "playing") {
      userPaused.current = true;
      v.pause();
    } else {
      userPaused.current = false;
      v.play().catch(() => {});
    }
  };

  return (
    <section id="top" className="hero relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videos.hero.src}
          poster={videos.hero.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
        <div className="hero-wash absolute inset-0" />
      </div>

      <ScreenChrome scene="SC. 01 · Accueil" paused={state !== "playing"} timecode={timecode} />

      <button
        type="button"
        aria-pressed={state === "paused"}
        hidden={failed}
        onClick={toggle}
        className="hero-pause"
        data-cursor={state === "playing" ? "Pause" : "Lecture"}
      >
        <span className="sr-only">
          {state === "playing" ? "Mettre en pause la vidéo" : "Lancer la vidéo"}
        </span>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d={state === "playing" ? "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" : "M8 5v14l11-7z"} />
        </svg>
      </button>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="hero-kicker">bienvenue dans le portfolio de</p>
        <div className="hero-titlewrap">
          <h1 className="hero-title">
            <SplitText text="Lyna" accent="Rebahi" by="chars" trigger="load" step={45} />
            <span className="hero-star" aria-hidden="true">
              ✦
            </span>
            <svg
              className="hero-swash"
              viewBox="0 0 600 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path pathLength={1} d="M6 78 C 110 128, 250 20, 330 62 S 470 118, 594 26" />
            </svg>
          </h1>
          <span className="hero-stamp" aria-hidden="true">
            Réalisation ✦ Montage
            <br />
            Communication
          </span>
        </div>
        <div className="hero-cards flex flex-col items-center gap-3">
          <p className="title-card">Alternance chargée de communication</p>
          <p className="title-card title-card--soft">Disponible à partir de septembre 2026</p>
        </div>
        <div className="hero-cta">
          <Magnetic>
            <a href="#projects" className="quest-btn" data-cursor="Voir">
              Voir mes créations →
            </a>
          </Magnetic>
          <a href="#parcours" className="link-line">
            Mon parcours ↓
          </a>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          Défiler
          <span />
        </div>
      </div>
    </section>
  );
}

function Band() {
  return (
    <div className="marquee-band" aria-label="Ce que je fais">
      <Marquee items={MARQUEE_WORDS} speed={40} />
      <Marquee items={MARQUEE_WORDS} reverse outline speed={52} />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-paper relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="reveal--focus">
          <p className="sec-kicker">Scène 02 · Portrait</p>
          <h2 className="sec-title">
            <SplitText by="words" text="Qui" accent="suis-je ?" step={90} />
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-14 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
          <Reveal delay={100}>
            <Viewfinder>
              <Picture
                id="home/portrait"
                alt="Portrait de Lyna Rebahi"
                sizes="(min-width: 640px) 352px, 90vw"
              />
            </Viewfinder>
          </Reveal>

          <div>
            <Reveal delay={200}>
              <div className="about-card">
                <p className="about-text">
                  Faites connaissance avec Lyna REBAHI, jeune femme de 20 ans, étudiante en BUT MMI,
                  en recherche d'une alternance en communication digitale. Ok ça c'était la partie
                  formelle, si je devais me décrire avec mes mots :<br></br>
                  <br></br>
                  Une cinéphile accro romantisme gothique et à l'audiovisuel qui pense résoudre le
                  monde avec des vidéos. J'ai 20 ans, je crée des contenus visuels (vidéos,
                  affiches, identités) et je passe mes journées à rêver de courts-métrages et mes
                  soirées à faire du bénévolat. Je filme ; j'imagine ; je dessine ; je monte ; je
                  crée des identités visuelles et bien sûr je RA.CON.TE.Pas mal, non ?
                </p>
              </div>
            </Reveal>
            <Tools />
          </div>
        </div>

        <Reveal delay={200} className="mx-auto mt-20 max-w-4xl">
          <div className="monitor group">
            <span className="monitor-label">
              <span className="rec-dot" /> CV vidéo · 1:25
            </span>
            <video id="cv-video" playsInline preload="metadata" controls controlsList="nodownload">
              <source src={videos.cv.src} type="video/mp4" />
            </video>
            <button
              id="play-btn"
              type="button"
              className="monitor-play"
              data-cursor="Lire"
              aria-label="Lire le CV vidéo"
              onClick={(e) => {
                const video = e.currentTarget.parentElement?.querySelector(
                  "video",
                ) as HTMLVideoElement | null;
                if (video) {
                  video.play();
                  e.currentTarget.style.display = "none";
                }
              }}
            >
              <span className="flex flex-col items-center">
                <span className="monitor-play__btn">
                  <svg
                    className="h-8 w-8 translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="monitor-play__cap">Mon CV en vidéo</span>
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CvCard() {
  return (
    <aside className="self-start lg:sticky lg:top-24" aria-label="Curriculum vitae">
      <Reveal delay={200}>
        <a
          href={CV_PDF}
          target="_blank"
          rel="noopener"
          className="cv-card"
          data-cursor="Ouvrir"
          aria-label="Ouvrir le CV (PDF) dans un nouvel onglet"
        >
          <Picture
            id="cv/apercu"
            alt="Aperçu du CV de Lyna Rebahi"
            sizes="(min-width: 1024px) 320px, 90vw"
          />
        </a>
        <div className="mt-5 flex flex-col gap-3">
          <Magnetic className="flex justify-center">
            <a href={CV_PDF} download="Lyna_REBAHI_CV.pdf" className="quest-btn" data-cursor="PDF">
              {CV_PDF_LABEL}
            </a>
          </Magnetic>
          <p className="text-center font-body text-xs tracking-wide text-[var(--encre)]/80">
            Disponible en alternance à partir de 2026
          </p>
        </div>
        <ul className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Langues">
          {languages.map((l) => (
            <li key={l.name} className="hud-tag">
              {l.name} · {l.level}
            </li>
          ))}
        </ul>
      </Reveal>
    </aside>
  );
}

function Parcours() {
  return (
    <section id="parcours" className="section-paper section-paper--alt relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="reveal--focus">
          <p className="sec-kicker">Scène 03 · Frise chronologique</p>
          <h2 className="sec-title">
            <SplitText by="words" text="Mon" accent="parcours" step={90} />
          </h2>
          <p className="sec-lead mt-5">
            Formations, expériences et engagements, du plus récent au plus ancien. Le CV complet est
            consultable et téléchargeable à côté.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-16">
          <Timeline />
          <CvCard />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<Category>("Tout");
  const filtered = useMemo(
    () => (filter === "Tout" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section
      id="projects"
      className="relative px-6 py-28 bg-[color-mix(in_oklab,var(--cream)_93%,var(--rose-vif))]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="reveal--focus">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="sec-kicker">Scène 04 · Créations</p>
              <h2 className="sec-title">
                <SplitText by="words" text="Mes" accent="créations" step={90} />
              </h2>
            </div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-[var(--encre)]/70">
              {String(filtered.length).padStart(2, "0")} projet{filtered.length > 1 ? "s" : ""}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className="chip"
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={filter}
          className="grid-switch mt-12 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard p={p} index={projects.indexOf(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("vH9gSi4D3ru6ad63Z");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send("service_mkurl73", "template_b9lcxkl", templateParams);
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact relative flex min-h-screen items-center overflow-hidden px-6 py-28"
    >
      <ScreenChrome scene="SC. 05 · Contact" noButton />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal className="reveal--focus">
            <p className="sec-kicker">Scène 05 · Contact</p>
            <h2 className="sec-title">
              <SplitText by="words" text="Prenons" accent="contact" step={90} />
            </h2>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-[var(--encre)]/85">
              Envie d'échanger autour d'une alternance ? Écrivez-moi.
            </p>
            <a
              href="mailto:lyna.rebahi@gmail.com"
              className="contact-mail mt-10"
              data-cursor="Écrire"
            >
              lyna.rebahi@gmail.com
            </a>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="https://www.linkedin.com/in/lyna-rebahi/"
                className="link-line"
                target="_blank"
                rel="noopener"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/lynae.quiet/"
                className="link-line"
                target="_blank"
                rel="noopener"
              >
                Instagram ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="about-card about-card--plain">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
              <div className="field-wrap">
                <input required name="name" placeholder="Votre nom" className="field" />
              </div>
              <div className="field-wrap">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  className="field"
                />
              </div>
              <div className="field-wrap">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  className="field"
                />
              </div>
              {error && <p className="text-[var(--rouge)]">{error}</p>}
              <Magnetic className="mt-4 flex">
                <button
                  type="submit"
                  disabled={loading}
                  className="quest-btn disabled:opacity-50"
                  data-cursor="Envoyer"
                >
                  {sent
                    ? "✦ Message envoyé"
                    : loading
                      ? "Envoi en cours..."
                      : "Envoyer le message →"}
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-[color-mix(in_oklab,var(--encre)_18%,transparent)] pt-8 text-xs tracking-[0.2em] uppercase text-[var(--encre)]/60">
          <span>Lyna Rebahi · Portfolio {new Date().getFullYear()}</span>
          <a href="#top" className="hover:text-[var(--rouge)] transition">
            Haut de page ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Band />
      <About />
      <Parcours />
      <Projects />
      <Contact />
    </main>
  );
}
