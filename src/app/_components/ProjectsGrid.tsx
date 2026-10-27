"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type ProjectData = {
  title: string;
  photos: string[];
};

function ProjectCard({
  project,
  pIndex,
  onOpen,
}: {
  project: ProjectData;
  pIndex: number;
  onOpen: (p: number, i: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const total = project.photos.length;
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
    setIdx(nearest);
  }, []);

  return (
    <article className="group flex h-full flex-col border border-ink/12 bg-mist transition-colors duration-300 hover:border-blue">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink/12">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {project.photos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onOpen(pIndex, i)}
              aria-label={`Ampliar ${project.title} — foto ${i + 1} de ${total}`}
              className="relative h-full w-full shrink-0 cursor-zoom-in snap-start"
            >
              <Image
                src={src}
                alt={`${project.title} — foto ${i + 1} de ${total}`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 88vw"
                priority={pIndex === 0 && i === 0}
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
        <span className="pointer-events-none absolute top-3 left-4 bg-ink/85 px-2 py-0.5 font-display text-[11px] font-bold tracking-[0.16em] text-white uppercase">
          {String(pIndex + 1).padStart(2, "0")}
        </span>
        <span
          className="pointer-events-none absolute right-4 bottom-3 bg-ink/85 px-2 py-0.5 font-display text-[11px] font-semibold tracking-[0.14em] text-white tabular-nums"
          aria-live="polite"
        >
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="font-display text-[15.5px] leading-tight font-bold text-ink">{project.title}</p>
        <div className="flex gap-1.5" aria-hidden="true">
          <button
            type="button"
            tabIndex={-1}
            onClick={() => goTo(idx - 1)}
            disabled={idx === 0}
            className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-blue hover:text-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3.5 w-3.5">
              <path d="M 15 4 L 7 12 L 15 20 M 7 12 H 21" />
            </svg>
          </button>
          <button
            type="button"
            tabIndex={-1}
            onClick={() => goTo(idx + 1)}
            disabled={idx === total - 1}
            className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-blue hover:text-blue disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-3.5 w-3.5">
              <path d="M 9 4 L 17 12 L 9 20 M 17 12 H 3" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  const [open, setOpen] = useState<{ p: number; i: number } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((v) => (v ? { ...v, i: Math.max(0, v.i - 1) } : v));
      if (e.key === "ArrowRight")
        setOpen((v) => (v ? { ...v, i: Math.min(projects[v.p].photos.length - 1, v.i + 1) } : v));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, projects]);

  const current = open ? projects[open.p] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((pr, pi) => (
          <li key={pr.title} className="list-none">
            <ProjectCard project={pr} pIndex={pi} onOpen={(p, i) => setOpen({ p, i })} />
          </li>
        ))}
      </ul>

      {open !== null && current && current.photos[open.i] !== undefined
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${current.title} — foto ${open.i + 1} de ${current.photos.length} ampliada`}
              className="fixed inset-0 z-[100]"
            >
              <button
                type="button"
                aria-label="Cerrar ampliación"
                onClick={() => setOpen(null)}
                className="absolute inset-0 cursor-zoom-out bg-ink/92"
              />
              <div className="absolute inset-x-0 top-1/2 mx-auto w-[min(1100px,94vw)] -translate-y-1/2">
                <div className="relative mx-auto aspect-[4/3] max-h-[80vh] w-full">
                  <Image
                    src={current.photos[open.i]}
                    alt={`${current.title} — foto ampliada ${open.i + 1} de ${current.photos.length}`}
                    fill
                    sizes="(min-width: 1200px) 1100px, 94vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setOpen({ p: open.p, i: Math.max(0, open.i - 1) })}
                    disabled={open.i === 0}
                    aria-label="Foto anterior"
                    className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-4 w-4">
                      <path d="M 15 4 L 7 12 L 15 20 M 7 12 H 21" />
                    </svg>
                  </button>
                  <p className="bg-ink/85 px-3 py-1.5 font-display text-[12px] font-semibold tracking-[0.18em] text-white uppercase">
                    {current.title} · {String(open.i + 1).padStart(2, "0")} / {String(current.photos.length).padStart(2, "0")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen({ p: open.p, i: Math.min(current.photos.length - 1, open.i + 1) })}
                    disabled={open.i === current.photos.length - 1}
                    aria-label="Foto siguiente"
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
                onClick={() => setOpen(null)}
                aria-label="Cerrar"
                className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center border border-white/30 bg-ink/85 text-white transition-colors hover:bg-white hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-5 w-5">
                  <path d="M 5 5 L 19 19 M 19 5 L 5 19" />
                </svg>
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
