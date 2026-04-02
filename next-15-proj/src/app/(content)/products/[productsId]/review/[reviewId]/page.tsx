import { notFound } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productsId: string; reviewId: string }>;
}) {
  const { productsId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    return notFound();
  }

  return (
    <>
      <h1>
        It`t review {reviewId} for product {productsId}
      </h1>
    </>
  );
}
