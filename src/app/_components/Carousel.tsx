"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type CarouselSlide = {
  n: string;
  name: string;
  tag: string;
  src: string;
};

export default function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const total = slides.length;

  const prefersReduce = useCallback(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const goTo = useCallback(
    (next: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(total - 1, next));
      const target = track.children[clamped] as HTMLElement | undefined;
      if (!target) return;
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: prefersReduce() ? "auto" : "smooth" });
    },
    [total, prefersReduce],
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

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? null : Math.max(0, v - 1)));
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? null : Math.min(total - 1, v + 1)));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, closeLightbox, total]);

  const pct = total > 1 ? ((index + 1) / total) * 100 : 100;

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-label={`Galería de obras — ${total} fotografías reales`}
      className="mt-12"
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {slides.map((s, i) => (
          <figure
            key={s.n}
            className="group w-[86%] shrink-0 snap-start border border-ink/12 bg-mist sm:w-[62%] lg:w-[44%]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-ink/12">
              <button
                type="button"
                onClick={() => openLightbox(i)}
                aria-label={`Ampliar fotografía ${i + 1} de ${total}`}
                className="absolute inset-0 block cursor-zoom-in"
              >
                <Image
                  src={s.src}
                  alt={`${s.name} — fotografía ${i + 1} de ${total}`}
                  fill
                  sizes="(min-width: 1024px) 44vw, (min-width: 640px) 62vw, 86vw"
                  priority={i < 2}
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </button>
              <span className="pointer-events-none absolute top-3 left-4 bg-ink/85 px-2 py-0.5 font-display text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                {s.n}
              </span>
            </div>
            <figcaption className="flex items-center justify-between gap-3 p-4">
              <p className="font-display text-[15.5px] leading-tight font-bold text-ink">{s.name}</p>
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
          <div
            className="h-px bg-blue transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-ink" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      {lightbox !== null &&
        slides[lightbox] &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Fotografía ${lightbox + 1} de ${total} ampliada`}
            className="fixed inset-0 z-[100]"
          >
          <button
            type="button"
            aria-label="Cerrar ampliación"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-zoom-out bg-ink/92"
          />
          <div className="absolute inset-x-0 top-1/2 mx-auto w-[min(1100px,94vw)] -translate-y-1/2">
            <div className="relative mx-auto aspect-[4/3] max-h-[80vh] w-full">
              <Image
                src={slides[lightbox].src}
                alt={`${slides[lightbox].name} — fotografía ampliada ${lightbox + 1} de ${total}`}
                fill
                sizes="(min-width: 1200px) 1100px, 94vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setLightbox(Math.max(0, lightbox - 1))}
                disabled={lightbox === 0}
                aria-label="Fotografía anterior"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-4 w-4">
                  <path d="M 15 4 L 7 12 L 15 20 M 7 12 H 21" />
                </svg>
              </button>
              <p className="bg-ink/85 px-3 py-1.5 font-display text-[12px] font-semibold tracking-[0.18em] text-white uppercase">
                {slides[lightbox].n} · {String(lightbox + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={() => setLightbox(Math.min(total - 1, lightbox + 1))}
                disabled={lightbox === total - 1}
                aria-label="Fotografía siguiente"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-4 w-4">
                  <path d="M 9 4 L 17 12 L 9 20 M 17 12 H 3" />
                </svg>
              </button>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Cerrar"
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center border border-white/30 bg-ink/85 text-white transition-colors hover:bg-white hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-5 w-5">
              <path d="M 5 5 L 19 19 M 19 5 L 5 19" />
            </svg>
          </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
