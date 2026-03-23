import { DevTypes } from "./model/types";

export async function getDevArticlesAll(limit = 10): Promise<DevTypes[]> {
  const response = await fetch(
    `https://dev.to/api/articles?per_page=${limit}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) throw new Error("Error: faild to fetch dev all");

  return response.json();
}

export async function getDevArticlesId(id: string): Promise<DevTypes> {
  console.log(id);
  const response = await fetch(`https://dev.to/api/articles/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Error: faild to fetch dev id");

  return response.json();
}
