import React from 'react';
import { ComboInformation } from '../../models/Service/ComboInformation';
import ServiceActionAlternativeText from './ServiceActionAlternativeText';
import ServiceButtonContainer from './ServiceButtonContainer';

interface ServiceListActionsFactoryProps {
  service: ComboInformation;
}

export default function ServiceListActionsFactory({ service }: ServiceListActionsFactoryProps) {
  if (service.availableOnlyWithPackage) {
    return <ServiceActionAlternativeText text={'usługa dostępna tylko w pakiecie'} />;
  }
  return <ServiceButtonContainer title={'wybieram'} service={service} />;
}
