"use server";

import { addPost } from "@/shared/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;

  addPost({
    id: Date.now().toString(),
    title,
    excerpt: description,
    content: content,
  });

  revalidatePath("/");
}
