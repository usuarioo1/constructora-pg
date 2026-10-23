# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hogares de Santiago de Chile con proyectos constructivos: quinchos y terrazas, cocinas integrales, casas nuevas y remodelaciones, locales y habilitación de oficinas, más mantención e instalaciones de seguridad. Núcleo geográfico: Vitacura, Las Condes, La Reina, Lo Barnechea y Chicureo, más el sector poniente (Lampa, Ciudad de los Valles, Padre Hurtado). El usuario decide comparando términos concretos y precios reales; la conversación inicial por WhatsApp es el paso natural hacia la cotización.

## Product Purpose

Constructora P.G es una constructora de marca completamente nueva que integra las capacidades de dos fuentes de contenido (los docs `edificart.md` y `basa-arquitectos.md`): el diseño y la gestión de arquitectura de un equipo de arquitectos (proyectos de autor, precio transparente en UF, proceso en etapas) y la capacidad ejecutora y de servicio de otra empresa (obras menores, mantención, instalaciones, controles de acceso, pago en cuotas con Transbank), bajo un único responsable. Esta etapa entrega una landing cuyo éxito es iniciar conversaciones de cotización por WhatsApp («partamos con una conversación»), no capturar formularios.

## Positioning

Diseño, construcción y mantención con un único responsable: «del plano a la entrega, sin intermediarios». Diferenciadores que un vecino del rubro no puede copiar sin evidencia: precios reales publicados en UF, pago en cuotas con Transbank y garantía que sigue viva después de la legal («si nos llamas en 3 años, respondemos igual»).

## Operating Context

Chile (Santiago). Contenido en español de Chile. Precios en UF, netos. Garantía legal Art. 18 LGUC: 3 años terminaciones, 5 años instalaciones, 10 años estructura. El permiso municipal se gestiona dentro del servicio; el trámite se cobra aparte (desde 30 UF por proceso). Venta por WhatsApp primero; email para briefs y planos. Plazos reales: quinchos 6-12 semanas, cocinas 6-10, remodelaciones 8-20, casas 12-18 meses.

## Capabilities and Constraints

- Sitemap (consolidado.md §2): una landing con 8 secciones — Hero, Números, Servicios, Cómo trabajamos, Proyectos, Precios de referencia, FAQ (7) y CTA final. Sin páginas de servicio, blog ni Sample Page en esta etapa.
- Servicios consolidados en 4 familias: A) Arquitectura y diseño; B) Construcción y obra (quinchos y cocinas integrales como negocio insignia); C) Reparación y mantención; D) Seguridad y accesos.
- Proceso en 4 etapas: Conversación → Diseño y cotización → Construcción → Entrega y garantía.
- Portfolio: 9 proyectos curados, 3 por familia (consolidado.md §6).
- Decisión confirmada (21-10-2026): la tabla de precios completa en UF se muestra en la landing (no solo cifras ancla).
- Fuera de esta etapa: la sección/los datos de contacto propios de Constructora P.G (dominio, WhatsApp, email) se agregarán después; los canales de las empresas origen en consolidado.md §9 quedan registrados solo como referencia y no van en el sitio.
- Pago: cuotas disponibles con Transbank.
- Stack: repo Next.js 16 (App Router) + Tailwind 4 + React 19; `page.tsx` aún es el scaffold de create-next-app.

## Brand Commitments

- Marca: **Constructora P.G** con identidad completamente nueva. Ni Edificart ni BASA aportan nombre, logo ni estética — sus sitios son solo fuentes de contenido; no montar la identidad visual de ninguna de las dos.
- Assets propios en repo: `src/app/assets/brand/constructora_pg_logo.png`, `constructora_pg_icon.png` y sus vectoriales `.svg` (logo + icono).
- Idioma: español (Chile).

## Evidence on Hand

- `consolidado.md`: contenido completo consolidado (posicionamiento, sitemap, servicios, proceso, métricas, portfolio, precios en UF, FAQ). `edificart.md` y `basa-arquitectos.md` como fuentes crudas.
- Fotos y un video reales de obras, subidos el 2026-10-20, en `src/app/assets/` (batch «WhatsApp Image ...», más un `.mp4`). Por mapear contra los 9 proyectos del portfolio.
- Ausencias que el trabajo futuro no debe fabricar: sin testimonials ni clientes nombrados; sin métricas de experiencia — decisión confirmada el 21-10-2026 («Sin métricas por ahora»): ni «+10 años» ni «+30 proyectos» hasta que el cliente confirme los números reales; si algo pasa, se elimina o se reemplaza, nunca se inventa.
- Sin datos de contacto propios de Constructora P.G todavía.

## Product Principles

1. **Cifras antes que promesas.** Los precios reales por m² en UF son el diferencial del rubro; la transparencia vale más que el copy emotivo.
2. **Un único responsable.** Todo lo que el sitio comunica — diseño, obra, garantía — habla de un mismo equipo de punta a punta.
3. **Partir con una conversación.** El CTA natural es WhatsApp; sin formularios largos ni intermediarios.
4. **Solo evidencia real.** Fotos de obra reales; ningún número, testimonial ni claim que no esté validado por el cliente.
