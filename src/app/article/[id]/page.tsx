import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import type { PageProps } from "./types";
import { getDevArticlesId } from "@/shared/api/devto";

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;

  const article = await getDevArticlesId(id);

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.articleSlug}>
      <h1 className={styles.articleSlug__title}>{article.title}</h1>
      <p className={styles.articleSlug__description}>{article.description}</p>
      <div
        className={styles.articleSlug__content}
        dangerouslySetInnerHTML={{ __html: article.body_html }}
      />
    </main>
  );
}
