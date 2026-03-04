import { getArticleBySlug } from "@/entities/article/model/selectors";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import type { PageProps } from "./types";
import Link from "next/link";
import { DeleteArticleFrom } from "@/features/delete-article/ui/delete-article-form";

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.articleSlug}>
      <article className={styles.articleSlug__article}>
        <h1 className={styles.articleSlug__title}>{article.title}</h1>
        <div className={styles.articleSlug__actions}>
          <Link
            className={styles.articleSlug__editLink}
            href={`/dashboard/edit/${article.id}`}
          >
            Редактировать
          </Link>
          <DeleteArticleFrom id={article.id} />
          <div className={styles.articleSlug__meta}></div>
          {article.author}{" "}
          {new Date(article.createdAt).toLocaleDateString("ru-RU")}
        </div>
        <div className={styles.articleSlug__tags}>
          {article.tags.map((tag) => (
            <span key={tag} className={styles.articleSlug__tag}>
              #{tag}
            </span>
          ))}
        </div>
        <section className={styles.articleSlug__content}>
          <p>
            Здесь позже будет полноценный контент статьи, который мы будем
            хранить в данных или получать из API.
          </p>
        </section>
      </article>
    </main>
  );
}
