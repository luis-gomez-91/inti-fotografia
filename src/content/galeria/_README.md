# Galería — contenido en Markdown

Cada foto es un archivo `.md` en esta carpeta. El título y la descripción se muestran solo al abrir la foto en el lightbox.

| Campo         | Obligatorio | Descripción |
|---------------|-------------|-------------|
| `titulo`      | Sí          | Título de la foto (visible en el lightbox) |
| `imagen`      | Sí          | URL o ruta de la imagen (ej. `/images/galeria/foto.jpg`) |
| `alt`         | Sí          | Texto alternativo para accesibilidad |
| `descripcion` | No          | Pie de foto (visible en el lightbox) |
| `fecha`       | No          | Fecha del reportaje (formato YYYY-MM-DD) |
| `orden`       | No          | Número para ordenar en la galería (menor = primero) |
| `lugar`       | No          | Lugar o ubicación del reportaje |
| `tipo`        | No          | Categoría para filtrar: `boda`, `retrato`, `familia`, `eventos`, `bautizo`, `cumple` |
| `destacada`   | No          | `true` si quieres usarla en el carrusel de inicio (opcional) |

Ejemplo mínimo:

```yaml
---
titulo: "Mi foto"
imagen: "/images/galeria/foto.jpg"
alt: "Descripción de la imagen"
---
```

Puedes añadir más campos al schema en `src/content/config.ts` (colección `galeria`) si necesitas algo extra.
