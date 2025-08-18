import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
};
export const useCartStore = create<CartState>((set) => ({
  items: [],

  addToCart: (item) =>
    set((state) => {
      console.log("Adding to cart:", item);
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        console.log("Item exists, increasing quantity");
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      console.log("New item, adding with quantity 1");
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => {
      console.log("Removing from cart:", id);
      return {
        items: state.items.filter((i) => i.id !== id),
      };
    }),
}));
