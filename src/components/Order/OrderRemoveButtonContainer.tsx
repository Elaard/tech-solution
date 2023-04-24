import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import ServiceButton from '../ServiceList/ServiceButton';
import { ComboInformation } from '../../models/Shared/ServiceInfoVM';

interface OrderRemoveButtonContainerProps {
  title: string;
  combo: ComboInformation;
}

export default function OrderRemoveButtonContainer({ combo, ...rest }: OrderRemoveButtonContainerProps) {
  const { removeItemFromCart } = useCartContext();
  const onClick = () => {
    removeItemFromCart(combo);
  };
  return <ServiceButton {...rest} onClick={onClick} />;
}
