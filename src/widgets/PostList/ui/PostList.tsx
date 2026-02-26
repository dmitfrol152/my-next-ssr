import { Post } from "@/entities/post/model/types";
import Link from "next/link";
import styles from "./PostList.module.scss";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className={styles.postList}>
      {posts.map((post: Post) => (
        <li key={post.id} className={styles.postList__item}>
          <Link href={`/posts/${post.id}`}>
            <h2 className={styles.postList__title}>{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
