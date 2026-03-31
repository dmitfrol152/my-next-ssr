export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productsId: string }>;
}) {
  const productId = (await params).productsId;

  return (
    <>
      <h1>Detail about product {productId}</h1>
    </>
  );
}
