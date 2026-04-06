import Link from "next/link";
import React from "react";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "ru" }>;
}) {
  const articleId = (await params).articleId;
  const { lang = "en" } = await searchParams;

  console.log(articleId);

  return (
    <div>
      <h1>Article news {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Englih</Link>
        <Link href={`/articles/${articleId}?lang=ru`}>Russia</Link>
      </div>
    </div>
  );
}
