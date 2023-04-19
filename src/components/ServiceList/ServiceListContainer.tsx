import React from 'react';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import ServiceList from './ServiceList';
import { useServiceContext } from '../../contexts/ServicesContext';
import { ServiceInfoVM } from '../../models/ViewModels/ServiceInfoVM';

export default function ServiceListContainer() {
  const { getBasicServiceById } = useServiceContext();
  const { getFilteredServices } = useServiceFilterContext();

  const services = getFilteredServices();

  const servicesToDisplay: ServiceInfoVM[] = services.map((service) => {
    return {
      ...service,
      includedServices: service.includedServices.map((includeService) => ({
        ...includeService,
        name: getBasicServiceById(includeService.id)?.name ?? '',
      })),
    };
  });

  return <ServiceList services={servicesToDisplay} />;
}
