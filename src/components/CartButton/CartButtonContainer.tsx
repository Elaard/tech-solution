import React from 'react';
import CartButton from './CartButton';
import { useCartContext } from '../../contexts/CartContext';
import { Routes } from '../../Routes';

export default function CartButtonContainer() {
  const { doesCartContainItems } = useCartContext();
  return <CartButton hasItems={doesCartContainItems()} redirectTo={Routes.Order} />;
}
