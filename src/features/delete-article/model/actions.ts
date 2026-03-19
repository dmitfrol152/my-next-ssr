"use server";

import { deletePost } from "@/shared/api/jsonplaceholder";
import { redirect } from "next/navigation";

export async function deleteArticle(id: number) {
  try {
    await deletePost(id);
  } catch (error) {
    return error;
  }

  redirect(`/dashboard`);
}
