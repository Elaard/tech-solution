import React from 'react';
import ServiceFilterListElement from './ServiceFilterListElement';
import { ServiceAsFilter } from './Models/ServiceAsFilter';

interface ServiceListProps {
  services: ServiceAsFilter[];
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
}

export default function ServiceFilterList({ services, ...rest }: ServiceListProps) {
  return (
    <ul className="service-filter-list">
      {services.map((service) => (
        <ServiceFilterListElement key={'filter' + service.id} service={service} {...rest} />
      ))}
    </ul>
  );
}
