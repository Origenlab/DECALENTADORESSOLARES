import { getCollection, type CollectionEntry } from "astro:content";

const staticUrls = ["/", "/productos", "/servicios", "/blog"];

const toUrlEntry = (path: string) =>
  `<url><loc>https://decalentadoressolares.com${path}</loc></url>`;

export async function GET() {
  const products: CollectionEntry<"productos">[] = await getCollection("productos");
  const posts: CollectionEntry<"blog">[] = await getCollection("blog");
  const publishedPosts = posts.filter((entry: CollectionEntry<"blog">) => !entry.data.draft);

  const dynamicUrls = [
    ...products.map((item: CollectionEntry<"productos">) => `/productos/${item.slug}`),
    ...publishedPosts.map((item: CollectionEntry<"blog">) => `/blog/${item.slug}`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
    ...staticUrls,
    ...dynamicUrls
  ]
    .map(toUrlEntry)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
