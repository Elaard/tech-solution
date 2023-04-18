import React, { useState } from 'react';
import Cart from './Cart';
import { useCustomEvent } from '../../utils/customEvents';
import { CartItem } from '../../models/CartItem';
import { useServiceContext } from '../../contexts/ServicesContext';
import { ServiceInfo } from '../../models/ServiceInfo';
import { CartItemInfo } from '../../models/CartItemInfo';

export default function CartContainer() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const { services } = useServiceContext();

  const checkIfItemIsAdded = (itemId: string) => cart.some((item) => item.id === itemId);

  const createCartItem = (serviceItem: ServiceInfo, cartItem: CartItem): CartItemInfo => {
    return {
      ...cartItem,
      name: serviceItem.name,
    };
  };

  const createCartItems = (itemsInCart: CartItem[]): CartItemInfo[] => {
    const cartItems: CartItemInfo[] = [];
    itemsInCart.forEach((itemInCart) => {
      const serviceItem = services[itemInCart.year].find((service) => service.id === itemInCart.id);
      if (serviceItem) {
        cartItems.push(createCartItem(serviceItem, itemInCart));
      }
    });
    return cartItems;
  };

  const addItemToCart = (selectedItem: CartItem) => {
    if (!checkIfItemIsAdded(selectedItem.id)) {
      setCart((prev) => [...prev, selectedItem]);
    }
  };

  const removeItemFromCart = (selectedItem: string) => setCart((prev) => prev.filter((cartItem) => cartItem.id !== selectedItem));

  useCustomEvent('addItemToCart', addItemToCart);

  useCustomEvent('removeItemFromCart', removeItemFromCart);

  return <Cart items={createCartItems(cart)} />;
}
