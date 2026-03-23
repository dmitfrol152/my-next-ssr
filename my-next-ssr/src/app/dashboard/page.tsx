import { getPosts } from "@/shared/api/jsonplaceholder";
import styles from "./page.module.scss";

export default async function DashboardPage() {
  const posts = await getPosts();

  if (!posts) {
    return "Empty";
  }

  return (
    <main className={styles.dashboardPage}>
      <h1 className={styles.dashboardPage__title}>Мои статьи</h1>
      <ul className={styles.dashboardPage__list}>
        {posts.slice(0, 10).map((post) => (
          <li className={styles.dashboardPage__item} key={post.id}>
            <a
              className={styles.dashboardPage__link}
              href={`/dashboard/edit/${post.id}`}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
