import React from 'react';

interface OrderFooterProps {
  totalPrice: number;
}

export default function OrderFooter({ totalPrice }: OrderFooterProps) {
  return (
    <div className="order-footer">
      <span className="order-footer__summary">
        do zaplacenia: {totalPrice} <span className="order-footer__currency">zł</span>
      </span>
    </div>
  );
}
