import { CreateArticleForm } from "@/features/create-article/ui/create-article-form";
import styles from "./page.module.scss";

export default function DashboardPage() {
  return (
    <main className={styles.dashboardPage}>
      <h1 className={styles.dashboardPage__title}>Создать статью</h1>
      <CreateArticleForm />
    </main>
  );
}
