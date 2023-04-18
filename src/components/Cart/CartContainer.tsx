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
      const service = services[itemInCart.year].find((service) => service.id === itemInCart.id);
      if (service) {
        cartItems.push(createCartItem(service, itemInCart));
      }
    });
    return cartItems;
  };

  const addItemToCart = (selectedItem: CartItem) => {
    const requireToUpdateQuantity = checkIfItemIsAdded(selectedItem.id);
    if (requireToUpdateQuantity) {
      setCart((prev) =>
        prev.map((cartItem) => {
          if (cartItem.id === selectedItem.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        }),
      );
    } else {
      setCart((prev) => [...prev, { ...selectedItem, quantity: 0 }]);
    }
  };

  const removeItemFromCart = (selectedItem: string) => setCart((prev) => prev.filter((cartItem) => cartItem.id !== selectedItem));

  useCustomEvent('addItemToCart', addItemToCart);

  useCustomEvent('removeItemFromCart', removeItemFromCart);

  return <Cart items={createCartItems(cart)} />;
}
