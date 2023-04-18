import React from 'react';
import { CartItemInfo } from '../../models/CartItemInfo';

interface CartProps {
  items: CartItemInfo[];
}

export default function Cart({ items }: CartProps) {
  const showQuantity = items.length !== 0;

  return (
    <div className="cart">
      <img className="cart__img" src="../icons/cart.svg" alt="cart" />
      {showQuantity && <div className="cart__quantity">{items.length}</div>}
    </div>
  );
}
