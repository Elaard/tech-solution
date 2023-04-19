import React from 'react';
import { ServiceAsFilter } from '../../models/Service/ServiceAsFilter';

interface ServiceListElementProps {
  service: ServiceAsFilter;
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
}

export default function ServiceListElement({ service, addFilter, removeFilter }: ServiceListElementProps) {
  const className = service.isEnabled ? 'service-filter-list__element service-filter-list__element--enabled' : 'service-filter-list__element';

  const onClick = () => {
    const actionFn = service.isEnabled ? removeFilter : addFilter;
    actionFn(service.id);
  };

  return (
    <li className={className} onClick={onClick}>
      {service.name}
    </li>
  );
}
