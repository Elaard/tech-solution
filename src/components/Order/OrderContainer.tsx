import React from 'react';
import OrderHeader from './OrderHeader';
import OrderBody from './OrderBody';
import { useCartContext } from '../../contexts/CartContext';
import { useServiceContext } from '../../contexts/ServicesContext';
import { extractIdsAndSort } from '../../utils/arrayUtils';
import OrderFooter from './OrderFooter';
import { calculateTotalValue } from '../../utils/cartUtils';

export default function OrderContainer() {
  const { cart } = useCartContext();

  const { services, getServicesToDisplay } = useServiceContext();

  const itemIds = extractIdsAndSort(cart);

  const packages = services.packages.filter((pack) => itemIds.includes(pack.id));

  const cartItems = getServicesToDisplay(packages);

  const totalPrice = calculateTotalValue(cartItems);

  return (
    <>
      <OrderHeader />
      <OrderBody cartItems={cartItems} />
      <OrderFooter totalPrice={totalPrice} />
    </>
  );
}
