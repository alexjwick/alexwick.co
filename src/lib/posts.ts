import { getCollection } from "astro:content";

// Drafts show up in `npm run dev` but are left out of production builds.
export async function getPosts() {
  const posts = await getCollection("writing", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Dates in frontmatter are parsed as UTC midnight, so format them in UTC too.
export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
