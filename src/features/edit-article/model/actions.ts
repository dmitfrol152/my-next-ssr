"use server";

import { mockArticles } from "@/entities/article/model/mock";
import { redirect } from "next/navigation";

export async function editArticleForm(id: string, formData: FormData) {
  const title = String(formData.get("title") || "");
  const description = String(formData.get("description") || "");
  const tagsRaw = String(formData.get("tags") || "");

  if (!title.trim()) {
    return new Error("Название обязательно");
  }

  const tags = tagsRaw
    .split(",")
    .map((item) => item.trim())
    .filter((item) => Boolean(item));

  const index = mockArticles.findIndex((item) => item.id === id);

  if (index === -1) {
    return new Error("Статья не найдена");
  }

  const oldArticle = mockArticles[index];

  const editMockArticle = (mockArticles[index] = {
    ...oldArticle,
    title,
    description,
    tags,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
  });

  redirect(`/article/${encodeURIComponent(mockArticles[index].slug)}`);
}
