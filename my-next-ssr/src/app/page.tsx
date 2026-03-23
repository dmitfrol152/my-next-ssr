import { ArticleList } from "@/widgets/article-list/ui/article-list";
import styles from "./page.module.scss";
import { TrendingBlock } from "@/widgets/trending-block/ui/trending-block";
import { getDevArticlesAll } from "@/shared/api/devto";

export default async function HomePage() {
  const articles = await getDevArticlesAll();

  return (
    <main className={styles.homePage}>
      <h1>DevLog Hub</h1>
      <ArticleList articles={articles} />
      <TrendingBlock />
    </main>
  );
}
