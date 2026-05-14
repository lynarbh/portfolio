export function CornerOrnament() {
  return (
    <>
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <svg key={pos} className={`corner ${pos}`} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18 C 2 8, 8 2, 18 2" stroke="currentColor" strokeWidth="1" />
          <path d="M6 18 C 6 10, 10 6, 18 6" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
          <circle cx="6" cy="6" r="1.4" fill="currentColor" />
          <path d="M10 4 q 2 -2 4 0 q -2 2 -4 0 Z" fill="currentColor" opacity="0.7" />
        </svg>
      ))}
    </>
  );
}
