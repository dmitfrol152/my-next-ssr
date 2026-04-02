"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productsId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h1>Not Found</h1>
      <p>
        Review {reviewId} not find for product {productsId}
      </p>
    </div>
  );
}
