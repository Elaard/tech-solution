import React from 'react';
import { ComboInformation } from '../../models/Shared/ServiceInfoVM';
import OrderListElement from './OrderListElement';

interface OrderBodyProps {
  cartItems: ComboInformation[];
}

export default function OrderList({ cartItems }: OrderBodyProps) {
  return (
    <ul className="order-list">
      {cartItems.map((cartItem) => (
        <OrderListElement key={'cart_item_' + cartItem.id} cartItem={cartItem} />
      ))}
    </ul>
  );
}
