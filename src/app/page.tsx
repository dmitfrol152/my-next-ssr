import { getPosts } from "@/entities/post/api/getPosts";
import { createPost } from "@/features/posts/actions/createPost";
import { PostList } from "@/widgets/PostList/ui/PostList";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Tech Blog</h1>
      <PostList posts={posts} />
      <div>
        <form action={createPost}>
          <input type="text" name="title" placeholder="Ввдите заголовок" />
          <input type="text" name="description" placeholder="Ввдите описание" />
          <input type="text" name="content" placeholder="Ввдите контент" />
          <button type="submit">Создать</button>
        </form>
      </div>
    </main>
  );
}
