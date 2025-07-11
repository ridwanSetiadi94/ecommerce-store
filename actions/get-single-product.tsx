import { Product } from "@/types";

const productURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

async function getSingleProduct(id: string): Promise<Product> {
  const res = await fetch(`${productURL}/${id}`);
  return res.json();
}

export default getSingleProduct;
