import { getPostById } from "@/entities/post/api/getPostById";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  if (!post) notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
