---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief — Landing Constructora P.G

## Scope & visitor mode
Ruta única: `src/app/page.tsx` (App Router, Next.js 16 + Tailwind 4). Modo **Persuade**: el visitante es un propietario de vivienda/local en Santiago comparando constructoras; debe entender la oferta, ver precios reales y sentir ganas de partir la conversación. Idioma: español de Chile.

## Audience / job / action / proof / constraints
- **Audiencia:** hogares de Santiago (vitacurino-orientero y poniente-Lampa) con proyectos de quincho, cocina, casa nueva, remodelación, mantención o accesos.
- **Trabajo:** comparar en términos concretos y decidir si partir la cotización.
- **Acción:** botón «Cotiza tu proyecto» — placeholder sin destino real en esta etapa (PRODUCT.md: contacto se agrega después).
- **Prueba:** precios publicados en UF (consolidado §7), plazos reales por tipo de obra, proceso de 4 etapas, 9 proyectos con nombre/comuna, garantía LGUC 3/5/10 + compromiso propio. **No se fabrican méricas de experiencia** (ni +10 años ni +30 proyectos) hasta confirmación del cliente.
- **Constraints:** CTA placeholder; imágenes de proyectos con placeholder gráfico (las fotos reales se agregan después); sin identidad de Edificart ni BASA; logo en `src/app/assets/brand/` sobre fondo blanco.

## Direction contract

**THESIS.** Esta superficie posee una sola idea: **la página ES un plano de obra que se va construyendo en vivo** — arquitectura técnica de papel blanco, retícula de ploteo, líneas de cota y numeración de lámina (P-01…) — y rechaza el arreglo por defecto del rubro: fotos-tape + promesas. Aquí el visitante mira cómo un edificio se dibuja y se rellena de azul; la construcción es literal, no metáfora decorada.

**OWN-WORLD.** Papel blanco dominante (#FFFFFF) con tintes neutros azulados para secciones alternas (#F4F6FA); tinta casi negra (#111113) para tipografía; **azul #3F6FD4 (del logo) como único color committed**, llevando campos enteros (cinta marquee, banda CTA final, volumen del plano, tabla de precios activos). Retícula de ploteo azul al 6% sobre paneles técnicos, líneas de cota con flechas y ticks, etiquetas técnicas en versalitas mono-quadrada; esquinas rectas, bordes de 1-2px, hovers que «tazan» el elemento (outline offset). Nada de glass, gradientes ni sombra difusa.

**STORY.** El visitante entiende en segundos: esto diseña Y construye, es la misma firma de punta a punta; le muestra los precios sin vueltas, el proceso en 4 etapas y 9 obras con nombre y comuna; cree que la transparencia es el estándar de la casa; y actúa: piensa en qué proyecto suyo pedir cotización, aunque el WhatsApp llegue en la etapa siguiente.

**FIRST VIEWPORT.** Nav blanca fija (logo+wordmark izq; links Servicios/Proyectos/Precios/FAQ; CTA azul der). Hero de 12 columnas: izquierda (7 cols) kicker técnico «ARQUITECTURA + CONSTRUCCIÓN — SANTIAGO», display en dos líneas «PLANO. OBRA. ENTREGA.» con la última palabra en azul, sub de una línea («con un único responsable — precios reales en UF»), par de CTAs (azul sólido + outline técnica). Derecha (5 cols): la axonometría del logo redibujada grande, **las líneas se trazan solas** (stroke draw) y el volumen azul se rellena al final, con sondas de cota y cartela «P-01 · ESC 1:100» tipo lámina. Al fondo del hero: cinta-quickfacts con plazos/cuotas/garantía reales.

**FORM.** Direction complete-world derivada del pin del usuario (concepto BASA Ahora-BASA + colores del logo). SEED REFERENCE: seed:e2cd24d62d6c2d3a. Roll f1cc9b3ee10b994873a14cdb76657bbf tratado; challenger donante (pasaporte/ephemera): **raise ejecutado** — el portafolio lleva el lenguaje de «registro acumulado y numerado» (créditos de lámina, numeración 01-09, comuna como nómina), que ahora vive en el propio mundo del plano como numeración de láminas del metraje.

**FINISH.** Verbatim: «unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance».

## Memorable moment
El plano del hero que se traza solo y se rellena de azul — el logo cobrando vida como la promesa de la marca.

## Unresolved decisions
- Destino real del CTA (WhatsApp propio de Constructora P.G) — llega después.
- Fotos reales del portafolio — el usuario las agrega luego; hoy placeholders técnicos por familia de proyecto.
