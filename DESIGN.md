---
name: Constructora P.G
description: >-
  Blueprint editorial — la landing es una lámina de plano que se traza sola y se
  rellena de azul; papel blanco dominante, tinta casi negra, retícula de ploteo
  y un único azul committed (el del logo).
colors:
  paper: "#ffffff"
  mist: "#f4f6fa"
  ink: "#111113"
  graph: "#43464d"
  blue: "#3f6fd4"
  blue-deep: "#2b50ab"
  blue-soft: "#e8eefb"
typography:
  display:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "clamp(3.2rem, 7.4vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0px"
spacing:
  gutter: "20px (px-5) móvil / 32px (md:px-8) ≥768px"
  section-y: "80px móvil / 96px ≥768px"
  cta-y: "96px móvil / 128px ≥768px"
  nav-h: "64px"
  row-y: "32px / 36px ≥768px"
  faq-y: "20px"
  step: "8px base (escala Tailwind: gap-2 a gap-10)"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    typography: "Chakra Petch 15px · 600 · uppercase · tracking 0.04em"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
  button-primary-nav:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    typography: "Chakra Petch 13px · 600 · uppercase · tracking 0.06em"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  button-primary-nav-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.blue}"
  button-inverse:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "Chakra Petch 15px · 700 · uppercase · tracking 0.04em"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-inverse-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
---

# Design System: Constructora P.G

## Overview

**Creative North Star: "La lámina viva" — la página ES un plano de obra que se va construyendo en vivo.**

Todo el sistema se comporta como una lámina de ploteo técnica: papel blanco dominante, retícula azul de trazado al fondo de los paneles de planificación, numeración de láminas (FAM-A…D, L-01…38, P-00, 01/38), cotas con ticks y cartelas «ESC 1:100». El momento memorable del sistema es el plano del hero: una axonometría de líneas de tinta que **se traza sola** (cada path dibuja su segmento en 1,15s con delays escalonados) y al final **se rellena de azul** (el volumen crece con su eje Y desde la base a los 1,05s). La construcción es literal, no metáfora decorada: el visitante ve cómo una obra pasa de líneas a volumen azul, que es exactamente el mensaje del negocio — «del plano a la entrega, sin intermediarios».

