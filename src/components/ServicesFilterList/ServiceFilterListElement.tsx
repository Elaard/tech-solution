import React from 'react';
import { ServiceAsFilter } from './Models/ServiceAsFilter';

interface ServiceListElementProps {
  service: ServiceAsFilter;
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
}

export default function ServiceFilterListElement({ service, addFilter, removeFilter }: ServiceListElementProps) {
  const className = service.isEnabled ? 'filter-list-element filter-list-element--enabled' : 'filter-list-element';

  const onClick = () => {
    const actionFn = service.isEnabled ? removeFilter : addFilter;
    actionFn(service.id);
  };

  return (
    <li className={className} onClick={onClick}>
      <p className="filter-list-element__text">{service.name}</p>
    </li>
  );
}
