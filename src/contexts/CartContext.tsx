import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { CartItem } from '../models/Shared/CartItem';

export interface CartContext {
  addItemToCart: (itemId: string) => void;
  doesCartContainItems: () => boolean;
}

const CartProvider = createContext<CartContext>({
  addItemToCart: () => null,
  doesCartContainItems: () => false,
});

CartProvider.displayName = 'CartContextProvider';

export function useCartContext() {
  return useContext(CartProvider);
}

interface CartContextProps {
  children: JSX.Element;
}

const CartContext = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const createCartItem = (itemId: string): CartItem => ({ id: itemId });

  const addItemToCart = (itemId: string) => {
    if (!cart.some((cartItem) => cartItem.id === itemId)) {
      setCart((prev) => [...prev, createCartItem(itemId)]);
    }
  };

  const doesCartContainItems = () => Boolean(cart.length);

  return <CartProvider.Provider value={{ addItemToCart, doesCartContainItems }}>{children}</CartProvider.Provider>;
};

export default CartContext;
