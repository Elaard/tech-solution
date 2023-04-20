import React from 'react';
import { CartItemInfo } from '../../models/Cart/CartItemInfo';

interface CartProps {
  items: CartItemInfo[];
}

export default function Cart({ items }: CartProps) {
  const cartImage = items.length ? '../icons/cart-pink.svg' : '../icons/cart-green.svg';
  return (
    <div className="cart">
      <img className="cart__img" src={cartImage} alt="cart" />
    </div>
  );
}
