import { Color } from "@/types";

const colorsURL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

async function getColors(): Promise<Color[]> {
  const res = await fetch(colorsURL);
  return res.json();
}

export default getColors;
