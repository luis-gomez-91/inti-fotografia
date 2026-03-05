# Inti Fotografía

Landing de **Inti Fotografía** — sitio web para un estudio de fotografía en Guayaquil, Ecuador. Bodas, retratos, eventos y sesiones familiares.

## Stack

- **[Astro](https://astro.build)** 4
- **[Tailwind CSS](https://tailwindcss.com)** 3
- Contenido en Markdown (Content Collections)

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Genera el sitio estático |
| `npm run preview` | Previsualiza la build  |

La build se genera en `dist/`.

## Estructura del proyecto

```
src/
├── components/     # Header, Footer, HeroCarousel
├── content/
│   ├── config.ts   # Schema de la colección galería
│   └── galeria/    # Fotos en .md (frontmatter + imagen)
├── layouts/
│   └── Layout.astro
├── pages/          # index, planes, galeria, contacto
├── styles/
│   └── global.css
└── env.d.ts
```

## Páginas

- **Inicio**: carrusel hero, servicios (Bodas, Retratos, Eventos), grid de fotos destacadas, CTA.
- **Planes**: tarjetas de precios (Esencial, Completo, Premium) con altura mínima 100vh menos nav y contenido centrado.
- **Galería**: grid tipo masonry, filtros por categoría (Todas, Destacadas, Bodas, Retratos, Familia, Eventos, etc.), lightbox con título y descripción al abrir la foto.
- **Contacto**: enlaces a WhatsApp, Instagram y correo.

## Contenido: galería

Las fotos se gestionan con archivos Markdown en `src/content/galeria/`. Cada archivo tiene frontmatter con:

- **Obligatorios**: `titulo`, `imagen`, `alt`
- **Opcionales**: `descripcion`, `fecha`, `orden`, `lugar`, `tipo`, `destacada`

El campo `tipo` define el filtro en la galería: `boda`, `retrato`, `familia`, `eventos`, `bautizo`, `cumple`. Si pones `destacada: true`, la foto aparece en el carrusel de la home y en el filtro “Destacadas”.

Más detalles en `src/content/galeria/_README.md`.

## Configuración

- **Contacto**: en la página de contacto y en el footer se usan placeholders (WhatsApp, Instagram, correo). Sustituye por los datos reales en `src/pages/contacto.astro` y `src/components/Footer.astro`.
- **Estilos**: paleta “inti” (grises/stone) en `tailwind.config.mjs` y `src/styles/global.css`.

## Licencia

Uso del proyecto según lo acordado con el titular.
