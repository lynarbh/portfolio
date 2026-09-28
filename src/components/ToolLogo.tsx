import { simpleIcons, type SimpleIconSlug } from "@/data/tool-icons";
import type { Tool } from "@/data/tools";

function Icon({ slug, title }: { slug: SimpleIconSlug; title?: string }) {
  const icon = simpleIcons[slug];
  return (
    <svg
      viewBox="0 0 24 24"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.d} fill={icon.color} />
    </svg>
  );
}

// Logo d'un outil : tracé simple-icons, grappe de tracés, monogramme coloré ou fichier fourni.
// Aucune requête réseau, aucune image cassée possible : tout est inline sauf `kind: "file"`.
export function ToolLogo({ tool }: { tool: Tool }) {
  const { icon, name } = tool;
  switch (icon.kind) {
    case "si":
      return (
        <span className="tool-logo tool-logo--si">
          <Icon slug={icon.slug} title={name} />
        </span>
      );
    case "cluster":
      return (
        <span className="tool-logo tool-logo--cluster" role="img" aria-label={name}>
          {icon.slugs.map((s) => (
            <Icon key={s} slug={s} />
          ))}
        </span>
      );
    case "mono":
      return (
        <span
          className={`tool-logo tool-logo--mono ${icon.serif ? "tool-logo--serif" : ""}`}
          style={{ background: icon.bg, color: icon.fg }}
          role="img"
          aria-label={name}
        >
          {icon.text}
        </span>
      );
    case "file":
      return (
        <span className="tool-logo tool-logo--file">
          <img src={icon.src} alt={name} width={48} height={48} loading="lazy" decoding="async" />
        </span>
      );
  }
}
