import React from 'react';
import { CartItemInfo } from '../../models/CartItemInfo';

interface CartProps {
  items: CartItemInfo[];
}

export default function Cart({ items }: CartProps) {
  return (
    <div className="cart">
      <img className="cart__img" src="../icons/cart.svg" alt="cart" />
      {items.length !== 0 && <div className="cart__quantity">{items.length}</div>}
    </div>
  );
}
