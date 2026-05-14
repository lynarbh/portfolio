import { createFileRoute, Link } from "@tanstack/react-router"; // Ajoute Link ici
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { Petals } from "@/components/Petals";
import { Reveal } from "@/components/Reveal";
import { CornerOrnament } from "@/components/CornerOrnament";
import { ProjectModal } from "@/components/ProjectModal";
import portrait from "@/assets/portrait.jpg";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_VIDEO = "/videos/hero.mp4";
const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600&q=85";

const CATEGORIES = ["Tout", "Vidéo", "Photo", "Branding", "Illustration", "Projet universitaire"] as const;
type Category = (typeof CATEGORIES)[number];

const SKILL_TAGS = [
  "Illustrator", "Photoshop", "Premiere Pro",
  "Figma", "Canva", "HTML / CSS",
];

const PORTRAIT_EFFECT_SETTINGS = {
  particles: {
    length: 700,
    duration: 2,
    velocity: 120,
    effect: -0.9,
    size: 40,
  },
};

class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  length(): number;
  length(length: number): this;
  length(length?: number): number | this {
    if (typeof length === "undefined") {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    this.normalize();
    this.x *= length;
    this.y *= length;
    return this;
  }

  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y);
    if (length !== 0) {
      this.x /= length;
      this.y /= length;
    }
    return this;
  }
}

class Particle {
  position = new Point();
  velocity = new Point();
  acceleration = new Point();
  age = 0;

  initialize(x: number, y: number, dx: number, dy: number) {
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = dx;
    this.velocity.y = dy;
    this.acceleration.x = dx * PORTRAIT_EFFECT_SETTINGS.particles.effect;
    this.acceleration.y = dy * PORTRAIT_EFFECT_SETTINGS.particles.effect;
    this.age = 0;
  }

  update(deltaTime: number) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;
    this.age += deltaTime;
  }

  draw(context: CanvasRenderingContext2D, image: HTMLImageElement) {
    function ease(t: number) {
      return (--t) * t * t + 1;
    }
    const size = image.width * ease(this.age / PORTRAIT_EFFECT_SETTINGS.particles.duration);
    context.globalAlpha = 1 - this.age / PORTRAIT_EFFECT_SETTINGS.particles.duration;
    context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
  }
}

class ParticlePool {
  particles: Particle[];
  firstActive = 0;
  firstFree = 0;
  duration = PORTRAIT_EFFECT_SETTINGS.particles.duration;

  constructor(length: number) {
    this.particles = Array.from({ length }, () => new Particle());
  }

  add(x: number, y: number, dx: number, dy: number) {
    this.particles[this.firstFree].initialize(x, y, dx, dy);
    this.firstFree++;
    if (this.firstFree === this.particles.length) this.firstFree = 0;
    if (this.firstActive === this.firstFree) this.firstActive++;
    if (this.firstActive === this.particles.length) this.firstActive = 0;
  }

  update(deltaTime: number) {
    if (this.firstActive < this.firstFree) {
      for (let i = this.firstActive; i < this.firstFree; i++) {
        this.particles[i].update(deltaTime);
      }
    }
    if (this.firstFree < this.firstActive) {
      for (let i = this.firstActive; i < this.particles.length; i++) {
        this.particles[i].update(deltaTime);
      }
      for (let i = 0; i < this.firstFree; i++) {
        this.particles[i].update(deltaTime);
      }
    }
    while (this.particles[this.firstActive].age >= this.duration && this.firstActive !== this.firstFree) {
      this.firstActive++;
      if (this.firstActive === this.particles.length) this.firstActive = 0;
    }
  }

  draw(context: CanvasRenderingContext2D, image: HTMLImageElement) {
    if (this.firstActive < this.firstFree) {
      for (let i = this.firstActive; i < this.firstFree; i++) {
        this.particles[i].draw(context, image);
      }
    }
    if (this.firstFree < this.firstActive) {
      for (let i = this.firstActive; i < this.particles.length; i++) {
        this.particles[i].draw(context, image);
      }
      for (let i = 0; i < this.firstFree; i++) {
        this.particles[i].draw(context, image);
      }
    }
  }
}

