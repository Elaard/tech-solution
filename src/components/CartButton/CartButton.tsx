import React from 'react';
import { Link } from 'react-router-dom';

interface CartProps {
  hasItems: boolean;
  redirectTo: string;
}

export default function CartButton({ hasItems, redirectTo }: CartProps) {
  const cartImage = hasItems ? '../icons/cart-pink.svg' : '../icons/cart-green.svg';
  return (
    <Link className="cart" to={redirectTo}>
      <img className="cart__img" src={cartImage} alt="cart" />
    </Link>
  );
}
