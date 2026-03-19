export type HackerNewsTypes = {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
};

export type DevTypes = {
  id: number;
  title: string;
  description: string;
  slug: "dont-worry-they-havent-figured-it-out-either";
  published_timestamp: string;
  tag_list: string[];
  body_html: string;
};

export type JsonplaceholderType = {
  id: number;
  title: string;
  body: string;
};
