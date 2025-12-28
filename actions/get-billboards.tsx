import { Billboard } from "@/types";

const billboardURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${billboardURL}/${id}`);

  if (!res.ok) {
    throw new Error(`Billboard fetch failed: ${res.status}`);
  }

  return res.json();
}

export default getBillboard;
