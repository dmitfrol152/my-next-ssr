import { ArticleList } from "@/widgets/article-list/ui/article-list";
import styles from "./page.module.scss";
import { mockArticles } from "@/entities/article/model/mock";
import { TrendingBlock } from "@/widgets/trending-block/ui/trending-block";

export default function HomePage() {
  const articles = mockArticles;

  return (
    <main className={styles.homePage}>
      <section className={styles.homePage__hero}>
        <h1 className={styles.homePage__title}>DevLog Hub</h1>
        <p className={styles.homePage__subtitle}>
          Платформа статей и заметок для разработчиков с SSR, формами и
          публичными API.
        </p>
      </section>
      <section className={styles.homePage__section}>
        <h2 className={styles.homePage__sectionTitle}>Последние статьи</h2>
        <ArticleList articles={articles} />
      </section>
      <section className={styles.homePage__section}>
        <TrendingBlock />
      </section>
    </main>
  );
}
