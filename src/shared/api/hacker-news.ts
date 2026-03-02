import { HackerNewsTypes } from "./model/types";

const HN_API_BASE = "https://hacker-news.firebaseio.com/v0";

export async function getTopStoriesIds(): Promise<number[]> {
  const response = await fetch(`${HN_API_BASE}/topstories.json`, {
    cache: "no-cache",
  });

  if (!response.ok) throw new Error("Error: response is failed topstories");

  return response.json();
}

export async function getStoryById(
  id: number,
): Promise<HackerNewsTypes | null> {
  const response = await fetch(`${HN_API_BASE}/item/${id}.json`, {
    cache: "no-cache",
  });

  if (!response.ok) throw new Error("Error: response is failed storyId");

  return response.json();
}

export async function getStoriesTop(limit: number = 5) {
  const ids = await getTopStoriesIds();
  const slicedIds = ids.slice(0, limit);

  const stories = await Promise.all(
    slicedIds.map(async (id) => {
      try {
        const story = await getStoryById(id);
        return story;
      } catch {
        return null;
      }
    }),
  );

  return stories.filter((story): story is HackerNewsTypes => Boolean(story));
}
