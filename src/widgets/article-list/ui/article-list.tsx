import Link from "next/link";
import { Props } from "../model/types";
import styles from "./article-list.module.scss";

export function ArticleList({ articles }: Props) {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <article key={article.id} className={styles.articleList__item}>
          <h3 className={styles.articleList__title}>
            <Link href={`/article/${article.id}`}>{article.title}</Link>
          </h3>
          <div className={styles.articleList__meta}>
            {new Date(article.published_timestamp).toLocaleDateString("ru-RU")}
          </div>
          <p className={styles.articleList__description}>
            {article.description}
          </p>
          <div className={styles.articleList__tags}>
            {article.tag_list.map((tag) => (
              <span key={tag} className={styles.articleList__tag}>
                #{tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
