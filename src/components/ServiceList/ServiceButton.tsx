import React from 'react';
import { useCartContext } from '../../contexts/CartContext';

interface ServiceButtonProps {
  title: string;
  serviceId: string;
}

export default function ServiceButton({ title, serviceId }: ServiceButtonProps) {
  const { addItemToCart } = useCartContext();
  const onClick = () => {
    addItemToCart(serviceId);
  };
  return (
    <button className="service-btn" onClick={onClick}>
      {title}
    </button>
  );
}
