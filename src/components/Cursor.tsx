import { useEffect } from "react";

// Curseur personnalisé : point rouge + anneau qui suit avec inertie. L'anneau grossit sur les
// liens, devient une barre sur les champs texte et affiche le libellé `data-cursor` d'un élément.
// Actif uniquement avec un pointeur précis (souris/trackpad) et sans « réduire les animations ».
export function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    const label = document.createElement("span");
    dot.className = "cur-dot";
    ring.className = "cur-ring";
    label.className = "cur-label";
    dot.setAttribute("aria-hidden", "true");
    ring.setAttribute("aria-hidden", "true");
    ring.appendChild(label);
    document.body.append(dot, ring);
    root.classList.add("has-cursor");

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let shown = false;

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        rx = x;
        ry = y;
        root.classList.add("cur-on");
      }
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      const el = t?.closest?.("[data-cursor], a, button, input, textarea, select, label, summary");
      if (!el) {
        ring.className = "cur-ring";
        label.textContent = "";
        return;
      }
      const custom = el.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (custom) {
        ring.className = "cur-ring is-label";
        label.textContent = custom;
      } else if (el.matches("input, textarea, select")) {
        ring.className = "cur-ring is-text";
        label.textContent = "";
      } else {
        ring.className = "cur-ring is-link";
        label.textContent = "";
      }
    };

    const onDown = () => root.classList.add("cur-down");
    const onUp = () => root.classList.remove("cur-down");
    const onLeave = () => root.classList.remove("cur-on");
    const onEnter = () => {
      if (shown) root.classList.add("cur-on");
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
      root.classList.remove("has-cursor", "cur-on", "cur-down");
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
