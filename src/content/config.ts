import { defineCollection, z } from 'astro:content';

const galeriaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().optional(),
    imagen: z.string(),
    alt: z.string(),
    fecha: z.coerce.date().optional(),
    orden: z.number().optional(),
    lugar: z.string().optional(),
    destacada: z.boolean().optional(),
    tipo: z.string().optional(), // boda, retrato, familia, eventos, bautizo, cumple, etc.
  }),
});

export const collections = {
  galeria: galeriaCollection,
};
