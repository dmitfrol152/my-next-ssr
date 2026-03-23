"use server";

import { updatePost } from "@/shared/api/jsonplaceholder";
import { redirect } from "next/navigation";

export async function editArticleForm(id: number, formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const body = formData.get("description")?.toString() || "";
  try {
    await updatePost({ id, title, body });
  } catch (error) {
    return error;
  }

  redirect(`/dashboard`);
}
