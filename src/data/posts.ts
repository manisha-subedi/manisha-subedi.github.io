import { getCollection } from "astro:content";

// newest first. hidden posts keep their page but stay off the list
export async function getPosts() {
  const posts = (await getCollection("blog")).filter((p) => !p.data.hidden);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function monthYear(date: Date) {
  return date.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
