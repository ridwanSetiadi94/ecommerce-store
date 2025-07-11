import { Product } from "@/types";
import qs from "query-string";

const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

async function getProducts(query: Query): Promise<Product[]> {
  const url = qs.stringifyUrl({
    url: productsUrl,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  return res.json();
}

export default getProducts;
