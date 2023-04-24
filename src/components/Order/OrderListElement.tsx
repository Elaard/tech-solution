import React from 'react';
import { ComboInformation } from '../../models/Shared/ServiceInfoVM';

import OrderIncludedServiceElement from './OrderIncludedServiceElement';
import OrderRemoveButtonContainer from './OrderRemoveButtonContainer';

interface OrderListElementProps {
  cartItem: ComboInformation;
}

export default function OrderListElement({ cartItem }: OrderListElementProps) {
  return (
    <li className="order-list-element">
      <div className="order-list-element-description">
        <div className="order-list-element-description__service">
          <div className="order-list-element-description__container">
            <p className="order-list-element-description__service-name">{cartItem.name}</p>
            <p className="order-list-element-description__service-year">Oferta obowiazuje w {cartItem.year}</p>
          </div>
        </div>
        <ul className="order-list-element-description__included-services">
          {cartItem.includedServices.map((includedService) => (
            <OrderIncludedServiceElement key={'included-service-cart-item' + includedService.id} includedService={includedService} />
          ))}
        </ul>
      </div>
      <div className="order-list-element-footer">
        <OrderRemoveButtonContainer title={'usun z koszyka'} combo={cartItem} />
      </div>
    </li>
  );
}
