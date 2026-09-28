import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { timeline, TIMELINE_KIND_LABEL, type TimelineEntry } from "@/data/timeline";

const KIND_CLASS: Record<TimelineEntry["kind"], string> = {
  objectif: "tl-kind--objectif",
  formation: "tl-kind--formation",
  experience: "tl-kind--experience",
  engagement: "tl-kind--engagement",
};

export function Timeline() {
  const ref = useRef<HTMLOListElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className={`tl ${inView ? "in" : ""}`}
      aria-label="Parcours : formations, expériences et engagements"
    >
      <span className="tl-line" aria-hidden="true" />
      {timeline.map((e, i) => (
        <li key={e.id} className={`tl-item ${i % 2 === 0 ? "tl-item--l" : "tl-item--r"}`}>
          <span
            className={`tl-dot ${e.current ? "tl-dot--now" : ""}`}
            style={{ transitionDelay: `${i * 90 + 250}ms` }}
            aria-hidden="true"
          />
          <Reveal delay={i * 90}>
            <article className="tl-card">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`hud-tag ${KIND_CLASS[e.kind]}`}>
                  {TIMELINE_KIND_LABEL[e.kind]}
                </span>
                <span className="tl-period">{e.period}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--plum)]">
                {e.title}
              </h3>
              <p className="mt-1 font-body text-sm text-[var(--plum)]/80">
                {e.org}
                {e.place ? ` · ${e.place}` : ""}
              </p>
              <ul className="mt-3 space-y-1 font-body text-sm leading-relaxed text-[var(--plum)]/85">
                {e.details.map((d) => (
                  <li key={d} className="tl-detail">
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
