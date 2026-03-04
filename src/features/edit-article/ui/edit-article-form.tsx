"use client";

import { Article } from "@/entities/article/model/types";
import { useState } from "react";
import { editArticleForm } from "../model/actions";
import styles from "./edit-article-form.module.scss";

export function EditArticleForm({ article }: { article: Article }) {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const resultEdit = await editArticleForm(article.id, formData);

    if (resultEdit instanceof Error) {
      setError(resultEdit.message);
      return;
    }

    setError(null);

    // router.push(`/article/${encodeURIComponent(resultEdit.slug)}`);
    // if (resultEdit.status)

    // } catch (error) {
    //   if (error instanceof Error) {
    //     setError(error.message);
    //   } else {
    //     setError("Ошибка отправки формы");
    //   }
    // }
    // redirect(`/article/${encodeURIComponent(resultEdit.slug)}`);
  }

  return (
    <form action={handleSubmit} className={styles.editArticle}>
      {error && <div className={styles.editArticle__error}>{error}</div>}
      <label className={styles.editArticle__label}>
        Название
        <input
          name="title"
          defaultValue={article.title}
          className={styles.editArticle__input}
        />
      </label>
      <label className={styles.editArticle__label}>
        Описание
        <textarea
          name="description"
          defaultValue={article.description}
          className={styles.editArticle__textarea}
        />
      </label>
      <label className={styles.editArticle__label}>
        Теги (через запятую)
        <input
          name="tags"
          defaultValue={article.tags.join(", ")}
          className={styles.editArticle__input}
        />
      </label>
      <button type="submit" className={styles.editArticle__button}>
        Сохранить изменения
      </button>
    </form>
  );
}
