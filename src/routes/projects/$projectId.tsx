import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { Petals } from "@/components/Petals";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectPage,
});

function ProjectPage() {
  const { projectId } = Route.useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-[var(--cream)]">
        <div className="text-center">
          <p className="font-display text-3xl text-[var(--plum)]">Projet introuvable.</p>
          <button
            onClick={() => navigate({ to: "/" })}
            className="quest-btn mt-6"
          >
            Retour au portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Petals />
      <main className="min-h-screen bg-[var(--cream)] px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <Reveal>
          <button
            onClick={() => navigate({ to: "/" })}
            className="mb-10 text-sm uppercase tracking-widest text-[var(--plum)]/60 hover:text-[var(--sakura)] transition"
          >
            &larr; Retour aux projets
          </button>
        </Reveal>

        <Reveal delay={100}>
          <span className="hud-tag">{project.category}</span>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl text-[var(--plum)] leading-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-[var(--muted-foreground)]">
            {project.role}
          </p>
        </Reveal>

        {project.video && (
          <Reveal delay={200}>
            <div className="mt-10 overflow-hidden rounded-md shadow-[var(--shadow-quest)]">
              {project.video.includes("youtube.com/embed") ? (
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={project.video}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                </div>
              ) : (
                <video
                  className="w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              )}
            </div>
          </Reveal>
        )}

        {project.id === "business-card-mockup" && (
          <Reveal delay={250}>
            <div className="mt-12 space-y-16">
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Mock-ups</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/src/assets/mockupcarterose.png"
                    alt="Mock-up carte de visite — variante rose"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/src/assets/mockupcartechocolat.png"
                    alt="Mock-up carte de visite — variante chocolat"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Deux mises en scène d'une même carte de visite, déclinées dans deux ambiances colorimétriques. L'idée était de montrer qu'une identité peut conserver toute sa cohérence tout en s'adaptant à des atmosphères très différentes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Design des cartes</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/src/assets/designcarterose.png"
                    alt="Design de la carte — variante rose"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/src/assets/designcartechocolat.png"
                    alt="Design de la carte — variante chocolat"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Le recto et le verso de la carte, pensés avec une typographie épurée et une hiérarchie soignée, déclinés dans les deux gammes de couleurs.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Logo & déclinaisons</h2>
                <div className="mt-6">
                  <img
                    src="/src/assets/logoen8variantes.png"
                    alt="Logo personnel L et R — déclinaisons de couleurs"
                    className="w-full rounded-md object-contain shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Un logo construit autour de mes initiales L et R, décliné en trois variantes roses et trois variantes chocolat. J'ai voulu proposer deux gammes chromatiques capables de s'adapter à n'importe quelle atmosphère — l'une douce et romantique, l'autre plus chaleureuse et terreuse.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Palette de couleurs</h2>
                <div className="mt-6 flex justify-center">
                  <img
                    src="/src/assets/palette%20de%20couleurs.png"
                    alt="Palette de couleurs de l'identité personnelle"
                    className="w-full max-w-md rounded-md object-contain shadow"
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { hex: "#FDFBFC", name: "Blanc nacré", note: "La base lumineuse de la variante framboise : un blanc à peine teinté de rose, qui apporte de la respiration et met les autres couleurs en valeur sans jamais les écraser." },
                    { hex: "#F5CAE1", name: "Rose poudré", note: "Fait partie de la variante framboise. Un rose très clair, doux et enveloppant. Il adoucit l'ensemble et donne immédiatement le ton — féminin, délicat, romantique." },
                    { hex: "#EFC6C5", name: "Rose nude", note: "Composant principal de mon identité visuelle. Un rose plus chaud, à la frontière du beige rosé. Associé au chocolat doux, il crée une ambiance chaleureuse et sophistiquée." },
                    { hex: "#D4348A", name: "Fuchsia affirmé", note: "Couleur d'accent présente dans la variante framboise. Plus saturée et plus vive, elle apporte du caractère et de la modernité — c'est elle qui empêche la palette de basculer dans le trop sage." },
                    { hex: "#A78886", name: "Chocolat doux", note: "Composant principal de mon identité visuelle. Un brun chaud, légèrement rosé, qui sert d'ancrage à la palette. Associé au rose nude, il crée mon identité de base — une ambiance terreuse et chaleureuse." },
                  ].map((c) => (
                    <div key={c.hex} className="flex gap-4 items-start">
                      <span
                        className="block h-14 w-14 shrink-0 rounded-md border border-[var(--plum)]/10 shadow"
                        style={{ backgroundColor: c.hex }}
                        aria-hidden
                      />
                      <div>
                        <p className="font-display text-lg text-[var(--plum)]">
                          {c.name} <span className="font-body text-xs uppercase tracking-widest text-[var(--plum)]/50">{c.hex}</span>
                        </p>
                        <p className="mt-1 font-body text-sm leading-relaxed text-[var(--plum)]/80">{c.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Reveal>
        )}

        {project.id === "sae-1" && (
          <Reveal delay={250}>
            <div className="mt-12 space-y-16">
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Logos</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/src/assets/logoprincipal.png"
                    alt="Logo principal SAE 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/src/assets/logosecondaire.png"
                    alt="Logo secondaire SAE 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Les deux variantes du logo créées pour le projet SAE 1 montrent l'identité principale et son déclinaison secondaire, pour une utilisation flexible sur les supports imprimés et numériques.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Flyers</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/src/assets/flyer1.png"
                    alt="Flyer SAE 1 - visuel 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/src/assets/flyer2.png"
                    alt="Flyer SAE 1 - visuel 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Ces deux flyers présentent la communication visuelle du projet avec une hiérarchie claire et une identité colorielle cohérente pour attirer l'attention du public.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Maquette et extrait vidéo</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <img
                    src="/src/assets/maquette1.png"
                    alt="Maquette SAE 1 page 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/src/assets/maquette3.png"
                    alt="Maquette SAE 1 page 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/src/assets/maquette4.png"
                    alt="Maquette SAE 1 page 3"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Maquette du site réalisée pour l'expérience utilisateur, avec une mise en page claire et une navigation adaptée à la cible du projet.
                </p>
                <p className="mt-4 font-body leading-relaxed text-[var(--sakura)]/90">
                  Voir le site en ligne : <a href="https://foodfighters.fr" target="_blank" rel="noreferrer" className="font-semibold text-[var(--sakura)] hover:text-[var(--plum)]">https://foodfighters.fr</a>
                </p>

                <div className="mt-8">
                  <div className="overflow-hidden rounded-md bg-black shadow">
                    <video
                      className="w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source src="/videos/extraitpubSAE1.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                    Extrait de la publicité du projet, illustrant le ton visuel et le message de la campagne SAE 1. La vidéo complète est disponible sur le <a href="https://foodfighters.fr" target="_blank" rel="noreferrer" className="font-semibold text-[var(--sakura)] hover:text-[var(--plum)]">site en ligne</a>.
                  </p>
                </div>
              </section>
            </div>
          </Reveal>
        )}

        <Reveal delay={300}>
          <div className="ornament-card mt-12 bg-[var(--card)] p-8 sm:p-10">
            <h2 className="font-display text-2xl text-[var(--plum)]">Le projet</h2>
            <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
              {project.description}
            </p>
            <h2 className="mt-8 font-display text-2xl text-[var(--plum)]">Outils</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="hud-tag">{tool}</span>
              ))}
            </div>

            {/* --- BOUTON SITE EN LIGNE --- */}
            {project.url && (
              <div className="mt-8 pt-8 border-t border-[var(--plum)]/10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--plum)] text-[var(--cream)] font-body text-sm uppercase tracking-widest rounded-full hover:bg-[var(--sakura)] hover:text-[var(--plum)] transition-all duration-300"
                >
                  Voir le site en ligne
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            )}

          </div>
        </Reveal>

        {project.media && project.media.length > 0 && (
          <Reveal delay={400}>
            <div className={`mt-12 grid gap-4 ${project.media.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {project.media.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} — vue ${i + 1}`}
                  className="w-full rounded-md object-cover shadow"
                />
              ))}
            </div>
          </Reveal>
        )}

      </div>
    </main>
    </>
  );
}
