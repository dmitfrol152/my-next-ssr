import { getAllPosts } from "@/shared/lib/db";
import { Post } from "../model/types";

export async function getPosts(): Promise<Post[]> {
  // const res = await fetch("http://localhost:3000/api/posts", {
  //   cache: "no-cache",
  // });

  // if (!res.ok) {
  //   throw new Error("Error is fetch data");
  // }

  // return res.json();

  return getAllPosts();
}
