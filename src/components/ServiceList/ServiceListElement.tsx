import React from 'react';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';
import IncludedServiceList from './IncludedServiceList';
import ServiceListActionsFactory from './ServiceListActionsFactory';

interface ServiceListElementProps {
  service: ServiceInfoVM;
}

export default function ServiceListElement({ service }: ServiceListElementProps) {
  return (
    <li className="service-list-element">
      <div className="service-list-element__description">
        <div className="service-list-element__information">
          <p className="service-list-element__service-static-name">
            <span>Pakiet</span>
          </p>
          <p className="service-list-element__service-name">{service.name}</p>
        </div>
        <div className="service-list-element__pricing">
          <p className="service-list-element__service-static-price">
            <span>Cena</span>
          </p>
          <p className="service-list-element__service-price">{service.price} zł</p>
        </div>
      </div>
      <div className="service-list-element__services">
        <IncludedServiceList includedServices={service.includedServices} />
      </div>
      <div className="service-list-element__footer">
        <ServiceListActionsFactory service={service} />
      </div>
    </li>
  );
}
