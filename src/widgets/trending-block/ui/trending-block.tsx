import { getStoriesTop } from "@/shared/api/hacker-news";
import styles from "./trending-block.module.scss";

export async function TrendingBlock() {
  const stories = await getStoriesTop();

  return (
    <aside className={styles.trendingBlock}>
      <h2 className={styles.trendingBlock__title}>Trending на Hacker News</h2>
      <div className={styles.trendingBlock__list}>
        {stories.map((story) => (
          <div key={story.id} className={styles.trendingBlock__item}>
            <a
              href={
                story.url ?? `https://news.ycombinator.com/item?id=${story.id}`
              }
              target="_blank"
              rel="noreferrer"
              className={styles.trendingBlock__link}
            >
              {story.title}
            </a>
            <div className={styles.trendingBlock__meta}>
              {story.score} points · {story.by}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
