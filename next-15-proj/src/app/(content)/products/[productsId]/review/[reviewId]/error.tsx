"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return <div>Error {error.message}</div>;
}
