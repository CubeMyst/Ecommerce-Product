import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  Dispatch,
} from "react";

export interface CartItem {
  id: number;
  name: string;
  img: string;
  nowPrice: number;
  price: number;
  count: number;
}

export interface CartState {
  items: CartItem[];
  discount: number;
  price: number;
  count: number;
  setPrice: (newPrice: number) => void;
  setCount: (newCount: number) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export type CartAction = { type: "ADD_TO_CART"; payload: CartItem };

export interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

interface CartProviderProps {
  children: ReactNode;
}
