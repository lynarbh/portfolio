import { useEffect } from "react";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10 backdrop-blur-md"
      style={{ background: "color-mix(in oklab, var(--plum) 70%, transparent)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-in ornament-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[var(--cream)] p-6 sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="group absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-[color-mix(in_oklab,var(--plum)_25%,transparent)] bg-[var(--cream)] text-[var(--plum)] transition hover:scale-110 hover:bg-[var(--sakura)]"
        >
          <span className="text-xl leading-none transition group-hover:rotate-90">✕</span>
        </button>

        <span className="hud-tag mb-4">{project.category}</span>
        <h3 className="font-display text-3xl sm:text-5xl text-[var(--plum)] leading-tight">
          {project.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
          <span>Rôle — {project.role}</span>
        </div>

        <div className="mt-6 overflow-hidden rounded-md border border-[var(--border)]">
          {project.video ? (
            <video
              src={project.video}
              controls
              className="aspect-video w-full bg-black object-cover"
            />
          ) : (
            <img
              src={project.media?.[0] ?? project.thumbnail}
              alt={project.title}
              className="aspect-video w-full object-cover"
            />
          )}
        </div>

        <p className="mt-6 font-body text-base leading-relaxed text-[var(--plum)]/85">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span key={t} className="hud-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
