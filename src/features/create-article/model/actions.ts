"use server";

import { createPost } from "@/shared/api/jsonplaceholder";
import { redirect } from "next/navigation";

export async function createArticleAction(formData: FormData) {
  const title = formData.get("title")?.toString() || "Без названия";
  const body = formData.get("description")?.toString() || "Без описания";

  try {
    await createPost({ id: Date.now(), title, body });
  } catch (error) {
    return error;
  }

  redirect(`/dashboard`);
}
