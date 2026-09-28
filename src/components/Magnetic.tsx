import { useRef, type PointerEvent, type ReactNode } from "react";

// Enveloppe « magnétique » : l'enfant glisse légèrement vers le pointeur (souris seulement),
// puis revient au repos. Force et rayon volontairement modestes.
export function Magnetic({
  children,
  strength = 0.35,
  max = 14,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    const cx = Math.max(-max, Math.min(max, dx));
    const cy = Math.max(-max, Math.min(max, dy));
    el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </span>
  );
}
