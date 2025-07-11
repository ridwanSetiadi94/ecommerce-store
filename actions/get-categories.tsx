import { Category } from "@/types";

const categoriesUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategories(): Promise<Category[]> {
  const res = await fetch(categoriesUrl);
  return res.json();
}

export default getCategories;
