import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Define the shape of the cart store
interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

// ---------- Function Implementations ----------

// Add item to cart (skip if already exists)
function addItemToCart(set: any, get: any, data: Product): void {
  const currentItems = get().items;
  const existingItem: Product | undefined = currentItems.find(
    (item: Product) => item.id === data.id
  );

  if (existingItem) {
    toast("Item is already in cart.");
    return;
  }

  set({ items: [...currentItems, data] });
  toast.success("Item added to cart.");
}

// Remove item by ID
function removeItemFromCart(set: any, get: any, id: string): void {
  const filteredItems = get().items.filter((item: Product) => item.id !== id);
  set({ items: filteredItems });
  toast.success("Item removed from cart.");
}

// Remove all items
function clearCart(set: any): void {
  set({ items: [] });
}

// ---------- Zustand Store Definition ----------

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem(data: Product) {
        addItemToCart(set, get, data);
      },

      removeItem(id: string) {
        removeItemFromCart(set, get, id);
      },

      removeAll() {
        clearCart(set);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
