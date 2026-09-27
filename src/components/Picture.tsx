import { images, type ImageEntry, type MediaId } from "@/data/media.generated";

const srcSet = (rungs: ImageEntry["avif"]) => rungs.map(([w, url]) => `${url} ${w}w`).join(", ");

// Content image from the media manifest: AVIF (+ WebP for photos) sources and a single
// fallback <img> with intrinsic dimensions. Always lazy and async (the hero poster is the
// only eager image and does not go through this component). No hooks: SSR output is final.
export function Picture({
  id,
  alt,
  sizes,
  className = "",
}: {
  id: MediaId;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const m: ImageEntry = images[id];
  // h-auto keeps the aspect ratio from width/height, unless the caller sets a height.
  const imgClass = /(^|\s)h-/.test(className)
    ? className
    : ["h-auto", className].filter(Boolean).join(" ");
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(m.avif)} sizes={sizes} />
      {m.webp ? <source type="image/webp" srcSet={srcSet(m.webp)} sizes={sizes} /> : null}
      <img
        src={m.fallback}
        width={m.width}
        height={m.height}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClass}
      />
    </picture>
  );
}
