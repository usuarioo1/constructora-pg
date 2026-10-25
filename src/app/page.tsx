import Reveal from "./_components/Reveal";
import Faq, { type Qa } from "./_components/Faq";
import { PlanoHero, ServiceIcon } from "./_components/plano";
import Carousel, { type CarouselSlide } from "./_components/Carousel";

const marqueeItems = [
  "Arquitectura y diseño",
  "Quinchos y terrazas",
  "Cocinas integrales",
  "Construcción de casas",
  "Remodelaciones",
  "Mantención",
  "Portones y accesos",
  "Precios reales en UF",
  "Cuotas con Transbank",
];

const quickFacts = [
  "Quinchos 6–12 sem",
  "Cocinas 6–10 sem",
  "Remodelaciones 8–20 sem",
  "Casas 12–18 meses",
  "Cuotas con Transbank",
  "Garantía 3/5/10 años",
];

const families = [
  {
    code: "FAM-A",
    kind: "diseno",
    title: "Arquitectura y diseño",
    desc: "Proyectos de autor listos para construirse, sin improvisación. Diagnóstico, anteproyecto, planimetría constructiva y permisos.",
    tags: ["Casas nuevas", "Ampliaciones", "Remodelaciones integrales", "Locales y oficinas", "Consultoría"],
  },
  {
    code: "FAM-B",
    kind: "obra",
    title: "Construcción y obra",
    desc: "El corazón del negocio: quinchos y terrazas, cocinas integrales, casas y todo lo que exige hormigón, estructura y terminación en obra.",
    tags: ["Quinchos y terrazas", "Cocinas integrales", "Obras menores y gruesa", "Losas y radieres", "Cobertizos y pérgolas"],
  },
  {
    code: "FAM-C",
    kind: "mantencion",
    title: "Reparación y mantención",
    desc: "La casa y el local siempre en pie: pintura, cerámicas, instalaciones sanitarias y eléctricas con certificaciones, incluyendo emergencias.",
    tags: ["Pinturas", "Cerámicas y porcelanatos", "Gasfitería", "Electricidad", "Techumbres y canaletas", "Carpintería"],
  },
  {
    code: "FAM-D",
    kind: "seguridad",
    title: "Seguridad y accesos",
    desc: "Ven, identifícate y entra sin fricción: portones automáticos, control de accesos, cámaras y cierres, con soldadura estructural a medida.",
    tags: ["Portones automáticos", "Control de accesos", "Circuito de cámaras", "Cierres perimetrales", "Soldadura estructural"],
  },
] as const;

const stages = [
  {
    n: "01",
    title: "Conversación",
    desc: "Nos cuentas qué proyecto tienes en mente. Sin formularios largos ni intermediarios.",
  },
  {
    n: "02",
    title: "Diseño y cotización",
    desc: "Diagnóstico para evitar errores antes de construir; presupuesto con costos propios de obra y cuotas opcionales.",
  },
  {
    n: "03",
    title: "Construcción",
    desc: "Ejecución con control técnico, permisos municipales gestionados y supervisión en terreno.",
  },
  {
    n: "04",
    title: "Entrega y garantía",
    desc: "Plazos claros y sin sorpresas. La garantía legal (3/5/10 años) y nuestro propio compromiso de seguir respondiendo.",
  },
];

const projects: CarouselSlide[] = Array.from({ length: 38 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    n: `L-${n}`,
    name: "Obra en terreno",
    tag: "Foto real",
    src: `/obras/obra-${n}.jpg`,
  };
});

const prices = [
  { service: "Quincho estándar", from: "20–25 UF/m²", note: "Llave en mano; sobre terraza existente, desde 200 UF. 20 m² ≈ 400 UF.", flag: true },
  { service: "Quincho nivel alto", from: "40 UF/m²", note: "Con cerramientos y muebles de parrilla; 20 m² ≈ 800 UF.", flag: false },
  { service: "Remodelación de cocina", from: "150–300 UF", note: "Sólo mobiliario; integral desde 200 UF, hasta 1.200 UF según alcance.", flag: true },
  { service: "Construcción de casa", from: "25–40 UF/m²", note: "Panel 25 · albañilería confinada 30–32 · hormigón armado 38–40.", flag: false },
  { service: "Habilitación de oficina", from: "6–8 UF/m²", note: "Básico; completo con mobiliario y redes, desde 15 UF/m².", flag: false },
  { service: "Diseño de arquitectura", from: "1 UF/m²", note: "Trámite municipal aparte, desde 30 UF por proceso.", flag: false },
  { service: "Mantención y reparaciones", from: "A cotizar", note: "Cotización personalizada tras conversar tu proyecto.", flag: false },
];

