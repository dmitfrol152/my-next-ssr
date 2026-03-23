"use client";

import { useState } from "react";
import styles from "./create-article-form.module.scss";
import { createArticleAction } from "../model/actions";

export function CreateArticleForm() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const resultEdit = await createArticleAction(formData);

    if (resultEdit instanceof Error) {
      setError(resultEdit.message);
    } else {
      setError(null);
    }
  }

  return (
    <div className={styles.createArticleForm}>
      {error && (
        <span className={styles.createArticleForm__error}>{error}</span>
      )}
      <form className={styles.createArticleForm__label} action={handleSubmit}>
        <input
          className={styles.createArticleForm__input}
          name="title"
          placeholder="Название"
        />
        <textarea
          className={styles.createArticleForm__textarea}
          name="description"
          placeholder="Описание"
        />
        <button className={styles.createArticleForm__button} type="submit">
          Создать
        </button>
      </form>
    </div>
  );
}
