import React from 'react';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';
import OrderListElement from './OrderListElement';

interface OrderBodyProps {
  cartItems: ServiceInfoVM[];
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
