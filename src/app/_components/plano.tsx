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

function R({
  x,
  y,
  w,
  h,
  delay,
  fill = "var(--color-blue-soft)",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  delay: string;
  fill?: string;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill={fill}
      stroke="var(--color-ink)"
      strokeWidth={1.5}
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
      className={`plano-float ${className}`}
      role="img"
      aria-label="Planta arquitectónica que se dibuja sola y flota suavemente: muros, puertas con arco de giro, ventanas, mobiliario, cotas, sección A-A y elevación pasan de líneas a plano azul"
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
        <T d="M 350 84 V 96 M 344 90 H 356" delay="1.3s" width={1.5} color="var(--color-blue)" />
        <T d="M 96 128 V 140 M 90 134 H 102" delay="1.35s" width={1.5} color="var(--color-blue)" />
        <T d="M 600 96 V 108 M 594 102 H 606" delay="1.4s" width={1.5} color="var(--color-blue)" />
      </g>

      <g>
        <R x={413} y={96} w={11} h={340} delay="0s" />
        <R x={64} y={96} w={11} h={100} delay="0.05s" />
        <R x={64} y={256} w={11} h={180} delay="0.1s" />
        <R x={64} y={96} w={56} h={11} delay="0.15s" />
        <R x={190} y={96} w={140} h={11} delay="0.2s" />
        <R x={400} y={96} w={24} h={11} delay="0.25s" />
        <R x={64} y={425} w={86} h={11} delay="0.3s" />
        <R x={200} y={425} w={50} h={11} delay="0.35s" />
        <R x={340} y={425} w={84} h={11} delay="0.4s" />
        <R x={75} y={248} w={110} h={8} delay="0.45s" />
        <R x={225} y={248} w={30} h={8} delay="0.5s" />
        <R x={295} y={248} w={118} h={8} delay="0.55s" />
        <R x={240} y={107} w={8} h={141} delay="0.6s" />
        <R x={75} y={340} w={29} h={8} delay="0.65s" />
        <R x={144} y={340} w={16} h={8} delay="0.7s" />
        <R x={152} y={348} w={8} h={77} delay="0.75s" />
        <R x={346} y={258} w={8} h={12} delay="0.8s" />
        <R x={346} y={310} w={8} h={115} delay="0.85s" />
      </g>

      <g width={1.25} color="var(--color-blue)">
        <T d="M 120 99.5 H 190" delay="0.95s" width={1} color="var(--color-ink)" />
        <T d="M 120 103.5 H 190" delay="0.97s" width={1} color="var(--color-ink)" />
        <T d="M 330 99.5 H 400" delay="0.99s" width={1} color="var(--color-ink)" />
        <T d="M 330 103.5 H 400" delay="1.01s" width={1} color="var(--color-ink)" />
        <T d="M 66.5 300 V 360 M 72.5 300 V 360" delay="1.03s" width={1} color="var(--color-ink)" />
        <T d="M 250 428.5 H 340 M 250 433.5 H 340" delay="1.05s" width={1} color="var(--color-ink)" />
      </g>

      <g width={1.25}>
        <T d="M 150 425 V 375" delay="1.1s" width={1.25} />
        <T d="M 200 425 A 50 50 0 0 0 150 375" delay="1.12s" width={1.25} />
        <T d="M 225 252 V 212" delay="1.14s" width={1.25} />
        <T d="M 185 252 A 40 40 0 0 1 225 212" delay="1.16s" width={1.25} />
        <T d="M 255 252 V 292" delay="1.18s" width={1.25} />
        <T d="M 295 252 A 40 40 0 0 1 255 292" delay="1.2s" width={1.25} />
        <T d="M 144 344 V 384" delay="1.22s" width={1.25} />
        <T d="M 104 344 A 40 40 0 0 0 144 384" delay="1.24s" width={1.25} />
        <T d="M 350 270 H 390" delay="1.26s" width={1.25} />
        <T d="M 350 310 A 40 40 0 0 0 390 270" delay="1.28s" width={1.25} />
      </g>

      <g opacity="0.85" color="var(--color-blue)">
        <T d="M 100 210 H 160 M 100 150 H 160" delay="1.55s" width={1.25} />
        <T d="M 345 210 H 405 M 345 150 H 405" delay="1.6s" width={1.25} />
        <T d="M 383 350 H 413 V 420 H 383 Z" delay="1.65s" width={1.25} />
        <T d="M 373 385 a 7 7 0 1 0 0.01 0" delay="1.7s" width={1.25} />
        <T d="M 298 340 H 346 V 385 H 298 Z" delay="1.75s" width={1.25} />
        <T d="M 147 320 a 18 18 0 1 0 0.01 0" delay="1.8s" width={1.25} />
        <T d="M 195 417 H 300" delay="1.85s" width={1.25} />
        <T d="M 93 398 a 7 7 0 1 0 0.01 0 M 93 398 H 121" delay="1.9s" width={1.25} />
      </g>

      <g opacity="0.9" color="var(--color-blue)">
        <T d="M 64 96 V 58 M 424 96 V 58 M 64 64 H 424" delay="1.15s" width={1} color="var(--color-blue)" />
        <T d="M 59 69 L 69 59 M 419 69 L 429 59" delay="1.25s" width={1.5} color="var(--color-blue)" />
        <T d="M 64 96 H 34 M 64 436 H 34 M 36 96 V 436" delay="1.2s" width={1} color="var(--color-blue)" />
        <T d="M 31 101 L 41 91 M 31 441 L 41 431" delay="1.3s" width={1.5} color="var(--color-blue)" />
      </g>

      <g color="var(--color-blue)">
        <T d="M 448 432 H 664" delay="1.72s" width={1.5} color="var(--color-ink)" />
        <T d="M 452 432 L 460 440 M 470 432 L 478 440 M 488 432 L 496 440 M 506 432 L 514 440 M 524 432 L 532 440 M 542 432 L 550 440 M 560 432 L 568 440 M 578 432 L 586 440 M 596 432 L 604 440 M 614 432 L 622 440 M 632 432 L 640 440 M 650 432 L 658 440" delay="1.75s" width={1} color="var(--color-ink)" />
      </g>

      <g>
        <T d="M 452 432 V 384 L 557 342 L 662 384 V 432" delay="1.78s" width={1.75} />
        <T d="M 452 380 L 557 338 L 662 380" delay="1.82s" width={1} />
        <R x={470} y={390} w={34} h={28} delay="1.84s" fill="var(--color-blue-soft)" />
        <R x={596} y={390} w={34} h={28} delay="1.85s" fill="var(--color-blue-soft)" />
        <T d="M 487 390 V 418 M 613 390 V 418" delay="1.86s" width={1} />
        <R x={536} y={394} w={30} h={38} delay="1.87s" />
      </g>

      <T d="M 430 470 H 668 V 544 H 430 Z M 430 496 H 668" delay="0.95s" width={1.5} />

      <g>
        <T d="M 490 145 V 111 M 485 119 L 490 111 L 495 119" delay="1.1s" width={1.25} />
        <T d="M 473 128 a 17 17 0 1 0 34 0 a 17 17 0 1 0 -34 0" delay="1.08s" width={1.25} />
      </g>

      <g opacity="0.9" color="var(--color-blue)">
        <T d="M 64 452 H 424" delay="1.3s" width={1} color="var(--color-blue)" />
        <T d="M 56 452 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0 M 236 452 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0 M 416 452 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0" delay="1.34s" width={1.25} color="var(--color-ink)" />
        <T d="M 64 502 H 156 V 510 H 64 Z M 87 502 V 510 M 110 502 V 510 M 133 502 V 510" delay="1.38s" width={1.25} color="var(--color-ink)" />
        <T d="M 448 292 H 660 M 478 292 H 628" delay="1.5s" width={1.5} color="var(--color-ink)" />
        <T d="M 452 292 L 460 300 M 466 292 L 474 300 M 480 292 L 488 300 M 494 292 L 502 300 M 508 292 L 516 300 M 522 292 L 530 300 M 536 292 L 544 300 M 550 292 L 558 300 M 564 292 L 572 300 M 578 292 L 586 300 M 592 292 L 600 300 M 606 292 L 614 300 M 620 292 L 628 300 M 634 292 L 642 300" delay="1.54s" width={1} color="var(--color-ink)" />
        <T d="M 650 176 V 292 M 645 181 L 655 171 M 645 297 L 655 287" delay="1.6s" width={1} color="var(--color-blue)" />
      </g>

      <g>
        <R x={470} y={240} w={8} h={52} delay="1.56s" />
        <R x={628} y={240} w={8} h={52} delay="1.58s" />
        <T d="M 458 240 L 563 176 L 646 240" delay="1.52s" width={1.75} />
        <T d="M 458 236 L 563 172 L 646 236" delay="1.57s" width={1} />
      </g>

      <g
        fontFamily="var(--font-display)"
        fontSize="10"
        letterSpacing="0.12em"
        className="build"
        style={{ "--d": "1.5s" } as React.CSSProperties}
      >
        <text x="438" y="488" fill="var(--color-ink)">
          P-01 · PLANTA ARQUITECTÓNICA
        </text>
        <text x="438" y="516" fill="var(--color-ink)">
          ESC 1:100 · SANTIAGO, CL
        </text>
        <text x="438" y="538" fill="var(--color-ink)" fontWeight="700">
          CONSTRUCTORA P.G
        </text>
      </g>

      <text
        x="490"
        y="98"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="700"
        fill="var(--color-blue)"
        className="build"
        style={{ "--d": "1.5s" } as React.CSSProperties}
      >
        N
      </text>
      <text
        x="244"
        y="52"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        letterSpacing="0.14em"
        fill="var(--color-blue)"
        className="build"
        style={{ "--d": "1.45s" } as React.CSSProperties}
      >
        15 800
      </text>
      <text
        x="26"
        y="268"
        textAnchor="middle"
        transform="rotate(-90 26 268)"
        fontFamily="var(--font-display)"
        fontSize="12"
        letterSpacing="0.14em"
        fill="var(--color-blue)"
        className="build"
        style={{ "--d": "1.5s" } as React.CSSProperties}
      >
        9 400
      </text>

      <g
        fontFamily="var(--font-display)"
        fontSize="10.5"
        fontWeight="600"
        letterSpacing="0.1em"
        fill="var(--color-ink)"
        textAnchor="middle"
        className="build"
        style={{ "--d": "1.6s" } as React.CSSProperties}
      >
        <text x="200" y="190">DORM 1</text>
        <text x="310" y="190">DORM 2</text>
        <text x="195" y="322">LIVING</text>
        <text x="195" y="338">COMEDOR</text>
        <text x="113" y="392">BAÑO</text>
        <text x="372" y="312" transform="rotate(-90 372 312)">COCINA</text>
      </g>

      <g
        fontFamily="var(--font-display)"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.14em"
        fill="var(--color-blue)"
        textAnchor="start"
        className="build"
        style={{ "--d": "1.68s" } as React.CSSProperties}
      >
        <text x="448" y="310">SECCIÓN A-A</text>
        <text x="448" y="457">ELEVACIÓN SUR</text>
      </g>

      <g
        fontFamily="var(--font-display)"
        fontSize="10"
        fontWeight="600"
        fill="var(--color-ink)"
        textAnchor="middle"
        className="build"
        style={{ "--d": "1.45s" } as React.CSSProperties}
      >
        <text x="64" y="456">1</text>
        <text x="244" y="456">2</text>
        <text x="424" y="456">3</text>
      </g>

      <g
        fontFamily="var(--font-display)"
        fontSize="8.5"
        letterSpacing="0.12em"
        fill="var(--color-graph)"
        textAnchor="middle"
        className="build"
        style={{ "--d": "1.55s" } as React.CSSProperties}
      >
        <text x="64" y="497" textAnchor="start">ESCALA GRÁFICA · 1 M = 23</text>
        <text x="64" y="524">0</text>
        <text x="87" y="524">1</text>
        <text x="110" y="524">2</text>
        <text x="133" y="524">3</text>
        <text x="156" y="524">4</text>
      </g>
    </svg>
  );
}

type ServiceIconProps = { kind: "diseno" | "obra" | "remodel" | "mantencion" | "seguridad"; className?: string };

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
  if (kind === "remodel") {
    return (
      <svg {...common}>
        <path d="M 9 42 H 41" />
        <path d="M 13 42 V 9 H 37 V 42" />
        <path d="M 25 9 V 22" />
        <path d="M 25 31 A 9 9 0 0 0 34 22" />
        <path d="M 25 22 V 31" />
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

