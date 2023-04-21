import React from 'react';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';
import ServiceActionAlternativeText from './ServiceActionAlternativeText';
import ServiceButtonContainer from './ServiceButtonContainer';

interface ServiceListActionsFactoryProps {
  service: ServiceInfoVM;
}

export default function ServiceListActionsFactory({ service }: ServiceListActionsFactoryProps) {
  if (service.availableOnlyWithPackage) {
    return <ServiceActionAlternativeText text={'usługa dostępna tylko w pakiecie'} />;
  }
  return <ServiceButtonContainer title={'wybieram'} serviceId={service.id} />;
}
