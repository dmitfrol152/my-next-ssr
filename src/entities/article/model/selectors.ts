import { mockArticles } from "./mock";
import { Article } from "./types";

export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find((item) => item.slug === slug);
}
