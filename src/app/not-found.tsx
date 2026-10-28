import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "./_lib/site";

export const metadata: Metadata = {
  title: "Página no encontrada — Constructora P.G",
};

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hola, acabo de ver su sitio web y me gustaría hacer unas consultas.",
)}`;

export default function NotFound() {
  return (
    <div className="plot-grid-fine flex min-h-screen flex-col bg-paper text-ink">
      <header className="border-b border-ink/10 bg-paper">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-2.5 px-5 md:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/constructora_pg_icon_vector.svg" alt="" className="h-9 w-9" width={36} height={36} />
          <span className="font-display text-[15px] font-bold tracking-[0.08em] uppercase">
            Constructora <span className="text-blue">P.G</span>
          </span>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <p className="font-display text-[13px] font-bold tracking-[0.2em] text-blue-deep uppercase">
            Error 404
          </p>
          <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.02] font-bold tracking-[-0.015em]">
            Esta página no está en el <span className="text-blue">plano</span>.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-graph md:text-[17.5px]">
            La lámina que buscas no existe o cambió de dirección. Volvamos al proyecto: revisa los servicios, los precios en UF o partamos con una conversación.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="border border-blue bg-blue px-6 py-3.5 font-display text-[15px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:border-ink hover:bg-ink"
            >
              Volver al inicio
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-display text-[15px] font-semibold tracking-[0.04em] text-ink uppercase"
            >
              Cotiza por WhatsApp
              <span
                aria-hidden="true"
                className="inline-block h-px w-6 bg-ink transition-all duration-300 group-hover:w-10 group-hover:bg-blue"
              />
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-[13px] text-graph md:px-8">
          <p>© 2026 Constructora P.G · Santiago, Chile</p>
          <p className="font-display tracking-[0.12em] uppercase">Del plano a la entrega</p>
        </div>
      </footer>
    </div>
  );
}
