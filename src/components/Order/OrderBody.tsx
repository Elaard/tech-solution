import React from 'react';
import OrderList from './OrderList';
import { ComboInformation } from '../../models/Service/ComboInformation';

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