**Un único azul committed** (el azul del logotipo, #3F6FD4) lleva los campos enteros designados: la cinta marquee de servicios, la banda CTA final con su retícula blanca de 34px, el volumen del plano del hero, la palabra acentuada de cada titular y los botones primarios. Nada de segundo acento, nada de gradiente, nada de difuminado; profundidad y jerarquía salen de la capa tonal (papel → neblina → tinta), hairlines de 1px, y la disputa tipográfica entre la técnica cuadrada (Chakra Petch) y el cuerpo neutro (Archivo). La imagen protagonista no es la foto-tape típica del rubro: es la lámina dibujándose, con los datos duros publicados en UF como prueba de transparencia.

**Key Characteristics:**

- Hero plano vivo: trazado por trazado (stroke-draw) + relleno del volumen azul; cotas y cartela de lámina incluidas.
- Papel blanco dominante; secciones de planificación alternas en «neblina» azulado con retícula de ploteo de 17px al 6%.
- Un solo azul committed (#3F6FD4) que lleva campos enteros o marca acción puntual; nunca tinte decorativo.
- Chakra Petch para display y toda etiqueta técnica (uppercase, tracking generoso); Archivo para el cuerpo.
- Hairlines de 1px, esquinas rectas en todo el sistema, cero sombras y cero blur.
- Historia en secuencia: la obra se dibuja y se rellena, mientras los precios reales en UF se leen sin vueltas.

## Colors

Paleta de una pieza: neutros blancos y grises fríos girando alrededor de un único azul cobalto saturado. El sistema siempre se lee como «papel con una capa de color» — nunca como un conjunto multichroma.

### Primary

- **Azul Obra** (#3F6FD4): el único color committed. Viene del logotipo y vive donde el sistema lo deja portar peso: el campo de la cinta marquee, la banda CTA final completa (con retícula blanca superpuesta), el volumen relleno del plano del hero, la palabra acentuada de cada titular («Entrega.», «de punta a punta», «en UF»), los botones primarios, los bullets cuadrados del quickfacts, el filtro de progreso del carrusel, y la `::selection`/`:focus-visible` global del sitio.
- **Cota Azul** (#2B50AB): *el mismo* azul a temperatura de lectura — reservado para micro-tipografía técnica sobre neblina: números de etapa «01»–«04», cifras marcadas de la tabla de precios, y el link de cotización a pie de tabla. Nunca un segundo azul decorativo.

No hay acento secundario ni terciario: el sistema es de un solo acento — Primario + Neutros, y esa es la postura completa.

### Neutral

- **Papel** (#FFFFFF): superficie dominante. Cuerpo, nav sticky, paneles hero/servicios/proyectos/FAQ y hover de las filas de tabla sobre neblina. La marca vive *sobre* blanco.
- **Neblina** (#F4F6FA): papel azulado para las secciones «de oficina» — «Cómo trabajamos» (bajo la retícula de plot), «Precios», fondo de las figuras del carrusel y hover de las filas de servicios.
- **Tinta** (#111113): tipografía principal y el «campo invertido» de la lámina: footer completo en tinta, chips de lámina sobre las fotos (tinta/85) y overlay del lightbox (tinta/92). Es también el color de hover de inversión de los botones primarios.
- **Grafito** (#43464D): el texto secundario del cuerpo (descripciones de servicios, etapas, FAQ, notas de tabla) y los links de navegación; el tono secundario es siempre grafito — nunca tinta atenuada.

Capas de opacidad normativas (token base + mezcla, no colores nuevos): hairlines en tinta/10 (secciones) a tinta/25 (encabezado de tabla); bordes de controles y chips en tinta/15–tinta/20; etiquetas técnicas muted en tinta/60–tinta/70; chips sobre imagen en tinta/85; overlay del lightbox en tinta/92. Sobre campos de azul/tinta, los blancos van en white/60 (separador del marquee), white/70–80 (texto del footer), white/95 (sub del CTA) y rgba(255,255,255,0.10) para la retícula de la banda CTA (34px, capa al 60%).

`--color-blue-soft` (#E8EEFB) está declarado en el tema pero sin uso en el shipping actual — es una reserva. No se usa hasta que una iteración del mundo lo habilite explícitamente.

### Named Rules

**The One Blue Rule.** Un solo azul committed, el del logo (#3F6FD4). Cota Azul (#2B50AB) es *ese mismo* azul a temperatura de lectura sobre neblina y en micro-tipografía — no un segundo azul. Sin azules nuevos, sin acentos paralelos, sin degradados de nada.

**The Field-or-Accent Rule.** El azul o lleva un campo entero designado (cinta marquee, banda CTA final, volumen del plano) o marca acción/énfasis puntual (botón, palabra, link, marcador). Nunca es tinte de fondo decorativo ni un hover difuso.

## Typography

**Display Font:** Chakra Petch (400–700 vía next/font `--font-chakra`), sans-serif — cuadrada, esquinada, la voz CAD: cartelas, códigos, cotas, botones.
**Body Font:** Archivo (400–600 vía next/font `--font-archivo`), sans-serif — grotesca neutra y de baja voz para párrafos.
**Label/Mono:** no hay una cara de etiqueta separada — la etiqueta técnica es Chakra Petch en mayúsculas con tracking generoso.

**Character:** La pareja sostiene la tensión del mundo: Chakra Petch lleva el plano (titulares, numeración, chips, precios, botones); Archivo lleva el expediente de obra legible (descripciones, FAQ, notas). Toda palabra en mayúsculas es Chakra Petch; Archivo jamás hace labeling.

### Hierarchy

- **Display** (Chakra Petch 700, clamp(3.2rem, 7.4vw, 5.75rem), lh 0.94, ls −0.02em, uppercase): hero «PLANO. OBRA. ENTREGA.» (tercera línea en Azul Obra) y la escala interior del CTA final (clamp(2.6rem, 5.6vw, 4.5rem), lh 0.98). Reservado para el enunciado completo de la promesa.
- **Headline** (Chakra Petch 700, clamp(2.2rem, 4.6vw, 3.5rem) — variante interior clamp(2rem, 4.2vw, 3.2rem) en Proyectos, lh 1.02–1.04, ls −0.015em): H2 de sección, con la palabra clave final en Azul Obra.
- **Title** (Chakra Petch 700, 17–21px): título del H3 de familia (19/21px), pregunta de FAQ (semibold 17px y `lg`), nombre de obra en carrusel (15,5px), servicio en tabla (16,5px), cifra UF (18px bold tabular-nums).
- **Body** (Archivo 400, 14–17px, lh 1.625, grafito o tinta): párrafos en anchuras máximas normativas — hero 58ch, subs de sección 52ch, descripción de familia 48ch, etapa 34ch, respuesta FAQ 68ch, sub CTA 54ch, footer 44ch.
- **Label** (Chakra Petch 500–700, 11–13,5px, MAYÚSCULAS, tracking 0.06–0.22em): códigos de familia (12px, 0.16em), números de etapa (13px, 0.2em), encabezados de tabla (11px, 0.18em), chips de lámina («L-01», 11px, 0.16em), contador de carrusel (12px, 0.18em), quickfacts (11,5px, 0.1em), firma del CTA («ARQUITECTURA + CONSTRUCCIÓN · SANTIAGO, CHILE», 12,5px, 0.22em).

### Named Rules

**The Square Type Rule.** Toda etiqueta técnica, código de lámina, número de etapa, encabezado de tabla, chip y botón va en Chakra Petch, MAYÚSCULAS, tracking generoso (0.06–0.22em). Archivo nunca hace labeling ni display.

**The Cota Rule.** Las cifras de precios («20–25 UF/m²») van en Chakra Petch bold con `tabular-nums`; las filas marcadas (referencias llave en mano — `flag`) llevan Cota Azul en vez de tinta. La cifra tabular es la voz de la transparencia; nunca se estiliza como «marketing».

## Layout

Retícula editorial de ploteo sobre un contenedor único: `max-width: 1200px` con márgenes `padding-inline: 20px` móvil / `32px ≥768px`. Ritmo vertical de lámina: pad-block de `80px móvil / 96px ≥768px` en todas las secciones (CTA final: `96px / 128px ≥768px`); la página se apila y une con hairlines (`border-y` de tinta/10), como pliegos consecutivos — no cards separadas flotando.

- **Nav:** sticky `h-16` (64px) sobre papel, borde inferior tinta/10, `z-50`; links 14px grafito con hover azul. Bajo 768px, un segundo carril con scroll horizontal sin scrollbar (gap 20px, 13px) para las mismas anclas.
- **Rejilla de 12 columnas solo ≥1024px:** hero `7/5` con gap 24px; encabezados de sección `7/5` (título izquierda, sub derecha); FAQ `4/8`; footer `6/3/3`.
- **Fila de servicios (banda de familias):** `grid-cols-[80px_56px_1fr_1.15fr]` ≥768px — código | icono | título+desc | tags — con `border-t` de apertura al grupo y `border-b` por fila; pad-block 32/36px.
- **Etapas de proceso:** 4 columnas (`md:grid-cols-4`, gap 24px) sobre neblina con retícula de plot, encabezadas por una regla azul/25 que escala `scaleX(0→1)` en 1,4s al entrar en viewport.
- **Tabla de precios:** `width:100%`, `border-collapse`; columnas Servicio/Desde/Detalle (la nota se oculta <768px); hairline bajo encabezado tinta/25 y por fila tinta/10.
- **Carrusel:** track con `snap-x snap-mandatory`, gap 16px, figura a 86% móvil / 62% ≥640px / 44% ≥1024px; regla de progreso azul sobre hairline tinta/15; contador como nómina.
- **Retícula de ploteo (firma de fondo):** `.plot-grid-fine` dibuja la retícula de 17px con líneas de 1px al 6% de Azul Obra en paneles de planificación; el plano del hero usa su propio patrón SVG de 34px al 12%; la banda CTA usa retícula blanca de 34px al 10% (capa al 60%).
- **Quickfacts:** franja bajo el hero `border-t` tinta/10; ítems flex-wrap `justify-between`, `gap-x 32px / gap-y 10px`, con bullet cuadrado azul de 6px.
- **Anclajes:** cada sección con `scroll-mt-20` (80px) para compensar la nav sticky; `scroll-behavior: smooth` global (auto si el usuario pide reduced motion).
- **Breakpoints:** escala Tailwind por defecto en uso — sm 640px, md 768px, lg 1024px.

Máximos de lectura siempre en `ch`: 58 / 54 / 52 / 48 / 44 / 34 / 16 según bloque (ver Hierarchy).

## Elevation & Depth

**El sistema es plano por construcción: cero box-shadow en todo el repo** (verificado por búsqueda: ni una declaración). La profundidad sale de tres estratos, todos planos:

1. **Capas tonales de papel:** papel (#FFFFFF) → neblina (#F4F6FA) → tinta (#111113). La sección gira a neblina cuando el bloque es planificación («Cómo trabajamos», «Precios»); el footer baja a tinta como página inversa de la lámina.
2. **Bordes y hairlines:** 1px siempre; el nivel de profundidad lo dice la opacidad de la tinta (tinta/10 → tinta/25) y el cruzado de fronteras por hover.
3. **Permiso de elevar solo dos capas:** la nav sticky (`z-50`) y el lightbox portal (`z-100`). Nada más aplica z.

### Shadow Vocabulary

No aplicable — no hay sombras. La «sombra» del mundo es la capa tonal papel/neblina y el cruce de líneas de 1px.

### Named Rules

**The Flat Sheet Rule.** Ninguna sombra, blur ni glass: esto se imprime en ploteo. La profundidad se dibuja con capas de tono y líneas de 1px; jamás se inventa con luz difusa.

## Shapes

Esquinas rectas en todo el sistema — `border-radius: 0` sin excepciones en UI (la única anomalía legítima es el thumb del scrollbar del navegador, 8px, cosmético). El lenguaje de forma es **línea, no canto**: los bloques acumulan filas de lámina unidas por hairlines de 1px (tinta/10–tinta/25) en vez de separarse en cards con radios.

- **Trazado técnico:** todo SVG dibuja con `stroke-linecap: square`; el plano del hero usa widths de 2px (ejes) / 1,5px (cartela, sondas) / 1,25px (detalle); los iconos de servicio van a 1,75px con joins `miter` en currentColor.
- **Bordes de estado:** controles del carrusel y lightbox usan borde completo de 1px (tinta/20 sobre papel; white/30 sobre oscuro) que cambia de color en hover, sin sombra.
- **Chips y etiquetas:** cajitas cuadradas de 1px (tags con borde tinta/15; chips de lámina con fondo tinta/85 y texto blanco) — nunca pills, nunca radios suaves.

### Named Rules

**The No-Radius Rule.** border-radius: 0 en toda la UI. Si algo necesita esquina suave, el diseño está cambiando de mundo — el requisito se niega, no se doblega.

## Components

Cada pieza se lee como una línea de lámina: numeración, hairline, estados por color.

**The Reveal Unity Rule.** Todo entra a viewport con el mismo armado (`.reveal-armed`: opacity 0 + `translateY(16px)` → `.is-in` en 0,8s `cubic-bezier(0.16,1,0.3,1)`), con delays escalonados 60–220ms por `--rd` y disparo vía IntersectionObserver (threshold 0.18, rootMargin −6%).

**The Draw Order Rule.** Primero las líneas (`.trace`: dashoffset 1→0 en 1,15s, stagger 0–0,7s), luego el volumen (`.build`: scaleY 0.72→1 desde la base, ~1s), y el estado completo resuelto de una vez si el usuario pide `prefers-reduced-motion`.

### Buttons

- **Shape:** rectángulos de radio 0 con borde de 1px, Chakra Petch uppercase.
- **Primario (hero):** fondo Azul Obra + texto blanco (borde azul), padding 14px 24px, 15px/600/tracking 0.04em. **Hover:** inversión a tinta (bg + borde, texto blanco permanece) en `transition-colors` 300ms — el botón cambia de capa, no sube de nivel.
- **Primario (nav):** mismo azul, padding 8px 16px, 13px/600/tracking 0.06em. **Hover:** se vacía a papel con texto azul.
- **Inverso (sobre el campo azul, CTA final):** fondo papel + texto tinta, padding 16px 28px, 15px/700. **Hover:** inversión a tinta + texto blanco.
- **Link-regla («Ver proyectos»):** label técnico en tinta + regla de 1px × 24px que crece a 40px y pinta azul en hover (`transition-all` 300ms). CTAs secundarios neutros.
- **Focus:** `:focus-visible` global con `outline: 2px solid` Azul Obra, offset 3px; dentro del campo azul `#cotiza` el outline pasa a blanco.

### Marquee de servicios (signature band)

- **Estructura:** franja completa `bg-blue` con bordes `border-y` de Cota Azul; track duplicado (2 copias) para loop continuo.
- **Contenido:** 9 ítems (7 servicios + 2 promesas comerciales) en label Chakra 13,5px/600, uppercase, tracking 0.2em, blanco con separador «·» en white/60, `padding-inline: 24px` por ítem; `aria-hidden` porque los servicios ya viven en la sección de abajo.
- **Movimiento:** `translateX(-50%)` en 32s linear infinite; **pausa en hover** (`animation-play-state: paused`).
- **Reduced motion:** la banda queda estática y legible (animation: none).

### Quickfacts strip

- Franja bajo el hero con hairline superior tinta/10; ítems flex-wrap `justify-between`, `gap-x 32px / gap-y 10px`.
- Ítem: bullet cuadrado azul de 6px + label Chakra 11,5px/500 uppercase tracking 0.1em en grafito (plazos reales, cuotas con Transbank, garantía 3/5/10).

### Service family row

- **Shape:** fila full-width con grid `80px | 56px | 1fr | 1.15fr` (≥768px); hairline `border-b` tinta/10; pad-block 32/36px.
- **Anatomía:** código de familia (12px, 0.16em, tinta/60) · icono técnico 44px (stroke 1,75, tinta/70) · título Chakra 19/21px bold + descripción Archivo 14,5px máx-48ch · fila de tags chips 12px grafito con borde tinta/15.
- **Hover (fila entera):** fondo neblina; icono y código → Azul Obra; tags → borde blue/40 y texto tinta; todo en `transition-colors` 300ms. La fila se tiñe de neblina; no se levanta.
- **Entrada:** reveal escalonado por índice (delay `60ms × i`).

### Stage list (Cómo trabajamos)

- 4 columnas sobre neblina con retícula de plot; número «01»–«04» en Cota Azul 13px/700/tracking 0.2em; título Chakra 19px bold; descripción Archivo 14px máx-34ch.
- Regla medidora azul/25 de ancho completo que escala `scaleX(0→1)` en 1,4s `ease-trace` al entrar — la línea de cota del grupo.
- Entrada escalonada `110ms × i`.

### Price table

- Encabezado: label técnico 11px/600/uppercase/tracking 0.18em en grafito, con hairline inferior tinta/25.
- Filas: servicio Chakra 16,5px bold tinta · cifra UF Chakra 18px bold `tabular-nums` (tinta; Cota Azul en las filas marcadas llave en mano/estándar) · nota Archivo 14px grafito máx-52ch (oculta <768px); hairline tinta/10 entre filas.
- **Hover de fila:** fondo papel sobre la neblina de la sección — la fila «se blanquea» como hoja en la que se empieza a escribir.
- Pie: nota técnica 12,5px con link en Cota Azul subrayado (`underline-offset-4`) que pasa a tinta en hover.

### Carousel + lightbox (galería de láminas)

- **Figura:** panel con borde tinta/12 y fondo neblina; imagen `aspect-ratio: 4/3` con hairline inferior y `object-cover`; chip de lámina «L-01» sobre la esquina superior izquierda (fondo tinta/85, blanco 11px/700/tracking 0.16em); pie de figura con nombre Chakra 15,5px bold + chip tag técnico.
- **Scroll:** `snap-x snap-mandatory`; figuras a 86% / 62% (≥640) / 44% (≥1024); contador «01 / 38» como nómina 12px/600/tracking 0.18em; regla de progreso azul que ajusta su ancho en 500ms ease-settle sobre hairline tinta/15.
- **Controles:** botones cuadrados de 44px, borde tinta/20, icono de trazo 1,75; hover borde e icono azul; `disabled` con opacidad 30% y sin hover.
- **Hover de imagen:** `scale(1.03)` en 500ms ease-settle y `cursor-zoom-in`.
- **Lightbox (portal a `body`):** overlay tinta/92 a pantalla completa (`z-100`); imagen `object-contain` máx 1100px × 80vh; chip de lámina tinta/85 con contador; controles con borde white/30 que se rellenan de papel en hover (fondo blanco + texto tinta); botón de cierre de 48px en la esquina; **Escape cierra, ←/→ navegan, scroll de body bloqueado y foco al botón de cerrar**.

### FAQ accordion

- Filas con hairlines tinta/10; pregunta en Chakra 17px (semibold, `lg`) tinta; icono más/menos de 16px dibujado con dos reglas de 2px (la vertical se colapsa con `scaleY(0)` al abrir), tinta/60 → Azul Obra en hover y abierto.
- **Panel:** grilla CSS `grid-rows-[0fr] ↔ [1fr]` en 500ms ease-settle (slide sin height fija); respuesta Archivo 15,5px máx-68ch.
- **Estados:** `aria-expanded`/`aria-controls`, panel cerrado con `inert` (no enfocable), primera pregunta abierta por defecto.
- **Reduced motion:** la transición se congela (`transition: none`); el contenido aparece/desaparece directo.

### Plano hero (signature viva de lámina)

- SVG `680×560` sobre papel con su patrón de retícula propio (líneas Azul Obra de 34px, capa al 12%).
- **Trazado:** cada path con `pathLength=1`, `stroke-dasharray: 1 → dashoffset: 0` en 1,15s `cubic-bezier(0.77, 0, 0.18, 1)`, delays escalonados 0–0,7s; tinta a 2px para ejes, 1,5/1,25px para detalle; sondas de registro y cotas en Azul Obra (ticks de strokes inclinados de 6–8px).
- **Relleno:** el polígono del volumen va en `fill` Azul Obra y entra con `scaleY(0.72 → 1)` desde su base (1s ease-settle) a los 1,05s; la cartela «P-00 · PROYECTO INTEGRAL / ESC 1:100 · SANTIAGO, CL / CONSTRUCTORA P.G» en Chakra 10px/tracking 0.12em entra a 1,2s; cotas «12 000 / 5 600» en Azul Obra 12px/tracking 0.14em a 1,15s.
- **Reduced motion:** todo el estado final resuelto de una vez — lámina ya dibujada y rellena.

### Navigation & footer

- Nav sticky con el carril móvil ya descrito (en Layout). Footer = hoja en tinta: logo sobre cuadrado blanco 44px (padding 6px), wordmark Chakra 16px bold tracking 0.08em uppercase, texto Archivo en white/70–80, etiquetas de columna 12px/600/tracking 0.2em white/60, barra final con hairline white/15 y texto 13px white/70.

## Do's and Don'ts

### Do:

- **Do** usar papel blanco como superficie dominante y neblina (#F4F6FA) para las secciones de planificación — con retícula de ploteo de 17px al 6% cuando el bloque sea técnico.
- **Do** mantener el azul committed (#3F6FD4) en campos enteros designados (marquee, banda CTA, volumen del plano) y acción puntual — con Cota Azul (#2B50AB) para micro-texto sobre neblina y cifras marcadas.
- **Do** apilar y separar con hairlines de 1px (tinta/10 base, tinta/25 en headers de tabla) y capas tonales papel/neblina/tinta — la profundidad es de capa, no de luz.
- **Do** escribir toda etiqueta técnica en Chakra Petch uppercase con tracking 0.06–0.22em, y toda cifra UF con `tabular-nums`.
- **Do** estados de hover por color (background/borde/texto a 300ms) y `:focus-visible` con `outline: 2px solid` Azul Obra offset 3px (blanco dentro del campo azul).
- **Do** mantener una firma de animación compartida: reveal unificado `translateY(16px)` 0,8s ease-settle con delays escalonados; trazado de lámina en `cubic-bezier(0.77, 0, 0.18, 1)`.
- **Do** resolver todo el estado visual con `prefers-reduced-motion`: sin animaciones, lámina ya trazada y rellena, marquee estático y snap-scroll en «auto».

### Don't:

- **Don't** sombras, blur, backdrop-filter o glass — esa luz no existe en este mundo.
- **Don't** border-radius (esquinas rectas; el único radio es el scrollbar cosmético del navegador).
- **Don't** gradientes decorativos: el único `linear-gradient` legítimo es el que *dibuja retículas de 1px* (plot-grid) — nunca un wash de color.
- **Don't** inventar un segundo azul, acento secundario, rojos/verdes de estado o grises cálidos — la neutralidad del sistema es fría (hue ~258–285°).
- **Don't** usar blue-soft (#E8EEFB) sin que una iteración del mundo lo habilite primero (hoy es una reserva sin uso).
- **Don't** estilizar cifras o plazos como «marketing» — los precios y garantías se presentan crudos, en tinta y tablas con marca.
- **Don't** fabricar métricas de experiencia, testimonios ni badges visuales de confianza — el sistema no muestra evidencia que no sea real (PRODUCT.md: «solo evidencia real»).
