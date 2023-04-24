import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import ServiceButton from './ServiceButton';
import { ComboInformation } from '../../models/Service/ComboInformation';

interface ServiceButtonContainerProps {
  title: string;
  service: ComboInformation;
}

export default function ServiceButtonContainer({ service, ...rest }: ServiceButtonContainerProps) {
  const { addItemToCart } = useCartContext();
  const onClick = () => {
    addItemToCart(service);
  };
  return <ServiceButton onClick={onClick} {...rest} />;
}
