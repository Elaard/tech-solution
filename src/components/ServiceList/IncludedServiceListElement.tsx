import React from 'react';
import { AdditionalServiceVM } from '../../models/ViewModels/ServiceInfoVM';

interface IncludedServiceListElement {
  includedService: AdditionalServiceVM;
}

export default function IncludedServiceListElement({ includedService }: IncludedServiceListElement) {
  return (
    <li className="included-service-list__element">
      <img src="../icons/circle-ok.svg" alt="ok" className="included-service-list__img" />
      <span className="included-service-list__name">{includedService.name}</span>
      <span className="included-service-list__separator">&#10161;</span>
      <span className="included-service-list__description">{includedService.description}</span>
    </li>
  );
}
