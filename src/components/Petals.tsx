const PETAL_COUNT = 12;

const petalSvg = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M16 2 C 22 8, 26 14, 16 30 C 6 14, 10 8, 16 2 Z"
      fill="url(#g)"
      opacity="0.9"
    />
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#F2C4CE" />
        <stop offset="100%" stopColor="#EFAEC4" />
      </linearGradient>
    </defs>
  </svg>
);

export function Petals({ count = PETAL_COUNT }: { count?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 137) % 100;
        const duration = 10 + ((i * 13) % 12);
        const delay = (i * 1.7) % 12;
        const drift = (i % 2 === 0 ? 1 : -1) * (40 + ((i * 17) % 80));
        const size = 14 + ((i * 7) % 14);
        return (
          <span
            key={i}
            className="petal"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
              ["--drift" as string]: `${drift}px`,
            }}
          >
            {petalSvg}
          </span>
        );
      })}
    </div>
  );
}
