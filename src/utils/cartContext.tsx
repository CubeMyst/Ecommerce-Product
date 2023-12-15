/* eslint-disable react-refresh/only-export-components */
// cartContext.tsx

import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  Dispatch,
} from "react";

interface CartItem {
  id: number;
  name: string;
  img: string;
  nowPrice: number;
  count: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction = { type: "ADD_TO_CART"; payload: CartItem };

interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};
