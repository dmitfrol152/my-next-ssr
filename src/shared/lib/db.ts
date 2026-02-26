import { Post } from "@/entities/post/model/types";

let POSTS: Post[] = [
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

export function getAllPosts() {
  return POSTS;
}

export function getPost(id: string) {
  return POSTS.find((item) => item.id === id);
}

export function addPost(post: Post) {
  POSTS.push(post);
}
