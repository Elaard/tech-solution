import React from 'react';
import { AdditionalServiceVM } from '../../models/Shared/ServiceInfoVM';
import IncludedServiceListElementInfo from './IncludedServiceListElementInfo';

interface IncludedServiceListElement {
  includedService: AdditionalServiceVM;
}

export default function IncludedServiceListElement({ includedService }: IncludedServiceListElement) {
  return (
    <li className="included-service-list__element">
      <img src="../icons/circle-ok.svg" alt="ok" className="included-service-list__img" />
      <IncludedServiceListElementInfo includedService={includedService} />
    </li>
  );
}
