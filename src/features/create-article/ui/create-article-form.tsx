"use client";

import { useState } from "react";
import styles from "./create-article-form.module.scss";
import { createArticleAction } from "../model/actions";

export function CreateArticleForm() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const resultCreate = await createArticleAction(formData);

    if (resultCreate instanceof Error) {
      setError(resultCreate.message);
      return;
    }

    setError(null);
  }

  // async function handleSubmit(formData: FormData) {
  //   setError(null);

  //   try {
  //     await createArticleAction(formData);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError("Ошибка отправки формы");
  //     }
  //   }
  // }

  return (
    <form action={handleSubmit} className={styles.createArticleForm}>
      {error && <div className={styles.createArticleForm__error}>{error}</div>}

      <label className={styles.createArticleForm__label}>
        Название
        <input name="title" className={styles.createArticleForm__input} />
      </label>

      <label className={styles.createArticleForm__label}>
        Описание
        <textarea
          name="description"
          className={styles.createArticleForm__textarea}
        />
      </label>

      <label className={styles.createArticleForm__label}>
        Теги (через запятую)
        <input name="tags" className={styles.createArticleForm__input} />
      </label>

      <button type="submit" className={styles.createArticleForm__button}>
        Создать статью
      </button>
    </form>
  );
}
