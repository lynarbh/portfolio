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
                    src="/assets/mockupcarterose.png"
                    alt="Mock-up carte de visite — variante rose"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/mockupcartechocolat.png"
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
                    src="/assets/designcarterose.png"
                    alt="Design de la carte — variante rose"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/designcartechocolat.png"
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
                    src="/assets/logoen8variantes.png"
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
                    src="/assets/palette%20de%20couleurs.png"
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

        {project.id === "clip" && (
          <Reveal delay={250}>
            <div className="mt-12 space-y-16">
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 1 — Présentation du projet</h2>
                <div className="mt-6">
                  <img
                    src="/assets/clip1.png"
                    alt="Blue - Présentation du projet"
                    className="w-full rounded-md object-cover shadow mb-6"
                  />
                  <p className="font-body leading-relaxed text-[var(--plum)]/80">
                    Blue est un dossier de production audiovisuelle réalisé dans le cadre du BUT MMI. Il s'articule autour de la chanson Blue de Yung Kai, titre indie-pop sorti en août 2024, extrait de son premier album Stay with the Ocean, I'll Find You. La chanson dure 3 minutes 41 et se construit autour d'une structure classique : introduction, deux couplets, deux refrains, une transition instrumentale et un outro. Entièrement écrit et produit par Yung Kai lui-même, ce morceau est né d'une inspiration directe pour la série télévisée chinoise When I Fly Towards You.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 2 — Analyse musicale et lecture du clip original</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/assets/clip2.png"
                    alt="Blue - Analyse musicale part 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/clip3.png"
                    alt="Blue - Analyse musicale part 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/clip4.png"
                    alt="Blue - Analyse musicale part 3"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/clip5.png"
                    alt="Blue - Analyse musicale part 4"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Le travail s'ouvre sur une étude musicale approfondie du clip officiel de Blue, séquence par séquence. L'introduction installe une ambiance de rêve éveillé grâce à des plans de nature surexposés (arbres, soleil, lac). Le premier couplet met en scène une femme observée à distance, idéalisée dès les premières paroles. Le refrain bascule vers l'imaginaire : les deux personnages courent, rient, se photographient au Polaroid — mais tout ce qu'on voit est une projection intérieure du narrateur, pas nécessairement la réalité. Le deuxième couplet rompt cette harmonie : l'homme est désormais seul, habillé différemment, et la femme semble ne plus le voir.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 3 — Le plan final et l'ambiguïté narrative</h2>
                <div className="mt-6">
                  <img
                    src="/assets/clip6.png"
                    alt="Blue - Plan final"
                    className="w-full rounded-md object-cover shadow mb-6"
                  />
                  <p className="font-body leading-relaxed text-[var(--plum)]/80">
                    La fin du clip est particulièrement travaillée dans l'analyse. À partir de 3h15, la caméra zoome lentement sur le visage de l'homme avant de dézoomer à mesure que la mélodie ralentit. Il est seul. La musique s'efface, remplacée par le bruit des vagues. L'analyse pose trois hypothèses ouvertes : la femme n'a peut-être jamais existé que dans l'imaginaire du narrateur, ou la relation appartient au passé, ou encore c'est un souvenir qui s'efface au moment même où on le revit. C'est cette ambiguïté qui constitue le point de départ de la note d'intention.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 4 — Note d'intention : la mémoire comme reconstruction émotionnelle</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/assets/clip7.png"
                    alt="Blue - Note d'intention part 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/clip8.png"
                    alt="Blue - Note d'intention part 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Pour la création du clip personnel, une transposition a été choisie : plutôt que de représenter une histoire romantique, l'idée centrale devient "la mémoire comme reconstruction émotionnelle du passé". Le clip raconte les souvenirs d'une femme âgée qui se remémore sa jeunesse et ses amitiés à travers une photographie. Ce qui se voit dans le clip n'est pas la réalité objective mais une réalité idéalisée — les moments entre amies deviennent plus beaux, plus doux, presque irréels, à l'image de la chanson elle-même. Le présent est traité de manière neutre et figée, tandis que le passé est lumineux, coloré, vivant.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 5 — Dispositifs techniques et mise en scène</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/assets/clip9.png"
                    alt="Blue - Dispositifs techniques part 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/clip10.png"
                    alt="Blue - Dispositifs techniques part 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Plusieurs effets techniques structurent la narration visuelle. Le passage entre présent et passé est déclenché par une photographie qui prend vie — l'image figée se transforme en vidéo, symbole que les souvenirs continuent de vivre. Un effet de rembobinage (rewind) ponctue le montage pour matérialiser l'idée de replonger dans ses souvenirs. L'écran se divise en split screen à quatre colonnes, chaque personnage associé à une couleur dominante propre. Les quatre femmes se retrouvent finalement dans les rues de Paris où leurs chemins convergent vers un même carrefour, symbolisant leur réunion.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Bloc 6 — Esthétique visuelle et références</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <img
                    src="/assets/clip11.png"
                    alt="Blue - Esthétique visuelle part 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/clip12.png"
                    alt="Blue - Esthétique visuelle part 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  L'esthétique du clip s'inspire d'une ambiance caméra DV années 2000 : luminosité très saturée, légèrement floue, grain numérique vintage. Des plans de nature récurrents (fleurs, feuillage, lumière dorée) servent d'écrin aux souvenirs. La référence formelle principale est Mean Girls pour l'effet split screen et la romantisation de l'amitié féminine. Le moodboard construit autour du projet illustre ce contraste entre le présent sobre et le passé chargé d'émotions — photos éparpillées, selfies miroir au digicam, sorties entre amies, lumière solaire chaude.
                </p>
              </section>
            </div>
          </Reveal>
        )}

        {project.id === "sae-2" && (
          <Reveal delay={250}>
            <div className="mt-12 space-y-12">
              {/* INTRO: LA BIÈRE & L'HISTOIRE */}
              <section>
                <p className="font-body leading-relaxed text-[var(--plum)]/80">
                  SkøllRub est une blonde de style ALE (fermentation haute, d'inspiration anglaise), conçue pour être équilibrée et accessible. Elle repose sur un malt Pilsner peu torréfié, qui lui donne une robe blonde claire avec de légers reflets rosés. Le profil aromatique est construit autour du houblon Citra et de framboises et cranberries séchées pour renforcer les arômes de fruits rouges.
                </p>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  SkøllRub, c'est bien plus qu'une bière. C'est une histoire inspirée de la mythologie nordique. Les deux loups magiques Sköll et Hati courent éternellement après le soleil et la lune. Avec SkøllRub, ils poursuivent nos fruits : la cranberry et la framboise. Nous avons créé plusieurs variantes de la bière, chacune basée sur une légende différente, cultivant une identité de « bon vivant » et profondément proche de sa communauté, que nous appelons « la meute ».
                </p>
              </section>

              {/* LOGO */}
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Logo</h2>
                <div className="mt-4 flex justify-center">
                  <img
                    src="/assets/logo.png"
                    alt="SkøllRub - Logo"
                    className="max-w-xs rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80 text-center">
                  Le logo SkøllRub représente les deux loups magiques de la mythologie nordique, avec la lune dont la couleur change selon chaque variante.
                </p>
              </section>

              {/* CHARTE GRAPHIQUE */}
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Charte Graphique</h2>
                <div className="mt-6">
                  <img
                    src="/assets/chartegraphique_SkollRub.png"
                    alt="SkøllRub - Charte Graphique"
                    className="w-full rounded-md object-cover shadow"
                  />
                </div>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  La charte graphique définit les principes visuels de la marque : typographies, palettes de couleurs, utilisation du logo et des éléments graphiques pour garantir une cohérence à travers tous les supports.
                </p>
              </section>

              {/* LES 4 VARIANTES */}
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Les 4 Variantes</h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {/* ORIGINAL */}
                  <div>
                    <h3 className="font-display text-lg text-[var(--sakura)]">SkøllRub Original</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[var(--plum)]/60">Cranberry & Framboise</p>
                    <div className="mt-4">
                      <img
                        src="/assets/Etiquettes_SkøllRub_Original-1.png"
                        alt="SkøllRub Original - Étiquette"
                        className="w-full rounded-md object-cover shadow"
                      />
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-[var(--plum)]/80">
                      C'est la légende mère. Sköll et Hati poursuivent la cranberry rougeâtre et la framboise. La couleur de la lune est rose/magenta, reflétant l'équilibre entre les fruits rouges et la magie du mythe originel.
                    </p>
                  </div>

                  {/* ANGERBODA */}
                  <div>
                    <h3 className="font-display text-lg text-[var(--sakura)]">Angerboda</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[var(--plum)]/60">Mûre & Myrtille</p>
                    <div className="mt-4">
                      <img
                        src="/assets/Etiquettes_SkøllRub_Angerboda-1.png"
                        alt="Angerboda - Étiquette"
                        className="w-full rounded-md object-cover shadow"
                      />
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-[var(--plum)]/80">
                      La géante des glaces : une bière plus sombre et intense. Les notes de mûre et myrtille apportent une amertume prononcée. La lune prend une teinte violette-noire, rappelant les nuits d'hiver nordiques.
                    </p>
                  </div>

                  {/* CERISICIDE */}
                  <div>
                    <h3 className="font-display text-lg text-[var(--sakura)]">Cerisicide</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[var(--plum)]/60">Cerise & Figue</p>
                    <div className="mt-4">
                      <img
                        src="/assets/Etiquettes_SkøllRub_Cerisicide-1.png"
                        alt="Cerisicide - Étiquette"
                        className="w-full rounded-md object-cover shadow"
                      />
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-[var(--plum)]/80">
                      Le dieu de la guerre : la plus intense de la gamme. Les cerises apportent une acidité mordante, les figues une richesse sombre. La lune prend une teinte rougeâtre-sang.
                    </p>
                  </div>

                  {/* FREYA */}
                  <div>
                    <h3 className="font-display text-lg text-[var(--sakura)]">Freya</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[var(--plum)]/60">Raisin & Kumquat (0% alcool)</p>
                    <div className="mt-4">
                      <img
                        src="/assets/Etiquettes_SkøllRub_Freya-1.png"
                        alt="Freya - Étiquette"
                        className="w-full rounded-md object-cover shadow"
                      />
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-[var(--plum)]/80">
                      La déesse de l'amour : accessible et inclusive. Le raisin apporte des notes classiques, le kumquat une originalité légère. La lune est dorée et lumineuse.
                    </p>
                  </div>
                </div>
              </section>

              {/* MOODBOARD */}
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Moodboard</h2>
                <div className="mt-6 flex justify-center">
                  <img
                    src="/assets/moodboard_lyna.png"
                    alt="SkøllRub - Moodboard"
                    className="max-w-lg rounded-md object-cover shadow"
                  />
                </div>
              </section>

              {/* COMMUNICATION INSTAGRAM */}
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Communication Instagram</h2>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Chaque variante dispose d'une stratégie de communication visuelle sur Instagram avec deux versions pour chaque bière.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <img src="/assets/original1.png" alt="Original - Post 1" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/original2.png" alt="Original - Post 2" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/angerboda1.png" alt="Angerboda - Post 1" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/angerboda2.png" alt="Angerboda - Post 2" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/cerisicide1.png" alt="Cerisicide - Post 1" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/cerisicide2.png" alt="Cerisicide - Post 2" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/freya1.png" alt="Freya - Post 1" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/freya2.png" alt="Freya - Post 2" className="w-full rounded-md object-cover shadow" />
                </div>
              </section>

              {/* LE SITE WEB */}
              <section>
                <h2 className="font-display text-2xl text-[var(--plum)]">Le Site Web</h2>
                <p className="mt-4 font-body leading-relaxed text-[var(--plum)]/80">
                  Découvrez la présence en ligne de SkøllRub, où l'univers mythologique se déploie à travers une interface immersive et captivante.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <img src="/assets/site1.png" alt="Site Web - Vue 1" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/site2.png" alt="Site Web - Vue 2" className="w-full rounded-md object-cover shadow" />
                  <img src="/assets/site3.png" alt="Site Web - Vue 3" className="w-full rounded-md object-cover shadow" />
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--plum)]/10">
                  <a
                    href="https://skollrub.but1.mmi-iutsf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--plum)] text-[var(--cream)] font-body text-sm uppercase tracking-widest rounded-full hover:bg-[var(--sakura)] hover:text-[var(--plum)] transition-all duration-300"
                  >
                    Visiter le site
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
                    src="/assets/logoprincipal.png"
                    alt="Logo principal SAE 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/logosecondaire.png"
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
                    src="/assets/flyer1.png"
                    alt="Flyer SAE 1 - visuel 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/flyer2.png"
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
                    src="/assets/maquette1.png"
                    alt="Maquette SAE 1 page 1"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/maquette3.png"
                    alt="Maquette SAE 1 page 2"
                    className="w-full rounded-md object-cover shadow"
                  />
                  <img
                    src="/assets/maquette4.png"
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
