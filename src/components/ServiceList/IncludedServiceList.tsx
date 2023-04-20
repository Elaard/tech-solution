import React from 'react';
import { AdditionalServiceVM } from '../../models/Shared/ServiceInfoVM';
import IncludedServiceListElement from './IncludedServiceListElement';

interface IncludedServiceListProps {
  includedServices: AdditionalServiceVM[];
}

export default function IncludedServiceList({ includedServices }: IncludedServiceListProps) {
  return (
    <ul className="included-service-list">
      {includedServices.map((includedService) => (
        <IncludedServiceListElement key={'included_service_' + includedService.id} includedService={includedService} />
      ))}
    </ul>
  );
}
