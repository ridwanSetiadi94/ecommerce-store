import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  handleOpen: (data: Product) => void;
  haandleClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  handleOpen: (data: Product) => set({ data, isOpen: true }),
  haandleClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
