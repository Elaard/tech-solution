import React from 'react';
import { AdditionalServiceVM } from '../../models/Shared/ServiceInfoVM';
import IncludedServiceListElementInfo from '../ServiceList/IncludedServiceListElementInfo';

interface OrderIncludedServiceElement {
  includedService: AdditionalServiceVM;
}

export default function OrderIncludedServiceElement({ includedService }: OrderIncludedServiceElement) {
  return (
    <li className="order-included-service-element">
      <IncludedServiceListElementInfo key={'included-service-cart-item' + includedService.id} includedService={includedService} />
      <br />
    </li>
  );
}
