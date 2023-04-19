import React from 'react';
import { ServiceInfoVM } from '../../models/ViewModels/ServiceInfoVM';
import IncludedServiceList from './IncludedServiceList';
import ServiceButton from './ServiceButton';

interface ServiceListElementProps {
  service: ServiceInfoVM;
}

export default function ServiceListElement({ service }: ServiceListElementProps) {
  return (
    <li className="service-list-element">
      <div className="service-list-element__description">
        <div className="service-list-element__information">
          <p className="service-list-element__service-static-name">Pakiet</p>
          <p className="service-list-element__service-name">{service.name}</p>
        </div>
        <div className="service-list-element__pricing">
          <p className="service-list-element__service-static-price">Cena</p>
          <p className="service-list-element__service-price">{service.price} zł</p>
        </div>
      </div>
      <div className="service-list-element__services">
        <IncludedServiceList includedServices={service.includedServices} />
      </div>
      <div className="service-list-element__actions">
        <ServiceButton title="Dodaj" />
      </div>
    </li>
  );
}
