import { getPost } from "@/shared/lib/db";
import { Post } from "../model/types";

export async function getPostById(id: string): Promise<Post | null> {
  const post = getPost(id);
  return post || null;
}
