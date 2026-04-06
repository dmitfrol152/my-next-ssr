import { /* notFound, */ redirect } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productsId: string; reviewId: string }>;
}) {
  const { productsId, reviewId } = await params;

  if (Number(reviewId) > 2000) {
    throw new Error("Error in page text");
  }

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }

  return (
    <>
      <h1>
        It`t review {reviewId} for product {productsId}
      </h1>
    </>
  );
}
