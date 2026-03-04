"use server";

import { mockArticles } from "@/entities/article/model/mock";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteArticle(id: string) {
  const finedIndex = mockArticles.findIndex((item) => item.id === id);

  if (finedIndex === -1) {
    return new Error("Не найдено");
  }

  mockArticles.splice(finedIndex, 1);

  redirect("/");
}
