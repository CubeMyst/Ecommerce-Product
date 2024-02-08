import { create } from 'zustand';
import type { CartItem, CartState } from '../types/CartContextTypes';

export const useStore = create<CartState>((set) => ({
  discount: 0.5,
  price: 250 * 0.5,
  count: 1,
  items: [],

  // Establecer el precio con un nuevo valor
  setPrice: (newPrice: number) =>
    set({
      price: newPrice
    }),

  // Establecer la cantidad con un nuevo valor
  setCount: (newCount) =>
    set((state) => ({
      ...state,
      count: newCount
    })),

  // Agregar un elemento al carrito
  addToCart: (item: CartItem) =>
    set((state) => ({
      items: [...state.items, item]
    })),

  // Eliminar un elemento del carrito por ID
  removeFromCart: (id: number) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  // Incrementar la cantidad de un artículo en el carrito por ID
  increment: (id: number) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    })),

  // Decrementar la cantidad de un artículo en el carrito por ID
  decrement: (id: number) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
    })),
}));
