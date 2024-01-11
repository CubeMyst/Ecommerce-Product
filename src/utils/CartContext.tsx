import { create } from 'zustand'
import type { CartItem, CartState } from "../types/CartContextTypes";

export const useStore = create<CartState>((set) => ({
  items: [],
  addToCart: (item: CartItem) =>
    set((state) => ({ items: [...state.items, item] })),
  removeFromCart: (id: number) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  increment: (id: number) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    })),
  decrement: (id: number) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
    })),
}));