const faqs: Qa[] = [
  {
    q: "¿Hacen solo diseño o también construyen?",
    a: "Ambos. La mayoría de los proyectos integran diseño y obra bajo el mismo equipo; luego cada foto de la galería quedará asociada a su proyecto y a su alcance.",
  },
  {
    q: "¿Cuánto demora cada obra?",
    a: "Quinchos 6–12 semanas; cocinas 6–10; remodelaciones 8–20; casas 12–18 meses. El permiso municipal es variable: en el mejor caso parte a los 3 meses.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Publicamos los precios de referencia en UF más arriba; el valor final se fija en la cotización sobre los antecedentes de tu proyecto.",
  },
  {
    q: "¿Se puede pagar en cuotas?",
    a: "Sí. Todos los proyectos se pueden pagar en cuotas con Transbank, desde la cotización.",
  },
  {
    q: "¿Se ocupan de los permisos?",
    a: "Sí, gestionamos el permiso municipal completo. El trámite se cobra aparte, con un mínimo desde 30 UF por proceso.",
  },
  {
    q: "¿Qué garantía tiene la obra?",
    a: "Por ley (Art. 18 LGUC): 3 años en terminaciones, 5 en instalaciones y 10 en estructura. Y nuestro compromiso no termina ahí: si nos llamas después de los 3 años, respondemos igual.",
  },
  {
    q: "¿A qué comunas llegan?",
    a: "Todo Santiago según tu proyecto. Nos especializamos en Vitacura, Las Condes, La Reina, Lo Barnechea y Chicureo, más el sector poniente (Lampa, Ciudad de los Valles, Padre Hurtado).",
  },
];

