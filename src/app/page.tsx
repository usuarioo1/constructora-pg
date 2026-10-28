import { readdirSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import planos2Img from "./assets/planos2.webp";
import Reveal from "./_components/Reveal";
import Faq, { type Qa } from "./_components/Faq";
import { PlanoHero, ServiceIcon } from "./_components/plano";
import ProjectsGrid, { type ProjectData } from "./_components/ProjectsGrid";
import WhatsAppButton from "./_components/WhatsAppButton";
import { siteConfig } from "./_lib/site";

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
  "Quinchos 5–8 sem",
  "Cocinas 4–6 sem",
  "Remodelaciones 5–10 sem",
  "Casas 12–18 meses",
  "Cuotas con Transbank",
  "Garantía 1 año en obras menores",
];

const areas = [
  {
    code: "ÁREA 01",
    kind: "diseno",
    title: "Arquitectura y Diseño",
    desc: "Diseñamos espacios que se adaptan a tus ideas, necesidades y presupuesto. Te acompañamos desde la primera propuesta hasta la planificación del proyecto, con diagnóstico, diseño personalizado y planos constructivos cuando sean necesarios, además de apoyo en la gestión de permisos que correspondan. Todo planificado para construir con claridad, evitar imprevistos y lograr el resultado que imaginas.",
    tags: ["Casas nuevas", "Ampliaciones", "Remodelaciones integrales", "Locales y oficinas", "Consultoría"],
  },
  {
    code: "ÁREA 02",
    kind: "obra",
    title: "Construcción y Obra",
    desc: "El corazón de la firma: quinchos y terrazas, cocinas integrales, casas y todo lo que exige hormigón, estructura y terminación en obra.",
    tags: ["Quinchos y terrazas", "Cocinas integrales", "Obras menores y gruesa", "Losas y radieres", "Cobertizos y pérgolas"],
  },
  {
    code: "ÁREA 03",
    kind: "mantencion",
    title: "Reparación y Mantención",
    desc: "La casa y el local siempre en pie: pintura, cerámicas, instalaciones sanitarias y eléctricas con certificaciones, incluyendo emergencias.",
    tags: ["Pinturas", "Cerámicas y porcelanatos", "Gasfitería", "Electricidad", "Techumbres y canaletas", "Carpintería"],
  },
  {
    code: "ÁREA 04",
    kind: "seguridad",
    title: "Seguridad y Accesos",
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
    desc: "Diagnóstico para evitar errores antes de construir; diseño bajo arquitectura cuando el proyecto lo requiera (es opcional, no toda construcción la necesita) y presupuesto con costos propios de obra y cuotas opcionales.",
  },
  {
    n: "03",
    title: "Construcción",
    desc: "Ejecución con control técnico y supervisión en terreno; la gestión de permisos municipales se agrega según tu proyecto.",
  },
  {
    n: "04",
    title: "Entrega y garantía",
    desc: "Plazos claros y sin sorpresas: garantía de 1 año para obras menores; en los demás proyectos, la garantía se estipula en contrato.",
  },
];

function readProjects(): ProjectData[] {
  const base = join(process.cwd(), "public", "proyectos");
  return readdirSync(base)
    .filter((dir) => !dir.startsWith("."))
    .sort()
    .map((dir, i) => {
      const photos = readdirSync(join(base, dir))
        .filter((f) => !f.startsWith(".") && /\.(jpe?g|png)$/i.test(f))
        .sort()
        .map((f) => `/proyectos/${dir}/${f}`);
      if (photos.length === 0) return null;
      return { title: "Proyecto", photos };
    })
    .filter((p): p is ProjectData => p !== null);
}

const projects = readProjects();

const prices = [
  { service: "Construcción de quinchos", from: "8 UF/m²", note: "Construcción y habilitación de quinchos.", flag: true },
  { service: "Ampliaciones", from: "9 UF/m²", note: "Nuevos espacios integrados a tu vivienda.", flag: true },
  { service: "Construcción de piscinas", from: "19 UF/m²", note: "Proyectos de piscinas a medida.", flag: true },
  { service: "Remodelación de cocinas", from: "A cotizar", note: "Cotización personalizada según tu proyecto.", flag: false },
  { service: "Construcción de casas", from: "A cotizar", note: "Cotización personalizada según tu proyecto.", flag: false },
  { service: "Habilitación de oficinas", from: "A cotizar", note: "Cotización personalizada según tu proyecto.", flag: false },
  { service: "Diseño de arquitectura y planos", from: "A cotizar", note: "Cotización personalizada según tu proyecto.", flag: false },
  { service: "Jardinería y paisajismo", from: "A cotizar", note: "Cotización personalizada según tu proyecto.", flag: false },
  { service: "Mantención y reparaciones", from: "A cotizar", note: "Cotización personalizada según tu proyecto.", flag: false },
];

