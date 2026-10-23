const TRACE = "trace" as const;

function T({
  d,
  delay,
  width = 2,
  color = "var(--color-ink)",
}: {
  d: string;
  delay: string;
  width?: number;
  color?: string;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="square"
      pathLength={1}
      className={TRACE}
      style={{ "--d": delay } as React.CSSProperties}
    />
  );
}

export function PlanoHero({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 560"
      className={className}
      role="img"
      aria-label="Plano axonométrico que se dibuja solo: el proyecto pasa de líneas a volumen azul"
    >
      <defs>
        <pattern id="pg" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M 34 0 L 0 0 0 34" fill="none" stroke="var(--color-blue)" strokeWidth="1" />
        </pattern>
      </defs>

      <g opacity="0.12">
        <rect width="680" height="560" fill="url(#pg)" />
      </g>

      <g opacity="0.8">
        <T d="M 350 84 V 96 M 344 90 H 356" delay="0.9s" width={1.5} color="var(--color-blue)" />
        <T d="M 96 128 V 140 M 90 134 H 102" delay="1s" width={1.5} color="var(--color-blue)" />
        <T d="M 600 96 V 108 M 594 102 H 606" delay="1.1s" width={1.5} color="var(--color-blue)" />
      </g>

      <T d="M 28 484 H 418" delay="0s" />
      <T d="M 60 470 H 118 V 428 H 150" delay="0.06s" />
      <T d="M 96 470 V 452" delay="0.1s" width={1.25} />

      <T d="M 445 214 L 504 156 L 562 214" delay="0.16s" />
      <T d="M 445 214 H 562 M 445 214 V 450 M 562 214 V 450 M 445 450 H 562" delay="0.2s" />

      <T d="M 150 170 L 204 116 L 376 116 L 322 170" delay="0.34s" />
      <T d="M 322 170 L 376 116 V 398 L 322 450" delay="0.4s" />

      <polygon points="150,170 322,170 322,450 150,450" fill="var(--color-blue)" className="build" style={{ "--d": "1.05s" } as React.CSSProperties} />

      <T d="M 150 506 H 322" delay="0.55s" width={1.25} color="var(--color-blue)" />
      <T d="M 146 510 L 154 502 M 318 510 L 326 502" delay="0.6s" width={1.25} color="var(--color-blue)" />

      <T
        d="M 630 214 V 450 M 626 218 L 634 210 M 626 454 L 634 446"
        delay="0.65s"
        width={1.25}
        color="var(--color-blue)"
      />

      <T d="M 430 470 H 668 V 544 H 430 Z M 430 496 H 668" delay="0.7s" width={1.5} />
      <g
        fontFamily="var(--font-display)"
        fontSize="10"
        letterSpacing="0.12em"
        className="build"
        style={{ "--d": "1.2s" } as React.CSSProperties}
      >
        <text x="438" y="488" fill="var(--color-ink)">
          P-00 · PROYECTO INTEGRAL
        </text>
        <text x="438" y="516" fill="var(--color-ink)">
          ESC 1:100 · SANTIAGO, CL
        </text>
        <text x="438" y="538" fill="var(--color-ink)" fontWeight="700">
          CONSTRUCTORA P.G
        </text>
      </g>

      <g
        fontFamily="var(--font-display)"
        fontSize="12"
        letterSpacing="0.14em"
        fill="var(--color-blue)"
        className="build"
        style={{ "--d": "1.15s" } as React.CSSProperties}
      >
        <text x="216" y="498">
          12 000
        </text>
        <text x="612" y="338" transform="rotate(-90 612 338)">
          5 600
        </text>
      </g>
    </svg>
  );
}

type ServiceIconProps = { kind: "diseno" | "obra" | "mantencion" | "seguridad"; className?: string };

