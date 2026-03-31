export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productsId: string; reviewId: string }>;
}) {
  const { productsId, reviewId } = await params;

  return (
    <>
      <h1>
        It`t review {reviewId} for product {productsId}
      </h1>
    </>
  );
}
