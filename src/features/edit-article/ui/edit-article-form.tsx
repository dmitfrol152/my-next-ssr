"use client";

import { useState } from "react";
import { editArticleForm } from "../model/actions";
import styles from "./edit-article-form.module.scss";
import { JsonplaceholderType } from "@/shared/api/model/types";

export function EditArticleForm({ article }: { article: JsonplaceholderType }) {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const resultEdit = await editArticleForm(article.id, formData);

    if (resultEdit instanceof Error) {
      setError(resultEdit.message);
    } else {
      setError(null);
    }
  }

  return (
    <div className={styles.editArticle}>
      {error && <span className={styles.editArticle__error}>{error}</span>}
      <form className={styles.editArticle__label} action={handleSubmit}>
        <input
          className={styles.editArticle__input}
          name="title"
          defaultValue={article.title}
        />
        <textarea
          className={styles.editArticle__textarea}
          name="description"
          defaultValue={article.body}
        />
        <button className={styles.editArticle__button} type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}