export default function Home() {
  return (
    <div id="top" className="bg-paper text-ink">
      {/* ————— Nav ————— */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
        <nav aria-label="Principal" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/constructora_pg_icon_vector.svg" alt="" className="h-9 w-9" width={36} height={36} />
            <span className="font-display text-[15px] font-bold tracking-[0.08em] uppercase">
              Constructora <span className="text-blue">P.G</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-[14px] font-medium text-graph md:flex">
            <a href="#servicios" className="transition-colors hover:text-blue">Servicios</a>
            <a href="#como" className="transition-colors hover:text-blue">Cómo trabajamos</a>
            <a href="#proyectos" className="transition-colors hover:text-blue">Proyectos</a>
            <a href="#precios" className="transition-colors hover:text-blue">Precios</a>
            <a href="#faq" className="transition-colors hover:text-blue">FAQ</a>
          </div>
          <a
            href="#cotiza"
            className="border border-blue bg-blue px-4 py-2 font-display text-[13px] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-white hover:text-blue"
          >
            Cotiza
          </a>
        </nav>
        <div className="border-t border-ink/10 md:hidden">
          <div className="no-scrollbar flex gap-5 overflow-x-auto px-5 py-2.5 text-[13px] font-medium text-graph">
            <a href="#servicios" className="shrink-0 transition-colors hover:text-blue">Servicios</a>
            <a href="#como" className="shrink-0 transition-colors hover:text-blue">Cómo trabajamos</a>
            <a href="#proyectos" className="shrink-0 transition-colors hover:text-blue">Proyectos</a>
            <a href="#precios" className="shrink-0 transition-colors hover:text-blue">Precios</a>
            <a href="#faq" className="shrink-0 transition-colors hover:text-blue">FAQ</a>
          </div>
        </div>
      </header>

      <main>
        {/* ————— Hero ————— */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 pt-14 pb-10 md:px-8 lg:grid-cols-12 lg:gap-6 lg:pt-20">
            <div className="lg:col-span-7">
              <h1
                id="hero-title"
                className="font-display text-[clamp(3.2rem,7.4vw,5.75rem)] leading-[0.94] font-bold tracking-[-0.02em] uppercase"
              >
                <Reveal delay={0}>
                  <span className="block">Plano.</span>
                </Reveal>
                <Reveal delay={110}>
                  <span className="block">Obra.</span>
                </Reveal>
                <Reveal delay={220}>
                  <span className="block text-blue">Entrega.</span>
                </Reveal>
              </h1>
              <Reveal delay={380}>
                <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-graph md:text-lg">
                  Arquitectura, construcción y mantención con un único responsable —{" "}
                  <strong className="font-semibold text-ink">del plano a la entrega, sin intermediarios</strong>.
                  Precios reales publicados en UF, pago en cuotas y garantía que no termina con la entrega.
                </p>
              </Reveal>
              <Reveal delay={480}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#cotiza"
                    className="border border-blue bg-blue px-6 py-3.5 font-display text-[15px] font-semibold tracking-[0.04em] text-white uppercase transition-colors hover:bg-ink hover:border-ink"
                  >
                    Cotiza tu proyecto
                  </a>
                  <a
                    href="#proyectos"
                    className="group flex items-center gap-2 font-display text-[15px] font-semibold tracking-[0.04em] text-ink uppercase"
                  >
                    Ver proyectos
                    <span
                      aria-hidden="true"
                      className="inline-block h-px w-6 bg-ink transition-all duration-300 group-hover:w-10 group-hover:bg-blue"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-5" delay={150}>
              <PlanoHero className="w-full max-w-[520px] lg:max-w-none" />
            </Reveal>
          </div>
          <div className="border-t border-ink/10">
            <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-2.5 px-5 py-4 md:px-8">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2 font-display text-[11.5px] font-medium tracking-[0.1em] whitespace-nowrap text-graph uppercase">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-blue" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ————— Marquee ————— */}
        <div className="marquee overflow-hidden border-y border-blue-deep bg-blue py-3.5" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center font-display text-[13.5px] font-semibold tracking-[0.2em] whitespace-nowrap text-white uppercase"
                  >
                    <span className="px-6">{item}</span>
                    <span className="text-white/60">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ————— Servicios ————— */}
        <section id="servicios" aria-labelledby="serv-title" className="scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <h2 id="serv-title" className="font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.015em]">
                  Lo que hacemos, <span className="text-blue">de punta a punta</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-graph lg:pb-2">
                  Cuatro familias de servicio bajo la misma firma: quién diseña tu proyecto es quien lo construye y quien responde por él después.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 border-t border-ink/10">
              {families.map((fam, i) => (
                <Reveal key={fam.code} delay={i * 60}>
                  <article className="group grid grid-cols-1 gap-x-8 gap-y-4 border-b border-ink/10 py-8 transition-colors duration-300 hover:bg-mist md:grid-cols-[80px_56px_1fr_1.15fr] md:py-9">
                    <span className="font-display text-[12px] font-semibold tracking-[0.16em] text-ink/60 transition-colors group-hover:text-blue">
                      {fam.code}
                    </span>
                    <span className="text-ink/70 transition-colors duration-300 group-hover:text-blue">
                      <ServiceIcon kind={fam.kind} className="h-11 w-11" />
                    </span>
                    <div>
                      <h3 className="font-display text-[19px] font-bold text-ink md:text-[21px]">{fam.title}</h3>
                      <p className="mt-2 max-w-[48ch] text-[14.5px] leading-relaxed text-graph">{fam.desc}</p>
                    </div>
                    <ul className="flex flex-wrap content-start gap-2">
                      {fam.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-ink/15 px-2.5 py-1 text-[12px] font-medium text-graph transition-colors duration-300 group-hover:border-blue/40 group-hover:text-ink"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Cómo trabajamos ————— */}
        <section id="como" aria-labelledby="como-title" className="scroll-mt-20 border-y border-ink/10 bg-mist">
          <div className="plot-grid-fine">
            <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
              <Reveal>
                <h2 id="como-title" className="max-w-[26ch] font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.015em]">
                  Así evitamos errores en tu obra
                </h2>
              </Reveal>

              <Reveal measure delay={150}>
                <div className="mt-16 hidden h-px w-full bg-blue/25 md:block" aria-hidden="true" />
              </Reveal>

              <ol className="mt-10 grid gap-10 md:mt-2 md:grid-cols-4 md:gap-6">
                {stages.map((st, i) => (
                  <li key={st.n} className="list-none">
                    <Reveal delay={i * 110}>
                      <p className="font-display text-[13px] font-bold tracking-[0.2em] text-blue-deep">{st.n}</p>
                      <h3 className="mt-2 font-display text-[19px] font-bold text-ink">{st.title}</h3>
                      <p className="mt-2.5 max-w-[34ch] text-[14px] leading-relaxed text-graph">{st.desc}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ————— Proyectos ————— */}
        <section id="proyectos" aria-labelledby="proy-title" className="scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <h2 id="proy-title" className="font-display text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.04] font-bold tracking-[-0.015em]">
                  Acá irán los proyectos de las fotos <span className="text-blue">que me enviaste</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-graph lg:pb-2">
                  (Fotografías reales de obra, aún sin clasificar; luego se etiquetarán por proyecto y comuna según me vayas confirmando el detalle.)
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <Carousel slides={projects} />
            </Reveal>
          </div>
        </section>

        {/* ————— Precios ————— */}
        <section id="precios" aria-labelledby="prec-title" className="scroll-mt-20 border-y border-ink/10 bg-mist">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <h2 id="prec-title" className="font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.015em]">
                  Precios de referencia, <span className="text-blue">en UF</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-graph lg:pb-2">
                  Publicamos el rango real de cada obra: la transparencia es el estándar de la casa. El valor final se fija en la cotización según los antecedentes de tu proyecto.
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="mt-12 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/25">
                      <th scope="col" className="pb-3 pr-6 font-display text-[11px] font-semibold tracking-[0.18em] text-graph uppercase">Servicio</th>
                      <th scope="col" className="pb-3 pr-6 font-display text-[11px] font-semibold tracking-[0.18em] text-graph uppercase">Desde</th>
                      <th scope="col" className="hidden pb-3 font-display text-[11px] font-semibold tracking-[0.18em] text-graph uppercase md:table-cell">Detalle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((row) => (
                      <tr key={row.service} className="border-b border-ink/10 transition-colors hover:bg-paper">
                        <td className="py-4 pr-6 align-baseline">
                          <span className="font-display text-[16.5px] font-bold text-ink">{row.service}</span>
                        </td>
                        <td
                          className={`py-4 pr-6 align-baseline whitespace-nowrap font-display text-[18px] font-bold tabular-nums ${row.flag ? "text-blue-deep" : "text-ink"}`}
                        >
                          {row.from}
                        </td>
                        <td className="hidden max-w-[52ch] py-4 align-baseline text-[14px] leading-relaxed text-graph md:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 font-display text-[12.5px] tracking-[0.06em] text-graph">
                Precios netos, en UF · <a href="#cotiza" className="font-semibold text-blue-deep underline underline-offset-4 transition-colors hover:text-ink">Solicita tu cotización</a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ————— FAQ ————— */}
        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20">
          <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-24">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <h2 id="faq-title" className="font-display text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.02] font-bold tracking-[-0.015em]">
                  Lo que preguntan <span className="text-blue">antes de cotizar</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-8">
                <Faq items={faqs} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ————— CTA final ————— */}
        <section id="cotiza" aria-labelledby="cta-title" className="scroll-mt-20 relative overflow-hidden bg-blue text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="relative mx-auto max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
            <Reveal>
              <h2 id="cta-title" className="max-w-[16ch] font-display text-[clamp(2.6rem,5.6vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.015em] uppercase">
                Partamos con una conversación
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[54ch] text-[20px] leading-relaxed font-semibold text-white/95">
                Cuéntanos qué proyecto tienes en mente. Te respondemos directo, sin intermediarios.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <a
                href="#cotiza"
                className="mt-10 inline-block bg-white px-7 py-4 font-display text-[15px] font-bold tracking-[0.04em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
              >
                Cotiza tu proyecto
              </a>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-10 font-display text-[12.5px] font-semibold tracking-[0.22em] text-white uppercase">
                Arquitectura + Construcción · Santiago, Chile
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ————— Footer ————— */}
      <footer className="bg-ink text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center bg-white p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/constructora_pg_icon_vector.svg" alt="" className="h-8 w-8" width={32} height={32} />
              </span>
              <span className="font-display text-[16px] font-bold tracking-[0.08em] uppercase">
                Constructora P.G
              </span>
            </div>
            <p className="mt-4 max-w-[44ch] text-[14.5px] leading-relaxed text-white/70">
              Del plano a la entrega, sin intermediarios: diseño, construcción y mantención con un único responsable.
            </p>
          </div>
          <nav aria-label="Pie de página" className="md:col-span-3">
            <p className="font-display text-[12px] font-semibold tracking-[0.2em] text-white/60 uppercase">Secciones</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/80">
              <li><a href="#servicios" className="transition-colors hover:text-white">Servicios</a></li>
              <li><a href="#proyectos" className="transition-colors hover:text-white">Proyectos</a></li>
              <li><a href="#precios" className="transition-colors hover:text-white">Precios</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">Preguntas frecuentes</a></li>
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="font-display text-[12px] font-semibold tracking-[0.2em] text-white/60 uppercase">En esta etapa</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/80">
              <li>Precios netos, en UF</li>
              <li>Cuotas con Transbank</li>
              <li>Fotografías de obra en camino</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-[13px] text-white/70 md:px-8">
            <p>© 2026 Constructora P.G · Santiago, Chile</p>
            <p className="font-display tracking-[0.12em] uppercase">Del plano a la entrega</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
