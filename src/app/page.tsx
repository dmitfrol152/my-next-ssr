import { getPosts } from "@/entities/post/api/getPosts";
import { PostList } from "@/widgets/PostList/ui/PostList";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Tech Blog</h1>
      <PostList posts={posts} />
    </main>
  );
}