const faqs: Qa[] = [
  {
    q: "¿Hacen solo diseño o también construyen?",
    a: "Ambos. La mayoría de los proyectos integran diseño y obra bajo el mismo equipo, y cada foto de la galería corresponde a un proyecto y a su alcance real. La construcción nace, por lo general, del requerimiento específico de cada cliente; y si tu proyecto necesita planos, los desarrollamos con nuestro staff de arquitectos.",
  },
  {
    q: "¿Cuánto demora cada obra?",
    a: "Quinchos 5–8 semanas; cocinas 4–6; remodelaciones 5–10; casas 12–18 meses. El permiso municipal es variable: en el mejor caso parte a los 3 meses.",
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
    a: "Cuando tu proyecto lo requiere, sí: gestionamos el permiso municipal completo. El trámite se cobra aparte, con un mínimo desde 30 UF por proceso.",
  },
  {
    q: "¿Qué garantía tiene la obra?",
    a: "En obras menores, la garantía es de 1 año. Para los demás proyectos, la garantía se estipula en el contrato, según lo acordado en tu proyecto.",
  },
  {
    q: "¿A qué comunas llegan?",
    a: "Todo Santiago según tu proyecto. Nos especializamos en Vitacura, Las Condes, La Reina, Lo Barnechea y Chicureo, más el sector poniente (Lampa, Ciudad de los Valles, Padre Hurtado).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": `${siteConfig.url}/#negocio`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.logo}`,
      logo: `${siteConfig.url}${siteConfig.logo}`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      areaServed: [
        { "@type": "City", name: "Santiago" },
        { "@type": "City", name: "Vitacura" },
        { "@type": "City", name: "Las Condes" },
        { "@type": "City", name: "La Reina" },
        { "@type": "City", name: "Lo Barnechea" },
        { "@type": "City", name: "Chicureo" },
        { "@type": "City", name: "Lampa" },
        { "@type": "City", name: "Padre Hurtado" },
      ],
      knowsAbout: [
        "Quinchos y terrazas",
        "Cocinas integrales",
        "Construcción de casas",
        "Remodelaciones",
        "Mantención de viviendas",
        "Portones automáticos",
        "Control de accesos",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Arquitectura y diseño" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Construcción y obra" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Reparación y mantención" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Seguridad y accesos" },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#web`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "es-CL",
      publisher: { "@id": `${siteConfig.url}/#negocio` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  const HERO = process.env.NEXT_PUBLIC_HERO === "1" ? 1 : 2;

  const heroLeft = (
    <div className="lg:col-span-6">
      <Reveal delay={0}>
        <h1
          id="hero-title"
          className="max-w-[22ch] font-display text-[clamp(2.4rem,4.8vw,3.9rem)] leading-[1.05] font-bold tracking-[-0.015em]"
        >
          Constructora en Santiago: <span className="text-blue">quinchos, cocinas y remodelaciones</span>.
        </h1>
      </Reveal>
      <Reveal delay={180}>
        <p className="mt-7 max-w-[60ch] text-[16.5px] leading-relaxed text-graph md:text-[17.5px]">
          Publicamos precios de referencia en UF para que puedas planificar tu proyecto con claridad desde el inicio.
          En nuestros servicios de quinchos, ampliaciones y piscinas encontrarás valores referenciales por metro
          cuadrado; los demás servicios se cotizan de manera personalizada, según las características, terminaciones y
          alcance de cada obra.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <p className="mt-4 max-w-[60ch] text-[16.5px] leading-relaxed font-semibold text-ink md:text-[17.5px]">
          <strong className="font-semibold text-ink">Sin sorpresas ni costos poco claros.</strong> Evaluamos tu
          proyecto, definimos su alcance y te entregamos una cotización detallada antes de comenzar.
        </p>
      </Reveal>
      <Reveal delay={420}>
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
        <p className="mt-9 font-display text-[clamp(1.25rem,1.9vw,1.65rem)] leading-snug font-bold text-ink">
          Tú imaginas el proyecto. <span className="text-blue">Nosotros lo hacemos realidad.</span>
        </p>
      </Reveal>
    </div>
  );

  return (
    <div id="top" className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          {HERO === 2 && (
            <div aria-hidden="true" className="absolute inset-0 lg:left-auto lg:w-[58%] lg:right-[7%]">
              <div className="foto-in relative h-full w-full [-webkit-mask-image:linear-gradient(90deg,transparent,black_38%,black_96%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_38%,black_96%,transparent)]">
                <Image
                  src={planos2Img}
                  alt=""
                  fill
                  priority
                  unoptimized
                  placeholder="blur"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-right"
                />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-paper to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-paper/45 to-paper/90 lg:via-paper/25 lg:to-paper/55" />
              </div>
            </div>
          )}
          <div
            className={`relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 pt-14 pb-10 md:px-8 lg:grid-cols-12 lg:gap-6 lg:pt-20${HERO === 2 ? " lg:min-h-[560px]" : ""}`}
          >
            {heroLeft}
            {HERO === 1 ? (
              <Reveal
                delay={150}
                className="lg:col-span-6 [-webkit-mask-image:linear-gradient(90deg,transparent,black_30%)] [mask-image:linear-gradient(90deg,transparent,black_30%)]"
              >
                <PlanoHero className="w-full lg:w-[118%]" />
              </Reveal>
            ) : (
              <div aria-hidden="true" className="hidden lg:col-span-6 lg:block" />
            )}
          </div>
          <div className="relative border-t border-ink/10 bg-paper/85 lg:bg-paper/65">
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
                  4 Grandes, <span className="text-blue"> Áreas de servicio</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-graph lg:pb-2">
                  Cuatro áreas de servicio bajo la misma firma: quien diseña tu proyecto es quien lo construye y quien responde por él después.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
              {areas.map((area, i) => (
                <Reveal key={area.code} delay={i * 80}>
                  <article className="group flex h-full flex-col border border-ink/12 bg-mist p-7 transition-colors duration-300 hover:border-blue md:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <span className="pt-1 font-display text-[12px] font-semibold tracking-[0.16em] text-ink/60 transition-colors group-hover:text-blue">
                        {area.code}
                      </span>
                      <span className="text-ink/70 transition-colors duration-300 group-hover:text-blue">
                        <ServiceIcon kind={area.kind} className="h-12 w-12" />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[22px] font-bold tracking-[-0.01em] text-ink md:text-[26px]">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-graph">{area.desc}</p>
                    <ul className="mt-auto flex flex-wrap content-start gap-2 pt-7">
                      {area.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-ink/15 bg-paper px-2.5 py-1 text-[12px] font-medium text-graph transition-colors duration-300 group-hover:border-blue/40 group-hover:text-ink"
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
                  Proyectos que ya están <span className="text-blue">de pie</span>
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <p className="max-w-[52ch] text-[15.5px] leading-relaxed text-graph lg:pb-2">
                  Fotos reales de nuestras obras: recorre cada proyecto, amplía las imágenes y mira el detalle de cada ejecución.
                </p>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <ProjectsGrid projects={projects} />
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
                      <th scope="col" className="pb-3 pr-6 font-display text-[11px] font-semibold tracking-[0.18em] text-graph uppercase">Precio</th>
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
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/56964393821?text=Hola%2C%20acabo%20de%20ver%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20hacer%20unas%20consultas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white px-7 py-4 font-display text-[15px] font-bold tracking-[0.04em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Cotiza por WhatsApp
                </a>
                <a
                  href="mailto:contacto@constructora-pg.cl?subject=Cotizaci%C3%B3n%20de%20proyecto&body=Hola%2C%20quiero%20cotizar%20un%20proyecto."
                  className="inline-flex items-center gap-3 border border-white/60 px-7 py-4 font-display text-[15px] font-bold tracking-[0.04em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-5 w-5">
                    <rect x="3" y="5" width="18" height="14" />
                    <path d="M3.5 6 L 12 13 L 20.5 6" />
                  </svg>
                  Prefiero un correo
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-6 font-display text-[13px] tracking-[0.14em] text-white/85 uppercase">
                <a href="mailto:contacto@constructora-pg.cl?subject=Cotizaci%C3%B3n%20de%20proyecto" className="underline underline-offset-4 transition-colors hover:text-white">
                  contacto@constructora-pg.cl
                </a>
              </p>
            </Reveal>
            <Reveal delay={420}>
              <p className="mt-8 font-display text-[12.5px] font-semibold tracking-[0.22em] text-white uppercase">
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
            <p className="mt-4 font-display text-[14px] font-semibold tracking-[0.1em] text-white/90">
              <a href="mailto:contacto@constructora-pg.cl" className="underline underline-offset-4 transition-colors hover:text-white">
                contacto@constructora-pg.cl
              </a>
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
              <li>Fotos de obra, organizadas por proyecto</li>
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
      <WhatsAppButton />
    </div>
  );
}
