import React from 'react';
import ServiceListElement from './ServiceListElement';
import { ServiceAsFilter } from '../../models/Service/ServiceAsFilter';

interface ServiceListProps {
  services: ServiceAsFilter[];
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
}

export default function ServiceList({ services, ...rest }: ServiceListProps) {
  return (
    <ul className="service-filter-list">
      {services.map((service) => (
        <ServiceListElement key={'filter' + service.id} service={service} {...rest} />
      ))}
    </ul>
  );
}
