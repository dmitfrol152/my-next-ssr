import { Post } from "../model/types";

export async function getPostById(id: string): Promise<Post | null> {
  const res = await fetch("https://localhost:3000/api/posts", {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Error fetch data");

  const posts = await res.json();
  return posts.find((item: Post) => item.id === id) || null;
}
