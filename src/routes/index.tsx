import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Picture } from "@/components/Picture";
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

const SKILL_TAGS = ["Illustrator", "Photoshop", "Premiere Pro", "Figma", "Canva", "HTML / CSS"];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Créations" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl text-[var(--cream)] tracking-[0.2em]"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          PORTFOLIO
        </a>
        <nav
          className="hidden md:flex items-center gap-8 text-sm tracking-widest text-[var(--cream)]/90 uppercase"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--sakura)] transition">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden text-[var(--cream)] text-2xl"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[color-mix(in_oklab,var(--plum)_92%,transparent)] backdrop-blur px-6 pb-6 flex flex-col gap-4 text-[var(--cream)] uppercase tracking-widest text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"playing" | "paused">("paused");
  const [failed, setFailed] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onPlay = () => setState("playing");
    const onPause = () => setState("paused");
    const onError = () => setFailed(true);
    const onVisibility = () => {
      if (document.hidden) v.pause();
      else if (!userPaused.current && !reduce) v.play().catch(() => {});
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("error", onError);
    document.addEventListener("visibilitychange", onVisibility);
    v.muted = true;
    if (!reduce) v.play().catch(() => {});
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("error", onError);
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
    <section id="top" className="relative h-screen w-full overflow-hidden">
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
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(61,31,58,0.55) 0%, rgba(61,31,58,0.65) 60%, rgba(61,31,58,0.85) 100%)",
          }}
        />
      </div>

      <button
        type="button"
        aria-pressed={state === "paused"}
        hidden={failed}
        onClick={toggle}
        className="fixed z-30 flex h-11 w-11 items-center justify-center rounded-[2px] border bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:right-[calc(1.5rem+env(safe-area-inset-right))] border-[color-mix(in_oklab,var(--gold)_70%,transparent)] bg-[rgba(61,31,58,0.85)] backdrop-blur-[6px] text-[var(--cream)] hover:bg-[color-mix(in_oklab,var(--sakura)_35%,rgb(61_31_58))] transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sakura)]"
      >
        <span className="sr-only">Mettre en pause la vidéo</span>
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d={state === "playing" ? "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" : "M8 5v14l11-7z"} />
        </svg>
      </button>

      <div className="relative z-10 grain h-full flex flex-col items-center justify-center px-6 text-center text-[var(--cream)]">
        <Reveal delay={150}>
          <h1 className="mt-6 font-display text-6xl sm:text-8xl md:text-9xl leading-[0.95]">
            Lyna <em className="text-[var(--sakura)] not-italic">Rebahi</em>
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-5 max-w-xl font-display italic text-xl sm:text-2xl text-[var(--cream)]/85">
            Designer Multimédia & Créatrice de Contenu
          </p>
        </Reveal>
        <Reveal delay={420}>
          <a href="#projects" className="quest-btn mt-10">
            Voir mes projets
          </a>
        </Reveal>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] uppercase text-[var(--cream)]/70">
          ↓ Scroll
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,22rem)_1fr]">
        <Reveal>
          <div className="portrait-wrapper mx-auto">
            {/* Circular portrait */}
            <div className="portrait-image">
              <Picture
                id="home/portrait"
                alt="Portrait de Lyna Rebahi"
                sizes="(min-width: 640px) 350px, 280px"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="ornament-card relative bg-[var(--card)] p-8 sm:p-10">
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Qui <em className="text-[var(--sakura)]">suis-je ?</em>
            </h2>
            <p className="mt-5 font-body leading-relaxed text-[var(--plum)]/85">
              Une cinéphile accro à l'audiovisuel qui pense résoudre le monde avec des vidéos. J'ai
              20 ans, je crée des contenus visuels (vidéos, affiches, identités) et je passe mes
              journées à rêver de courts-métrages et mes soirées à faire du bénévolat. Pas mal, non
              ?
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILL_TAGS.map((t) => (
                <span key={t} className="hud-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="mx-auto max-w-4xl mt-16">
          <div className="group relative overflow-hidden rounded-md shadow-[var(--shadow-quest)] bg-black">
            <video
              id="cv-video"
              playsInline
              preload="metadata"
              className="w-full object-cover"
              controls
              controlsList="nodownload"
            >
              <source src={videos.cv.src} type="video/mp4" />
            </video>

            <button
              id="play-btn"
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300 group-hover:bg-black/25"
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
              <svg
                className="w-20 h-20 text-[var(--sakura)] drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: p.id }}
      className={`quest-card group block w-full text-left ${p.inProgress ? "pointer-events-none opacity-75 cursor-not-allowed" : ""}`}
      aria-label={`Voir le projet ${p.title}`}
    >
      <div className="relative aspect-[4/5] overflow-visible">
        <Picture
          id={p.thumbnail}
          alt={p.title}
          sizes="(min-width: 1280px) 395px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, calc(100vw - 48px)"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="hud-tag">{p.category}</span>
        </div>
        {p.inProgress && (
          <div
            className="pointer-events-none absolute -top-2 -right-2 w-24 h-24 bg-[#ffd966] rounded-sm shadow-lg flex items-center justify-center transition-transform group-hover:scale-110"
            style={{
              transform: "rotate(-12deg)",
              fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
            }}
          >
            <div className="text-center text-[#d4a574] font-bold text-sm leading-tight">
              En cours
              <br />
              de dev
            </div>
          </div>
        )}
        <div className="overlay">
          <p className="text-sm leading-snug text-[var(--cream)]/90">{p.shortDescription}</p>
          <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sakura)]">
            Voir le projet &rarr;
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="font-display text-xl text-[var(--plum)]">{p.title}</h3>
        <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
          0{projects.indexOf(p) + 1}
        </span>
      </div>
    </Link>
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
      className="relative py-28 px-6 bg-[color-mix(in_oklab,var(--cream)_95%,var(--sakura))]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="chapter-title mt-4 text-4xl sm:text-6xl"> Mes Créations </h2>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-16 bg-[var(--gold)]" />
              <span className="text-[var(--gold)]">❀</span>
              <span className="h-px w-16 bg-[var(--gold)]" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`hud-tag transition ${
                  filter === c
                    ? "!bg-[var(--plum)] !text-[var(--cream)] !border-[var(--plum)]"
                    : "hover:!bg-[var(--sakura)]/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard p={p} />
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
      className="relative py-28 px-6 bg-[color-mix(in_oklab,var(--plum)_92%,black)] text-[var(--cream)]"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="chapter-title mt-4 text-4xl sm:text-6xl text-[var(--cream)]">
              Prenons contact
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-16 bg-[var(--gold)]" />
              <span className="text-[var(--gold)]">❀</span>
              <span className="h-px w-16 bg-[var(--gold)]" />
            </div>
            <p className="mt-4 font-body text-[var(--cream)]/80">
              Envie d'échanger autour d'une alternance ? Écrivez-moi.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 grid gap-5">
            <input
              required
              name="name"
              placeholder="Votre nom"
              className="bg-transparent border border-[color-mix(in_oklab,var(--cream)_25%,transparent)] rounded-sm px-4 py-3 outline-none focus:border-[var(--sakura)] transition"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Votre email"
              className="bg-transparent border border-[color-mix(in_oklab,var(--cream)_25%,transparent)] rounded-sm px-4 py-3 outline-none focus:border-[var(--sakura)] transition"
            />
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Votre message"
              className="bg-transparent border border-[color-mix(in_oklab,var(--cream)_25%,transparent)] rounded-sm px-4 py-3 outline-none focus:border-[var(--sakura)] transition resize-none"
            />
            {error && <p className="text-[var(--sakura)]">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="quest-btn justify-center disabled:opacity-50"
            >
              {sent ? "❀ Message envoyé" : loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm tracking-widest">
          <a href="mailto:lyna.rebahi@gmail.com" className="hover:text-[var(--sakura)] transition">
            lyna.rebahi@gmail.com
          </a>
          <span className="text-[var(--gold)]">·</span>
          <a
            href="https://www.linkedin.com/in/lyna-rebahi/"
            className="hover:text-[var(--sakura)] transition"
          >
            LinkedIn
          </a>
          <span className="text-[var(--gold)]">·</span>
          <a
            href="https://www.instagram.com/lynae.quiet/"
            className="hover:text-[var(--sakura)] transition"
          >
            Instagram
          </a>
        </div>
      </div>

      <footer className="mt-20 text-center text-xs tracking-widest text-[var(--cream)]/50">
        Lyna Rebahi Portfolio {new Date().getFullYear()}
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