export function ServiceIcon({ kind, className = "" }: ServiceIconProps) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    className,
    "aria-hidden": true,
  };
  if (kind === "diseno") {
    return (
      <svg {...common}>
        <path d="M 8 40 L 24 8 L 40 40 Z" />
        <path d="M 16 30 H 32" />
        <circle cx="24" cy="33" r="1.4" fill="currentColor" stroke="none" />
        <path d="M 6 40 H 42" />
      </svg>
    );
  }
  if (kind === "obra") {
    return (
      <svg {...common}>
        <path d="M 14 42 H 32" />
        <path d="M 23 42 V 12" />
        <path d="M 10 12 H 40" />
        <path d="M 10 12 L 23 20" />
        <path d="M 36 12 V 21" />
        <rect x="32" y="21" width="7" height="7" />
      </svg>
    );
  }
  if (kind === "mantencion") {
    return (
      <svg {...common}>
        <path d="M 14 34 C 14 30 19 27 19 27 C 19 27 24 30 24 34 A 5 5 0 0 1 14 34 Z" />
        <path d="M 19 24 V 18" />
        <path d="M 30 10 L 25 20 H 30 L 25 30 L 35 17 H 30.5 L 33 10 Z" />
        <path d="M 8 42 H 40" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M 24 6 L 40 12 V 23 C 40 33 32 39.5 24 43 C 16 39.5 8 33 8 23 V 12 Z" />
      <circle cx="24" cy="22" r="2.6" />
      <path d="M 24 24.6 V 29" />
    </svg>
  );
}

export function PlateMotif({ kind, className = "" }: { kind: "quincho" | "cocina" | "bano" | "arquitectura" | "piscina" | "acceso"; className?: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square" as const,
  };
  if (kind === "quincho") {
    return (
      <svg viewBox="0 0 96 60" {...stroke} aria-hidden="true" className={className}>
        <path d="M 6 52 H 90" />
        <path d="M 18 52 V 24 L 48 10 L 78 24 V 52" />
        <path d="M 30 33 H 66 M 36 40 H 60 M 40 47 H 56" />
        <path d="M 48 10 V 52" opacity="0.4" />
      </svg>
    );
  }
  if (kind === "cocina") {
    return (
      <svg viewBox="0 0 96 60" {...stroke} aria-hidden="true" className={className}>
        <rect x="8" y="14" width="80" height="38" />
        <path d="M 8 32 H 88" />
        <path d="M 30 14 V 32 M 56 14 V 32 M 8 14 H 88" opacity="0.6" />
        <circle cx="20" cy="26" r="3" />
        <path d="M 62 38 H 78" />
      </svg>
    );
  }
  if (kind === "bano") {
    return (
      <svg viewBox="0 0 96 60" {...stroke} aria-hidden="true" className={className}>
        <path d="M 10 48 H 86" />
        <rect x="12" y="18" width="22" height="30" opacity="0.7" />
        <path d="M 22 18 V 40 M 12 29 H 34" opacity="0.6" />
        <rect x="48" y="24" width="30" height="24" />
        <path d="M 63 24 V 12 H 73" opacity="0.7" />
        <circle cx="73" cy="12" r="2" />
      </svg>
    );
  }
  if (kind === "piscina") {
    return (
      <svg viewBox="0 0 96 60" {...stroke} aria-hidden="true" className={className}>
        <rect x="6" y="22" width="84" height="30" />
        <path d="M 6 35 Q 20 30 34 35 T 62 35 T 90 35" opacity="0.7" />
        <path d="M 6 44 Q 20 39 34 44 T 62 44 T 90 44" opacity="0.45" />
        <path d="M 20 12 H 76" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "acceso") {
    return (
      <svg viewBox="0 0 96 60" {...stroke} aria-hidden="true" className={className}>
        <path d="M 6 52 H 90" />
        <rect x="10" y="14" width="76" height="38" opacity="0.6" />
        <path d="M 22 14 V 52 M 38 14 V 52 M 54 14 V 52 M 70 14 V 52" />
        <rect x="44" y="30" width="8" height="8" opacity="0.7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 96 60" {...stroke} aria-hidden="true" className={className}>
      <path d="M 8 54 H 88 M 16 54 V 30 M 16 30 H 60 V 54 M 60 54 V 38 M 60 38 H 82 V 54" />
      <path d="M 24 30 V 54 M 32 30 V 54 M 40 30 V 54 M 48 30 V 54" opacity="0.5" />
      <circle cx="70" cy="46" r="4" opacity="0.7" />
    </svg>
  );
}
