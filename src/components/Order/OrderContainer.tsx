import React from 'react';
import OrderHeader from './OrderHeader';
import OrderBody from './OrderBody';
import { useCartContext } from '../../contexts/CartContext';
import OrderFooter from './OrderFooter';
import { calculateTotalValue } from '../../utils/cartUtils';

export default function OrderContainer() {
  const { findBestOfferCombination } = useCartContext();

  const cartItems = findBestOfferCombination();

  const totalPrice = calculateTotalValue(cartItems);

  return (
    <>
      <OrderHeader />
      <OrderBody cartItems={cartItems} />
      <OrderFooter totalPrice={totalPrice} />
    </>
  );
}
