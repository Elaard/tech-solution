import React from 'react';
import { AdditionalServiceVM } from '../../models/Shared/ServiceInfoVM';

interface IncludedServiceListElementInfo {
  includedService: AdditionalServiceVM;
}

export default function IncludedServiceListElementInfo({ includedService }: IncludedServiceListElementInfo) {
  return (
    <>
      <span className="included-service-list__name">{includedService.name}</span>
      <span className="included-service-list__separator">&#10161;</span>
      <span className="included-service-list__description">{includedService.description}</span>
    </>
  );
}
