"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product;
}

function ProductCard({ data }: ProductCard): React.ReactElement {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  function handleClick() {
    router.push(`/product/${data?.id}`);
  }

  function handlePreview(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    previewModal.handleOpen(data);
  }

  function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    cart.addItem(data);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images & Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md
          "
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={handlePreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={handleAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;
