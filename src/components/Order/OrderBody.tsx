import React from 'react';
import OrderList from './OrderList';
import { ComboInformation } from '../../models/Shared/ServiceInfoVM';

interface OrderBodyProps {
  cartItems: ComboInformation[];
}

export default function OrderBody({ cartItems }: OrderBodyProps) {
  return (
    <div className="order-body">
      <OrderList cartItems={cartItems} />
    </div>
  );
}
