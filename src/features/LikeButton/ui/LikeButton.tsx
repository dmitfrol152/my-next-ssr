"use client";

import { useState } from "react";
import styles from "./LikeButton.module.scss";

export default function LikeButton() {
  const [likeNumber, setLikeNumber] = useState(0);

  return (
    <div>
      <button
        className={styles.likeButton}
        onClick={() => setLikeNumber((prev) => prev + 1)}
      >
        👍 Лайк
      </button>
      <span className={styles.likeButton__count}>{likeNumber}</span>
    </div>
  );
}
