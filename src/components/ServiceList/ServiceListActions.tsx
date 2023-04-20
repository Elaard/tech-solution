import React from 'react';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';
import ServiceActionAlternativeText from './ServiceActionAlternativeText';
import ServiceButton from './ServiceButton';

interface ServiceListActionsProps {
  service: ServiceInfoVM;
}

export default function ServiceListActions({ service }: ServiceListActionsProps) {
  return service.availableOnlyWithPackage ? (
    <ServiceActionAlternativeText text={'Usługa dostępna tylko w pakiecie'} />
  ) : (
    <ServiceButton title={'wybieram'} />
  );
}
