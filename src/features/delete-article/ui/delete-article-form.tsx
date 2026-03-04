"use client";

import { useState } from "react";
import styles from "./delete-article-form.module.scss";
import { deleteArticle } from "../model/actions";

export function DeleteArticleFrom({ id }: { id: string }) {
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    const resultDelete = await deleteArticle(id);

    if (resultDelete instanceof Error) {
      setError(resultDelete.message);
      return;
    }

    setError(null);
  }

  return (
    <div className={styles.deleteArticle}>
      {error && <div className={styles.deleteArticle__error}>{error}</div>}
      <button className={styles.deleteArticle__button} onClick={handleDelete}>
        Удалить статью
      </button>
    </div>
  );
}
