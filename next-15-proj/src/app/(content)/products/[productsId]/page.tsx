import { Metadata } from "next";

type Props = {
  params: Promise<{ productsId: string }>;
};

const getProduct = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return { title: `Iphone ${id}` };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productsId;
  const product = await getProduct(id);

  return {
    title: `Product ${product.title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productsId;

  return (
    <>
      <h1>Detail about product {productId}</h1>
    </>
  );
}
