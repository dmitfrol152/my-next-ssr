import { JsonplaceholderType } from "./model/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<JsonplaceholderType[] | undefined> {
  try {
    const response = await fetch(`${BASE_URL}/posts`);

    if (!response.ok)
      throw new Error("Error: response is faild get dada fetch");

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPost(
  id: string,
): Promise<JsonplaceholderType | undefined> {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);

    if (!response.ok)
      throw new Error("Error: response is faild get data id fetch");

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(data: JsonplaceholderType) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updatePost(data: JsonplaceholderType) {
  const { title, body } = data;
  try {
    const response = await fetch(`${BASE_URL}/posts/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) throw new Error("Error: update response is failed");

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deletePost(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error: delete response is failed");

    const result = await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
