import React from 'react';
import Cart from './Cart';
import { useCartContext } from '../../contexts/CartContext';

export default function CartContainer() {
  const { doesCartContainItems } = useCartContext();
  return <Cart hasItems={doesCartContainItems()} />;
}
