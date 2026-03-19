import { Props } from "./model/types";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import { EditArticleForm } from "@/features/edit-article/ui/edit-article-form";
import { getPost } from "@/shared/api/jsonplaceholder";
import { DeleteArticleFrom } from "@/features/delete-article/ui/delete-article-form";
import { CreateArticleForm } from "@/features/create-article/ui/create-article-form";

export default async function editArtilePage({ params }: Props) {
  const { id } = await params;

  const article = await getPost(id);

  if (!article) {
    notFound();
  }

  return (
    <main className={styles.editPage}>
      <h2 className={styles.editPage__title}>Создать статью</h2>
      <CreateArticleForm />
      <h2 className={styles.editPage__title}>Редактировать статью</h2>
      <EditArticleForm article={article} />
      <h2 className={styles.editPage__title}>Удалить статью</h2>
      <DeleteArticleFrom id={article.id} />
    </main>
  );
}
