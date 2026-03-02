"use server";

import { mockArticles } from "@/entities/article/model/mock";
import { redirect } from "next/navigation";

export async function createArticleAction(formData: FormData) {
  const title = String(formData.get("title") || "");
  const description = String(formData.get("description") || "");
  const tagsRaw = String(formData.get("tags") || "");

  if (!title.trim()) {
    throw new Error("Название обязательно");
  }

  const tags = tagsRaw
    .split(",")
    .map((item) => item.trim())
    .filter((item) => Boolean(item));

  const newArticle = {
    id: String(Date.now()),
    title,
    description,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    author: "Dmitry Dev",
    createdAt: new Date().toISOString(),
    tags,
  };

  mockArticles.unshift(newArticle);

  redirect(`/article/${newArticle.slug}`);
}
