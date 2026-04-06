import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link href="/blog">Go to BLOG</Link>
        <Link href="/products">Go to PRODUCTS</Link>
        <Link href="/counter">Go to COUNTER</Link>
        <Link href="/docs">Go to DOCS</Link>
        <Link href="/about">Go to ABOUT</Link>
        <Link href="/profile">Go to PROFILE</Link>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Link href="/articles/news-123?lang=en">Read in En</Link>
          <Link href="/articles/news-123?lang=ru">Read in Ru</Link>
        </div>
      </div>
    </>
  );
}
