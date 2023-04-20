import React from 'react';

interface CartProps {
  hasItems: boolean;
}

export default function Cart({ hasItems }: CartProps) {
  const cartImage = hasItems ? '../icons/cart-pink.svg' : '../icons/cart-green.svg';
  return (
    <div className="cart">
      <img className="cart__img" src={cartImage} alt="cart" />
    </div>
  );
}
