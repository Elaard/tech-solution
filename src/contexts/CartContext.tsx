import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { CartItem } from '../models/Shared/CartItem';
import { ServiceId } from '../models/Service/ServiceId';

export interface CartContext {
  cart: CartItem[];
  addItemToCart: (itemId: ServiceId) => void;
  removeItemFromCart: (itemId: ServiceId) => void;
  doesCartContainItems: () => boolean;
}

const CartProvider = createContext<CartContext>({
  cart: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
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

  const createCartItem = (itemId: ServiceId): CartItem => ({ id: itemId });

  const addItemToCart = (itemId: ServiceId) => {
    if (!cart.some((cartItem) => cartItem.id === itemId)) {
      setCart((prev) => [...prev, createCartItem(itemId)]);
    }
  };

  const removeItemFromCart = (itemId: ServiceId) => setCart((prev) => prev.filter((cartItem) => cartItem.id !== itemId));

  const doesCartContainItems = () => Boolean(cart.length);

  return <CartProvider.Provider value={{ cart, addItemToCart, removeItemFromCart, doesCartContainItems }}>{children}</CartProvider.Provider>;
};

export default CartContext;