function pointOnHeart(t: number) {
  return new Point(
    160 * Math.pow(Math.sin(t), 3),
    130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
  );
}

function createParticleImage(size: number) {
  const imageCanvas = document.createElement("canvas");
  const context = imageCanvas.getContext("2d");
  if (!context) throw new Error("Canvas context unavailable");
  imageCanvas.width = size;
  imageCanvas.height = size;

  const to = (t: number) => {
    const point = pointOnHeart(t);
    point.x = size / 2 + (point.x * size) / 350;
    point.y = size / 2 - (point.y * size) / 350;
    return point;
  };

  context.beginPath();
  let t = -Math.PI;
  let point = to(t);
  context.moveTo(point.x, point.y);
  while (t < Math.PI) {
    t += 0.01;
    point = to(t);
    context.lineTo(point.x, point.y);
  }
  context.closePath();
  context.fillStyle = "#ea80b0";
  context.fill();

  const image = new Image();
  image.src = imageCanvas.toDataURL();
  return image;
}

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
        <a href="#top" className="font-display text-xl text-[var(--cream)] tracking-[0.2em]">
           PORTFOLIO
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest text-[var(--cream)]/90 uppercase">
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
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          poster={HERO_FALLBACK}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(61,31,58,0.55) 0%, rgba(61,31,58,0.65) 60%, rgba(61,31,58,0.85) 100%)",
          }}
        />
      </div>

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
          <div className="portrait-wrapper relative mx-auto h-96 w-72 sm:h-[28rem] sm:w-[22rem] rounded-[1.5rem] overflow-hidden">
            <div
              className="absolute inset-0 float"
              style={{
                background:
                  "conic-gradient(from 90deg, var(--sakura), var(--mint-sage), var(--gold), var(--sakura))",
                filter: "blur(24px)",
                opacity: 0.55,
              }}
            />
            <img
              src={portrait}
              alt="Portrait de Lyna Rebahi"
              width={384}
              height={448}
              loading="lazy"
              className="relative h-full w-full rounded-[1.5rem] object-cover border-4 border-[var(--cream)] shadow-[var(--shadow-quest)]"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="ornament-card relative bg-[var(--card)] p-8 sm:p-10">
            <CornerOrnament />
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Qui <em className="text-[var(--sakura)]">suis-je ?</em>
            </h2>
            <p className="mt-5 font-body leading-relaxed text-[var(--plum)]/85">
              Une cinéphile accro à l'audiovisuel qui pense résoudre le monde avec des vidéos.
              J'ai 20 ans, je crée des contenus visuels (vidéos, affiches, identités) et je
              passe mes journées à rêver de courts-métrages et mes soirées à faire du bénévolat.
              Pas mal, non ?
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILL_TAGS.map((t) => (
                <span key={t} className="hud-tag">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
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
        <img
          src={p.thumbnail}
          alt={p.title}
          loading="lazy"
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
              En cours<br />de dev
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
    [filter]
  );

  return (
    <section id="projects" className="relative py-28 px-6 bg-[color-mix(in_oklab,var(--cream)_95%,var(--sakura))]">
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

function Skills() {
  return null;
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 grid gap-5"
          >
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
          <a href="https://www.linkedin.com/in/lyna-rebahi/" className="hover:text-[var(--sakura)] transition">LinkedIn</a>
          <span className="text-[var(--gold)]">·</span>
          <a href="https://www.instagram.com/lynae.quiet/" className="hover:text-[var(--sakura)] transition">Instagram</a>
        </div>
      </div>

      <footer className="mt-20 text-center text-xs tracking-widest text-[var(--cream)]/50">
        Lyna Rebahi Portfolio {new Date().getFullYear()} 
      </footer>
    </section>
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    document.documentElement.classList.add("sakura-cursor");
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => {
      document.documentElement.classList.remove("sakura-cursor");
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />;
}

function Index() {
  return (
    <main className="relative">
      <Petals />
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
