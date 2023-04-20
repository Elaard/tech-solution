import React from 'react';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import ServiceList from './ServiceList';
import { useServiceContext } from '../../contexts/ServicesContext';
import { ServiceInfoVM } from '../../models/ViewModels/ServiceInfoVM';
import { AdditionalService } from '../../models/Service/ServiceInfo';

export default function ServiceListContainer() {
  const { getBasicServiceById, isBasicServiceAvailableOnlyWithinPackage } = useServiceContext();
  const { getFilteredServices } = useServiceFilterContext();

  const services = getFilteredServices();

  const isServiceAvailableOnlyWithinPackage = (includedServices: AdditionalService[]) => {
    if (includedServices.length !== 1) {
      return false;
    }
    return isBasicServiceAvailableOnlyWithinPackage(includedServices[0].id);
  };

  const servicesToDisplay: ServiceInfoVM[] = services.map((service) => {
    return {
      ...service,
      availableOnlyWithPackage: isServiceAvailableOnlyWithinPackage(service.includedServices),
      includedServices: service.includedServices.map((includeService) => ({
        ...includeService,
        name: getBasicServiceById(includeService.id)?.name ?? '',
      })),
    };
  });

  return <ServiceList services={servicesToDisplay} />;
}
