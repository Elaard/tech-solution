import React from 'react';
import { IncludedServicesVM } from '../../models/Service/ComboInformation';
import IncludedServiceListElement from './IncludedServiceListElement';

interface IncludedServiceListProps {
  includedServices: IncludedServicesVM[];
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
