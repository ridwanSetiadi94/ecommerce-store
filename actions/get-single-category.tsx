import { Category } from "@/types";

const categoryURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getSingleCategory(id: string): Promise<Category> {
  const res = await fetch(`${categoryURL}/${id}`);
  return res.json();
}

export default getSingleCategory;
