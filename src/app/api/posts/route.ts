import { NextResponse } from "next/server";
import type { Post } from "@entities/post/model/types";

const POSTS: Post[] = [
  {
    id: "1",
    title: "Первый пост",
    excerpt: "Описание 1",
    content: "Контент 1",
  },
  {
    id: "2",
    title: "Второй пост",
    excerpt: "Описание 2",
    content: "Контент 2",
  },
];

export async function GET() {
  return NextResponse.json(POSTS);
}
