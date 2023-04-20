import React from 'react';
import ServiceListElement from './ServiceListElement';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';

interface ServiceListProps {
  services: ServiceInfoVM[];
}

export default function ServiceList({ services }: ServiceListProps) {
  const shouldBeCentered = services.length > 1;
  const className = shouldBeCentered ? 'service-list' : 'service-list--single ';
  return (
    <ul className={className}>
      {services.map((service) => (
        <ServiceListElement key={'service' + service.id} service={service} />
      ))}
    </ul>
  );
}
