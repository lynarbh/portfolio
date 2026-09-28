import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { CaseStudy } from "@/components/CaseStudy";
import { Reveal } from "@/components/Reveal";
import { ToolChips } from "@/components/ToolChips";

const CINZEL = "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap";

export const Route = createFileRoute("/projects/$projectId")({
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    const fonts = caseStudies[params.projectId]?.fonts ?? [];
    return {
      meta: project ? [{ title: `${project.title} — Lyna Rebahi` }] : [],
      links: fonts.includes("cinzel") ? [{ rel: "stylesheet", href: CINZEL }] : [],
    };
  },
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
          <button onClick={() => navigate({ to: "/" })} className="quest-btn mt-6">
            Retour au portfolio
          </button>
        </div>
      </div>
    );
  }

  const data = caseStudies[project.id];
  if (data) return <CaseStudy project={project} data={data} />;

  // Repli générique pour un projet sans dossier d'étude de cas.
  return (
    <main className="min-h-screen bg-[var(--cream)] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <button
            onClick={() => navigate({ to: "/" })}
            className="link-line mb-10"
            data-cursor="Retour"
          >
            &larr; Retour aux projets
          </button>
        </Reveal>
        <Reveal delay={100}>
          <span className="hud-tag">{project.category}</span>
          <h1 className="mt-4 font-cine text-5xl sm:text-7xl text-[var(--encre)] leading-[0.95] tracking-tight">
            {project.title}
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rose)]">
            {project.role}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="about-card about-card--plain mt-12">
            <p className="about-text">{project.description}</p>
            <ToolChips names={project.tools} className="mt-6" />
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="quest-btn mt-8"
                data-cursor="Ouvrir"
              >
                Voir le site en ligne ↗
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
