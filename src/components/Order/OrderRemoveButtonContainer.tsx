import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import ServiceButton from '../ServiceList/ServiceButton';

interface OrderRemoveButtonContainerProps {
  title: string;
  serviceId: string;
}

export default function OrderRemoveButtonContainer({ serviceId, ...rest }: OrderRemoveButtonContainerProps) {
  const { removeItemFromCart } = useCartContext();
  const onClick = () => {
    removeItemFromCart(serviceId);
  };
  return <ServiceButton {...rest} onClick={onClick} />;
}
