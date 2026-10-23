"use client";

import { useCallback, useRef, useState } from "react";
import { PlateMotif } from "./plano";

export type CarouselSlide = {
  n: string;
  name: string;
  tag: string;
  place: string;
  motif: "quincho" | "cocina" | "bano" | "arquitectura" | "piscina" | "acceso";
};

export default function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (next: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(total - 1, next));
      const target = track.children[clamped] as HTMLElement | undefined;
      if (!target) return;
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
    },
    [total],
  );

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const pos = track.scrollLeft;
    let nearest = 0;
    let best = Infinity;
    for (let i = 0; i < track.children.length; i++) {
      const child = track.children[i] as HTMLElement;
      const d = Math.abs(child.offsetLeft - track.offsetLeft - pos);
      if (d < best) {
        best = d;
        nearest = i;
      }
    }
    setIndex(nearest);
  }, []);

  const pct = total > 1 ? ((index + 1) / total) * 100 : 100;

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-label="Galería de proyectos — fotografías por agregar"
      className="mt-12"
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {slides.map((s) => (
          <figure
            key={s.n}
            className="group w-[86%] shrink-0 snap-start border border-ink/12 bg-mist sm:w-[62%] lg:w-[44%]"
          >
            <div className="plot-grid-fine relative flex aspect-[4/3] items-center justify-center border-b border-ink/12 text-ink/45 transition-colors duration-300 group-hover:text-blue/70">
              <PlateMotif kind={s.motif} className="h-24 w-auto" />
              <span className="absolute top-3 left-4 font-display text-[12px] font-bold tracking-[0.18em] text-blue-deep">
                {s.n}
              </span>
              <span className="absolute right-4 bottom-3 font-display text-[10px] font-medium tracking-[0.14em] text-ink/60 uppercase">
                Fotografía pendiente
              </span>
            </div>
            <figcaption className="flex items-center justify-between gap-3 p-4">
              <div>
                <h3 className="font-display text-[15.5px] leading-tight font-bold text-ink">{s.name}</h3>
                <p className="mt-1 font-display text-[11.5px] tracking-[0.08em] text-graph uppercase">{s.place}</p>
              </div>
              <span className="shrink-0 border border-ink/15 px-2.5 py-1 font-display text-[11px] font-medium tracking-[0.1em] text-graph uppercase">
                {s.tag}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Lámina anterior"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-blue hover:text-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-4 w-4">
              <path d="M 15 4 L 7 12 L 15 20 M 7 12 H 21" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === total - 1}
            aria-label="Lámina siguiente"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-blue hover:text-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-4 w-4">
              <path d="M 9 4 L 17 12 L 9 20 M 17 12 H 3" />
            </svg>
          </button>
        </div>
        <div className="flex h-px flex-1 items-center bg-ink/15" aria-hidden="true">
          <div className="h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ width: `${pct}%` }} />
        </div>
        <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-ink" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
