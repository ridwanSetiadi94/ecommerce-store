import { Size } from "@/types";

const sizesURL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

async function getSizes(): Promise<Size[]> {
  const res = await fetch(sizesURL);
  return res.json();
}

export default getSizes;
