import { defineCollection, z } from "astro:content";

const productosCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    price: z.number().optional(),
    features: z.array(z.string()),
    category: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(999)
  })
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  productos: productosCollection,
  blog: blogCollection
};
