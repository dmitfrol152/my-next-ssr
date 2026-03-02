import { Article } from "./types";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Введение в SSR с Next.js",
    description: "Разбираем, как работает серверный рендеринг в App Router.",
    slug: "intro-to-nextjs-ssr",
    author: "Dmitry Dev",
    createdAt: "2025-02-01T10:00:00.000Z",
    tags: ["nextjs", "ssr", "react"],
  },
  {
    id: "2",
    title: "FSD-архитектура на фронтенде",
    description: "Как структурировать проект, чтобы не утонуть в хаосе.",
    slug: "fsd-architecture-overview",
    author: "Dmitry Dev",
    createdAt: "2025-02-05T12:30:00.000Z",
    tags: ["architecture", "fsd"],
  },
];
