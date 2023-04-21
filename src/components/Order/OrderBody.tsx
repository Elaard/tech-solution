import React from 'react';
import OrderList from './OrderList';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';

interface OrderBodyProps {
  cartItems: ServiceInfoVM[];
}

export default function OrderBody({ cartItems }: OrderBodyProps) {
  return (
    <div className="order-body">
      <OrderList cartItems={cartItems} />
    </div>
  );
}
