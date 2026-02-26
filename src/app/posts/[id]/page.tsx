import { getPostById } from "@/entities/post/api/getPostById";
import LikeButton from "@/features/LikeButton/ui/LikeButton";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <LikeButton />
    </main>
  );
}
