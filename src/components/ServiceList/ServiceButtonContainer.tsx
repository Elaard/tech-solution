import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import ServiceButton from './ServiceButton';

interface ServiceButtonContainerProps {
  title: string;
  serviceId: string;
}

export default function ServiceButtonContainer({ serviceId, ...rest }: ServiceButtonContainerProps) {
  const { addItemToCart } = useCartContext();
  const onClick = () => {
    addItemToCart(serviceId);
  };
  return <ServiceButton onClick={onClick} {...rest} />;
}
