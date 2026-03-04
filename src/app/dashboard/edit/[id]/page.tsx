import { getArticleById } from "@/entities/article/model/selectors";
import { Props } from "./model/types";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import { EditArticleForm } from "@/features/edit-article/ui/edit-article-form";

export default async function editArtilePage({ params }: Props) {
  const { id } = await params;

  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.editPage}>
      <h1 className={styles.editPage__title}>Редактировать статью</h1>
      <EditArticleForm article={article} />
    </main>
  );
}
