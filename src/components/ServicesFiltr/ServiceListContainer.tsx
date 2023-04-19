import React from 'react';
import { useServiceContext } from '../../contexts/ServicesContext';
import ServiceList from './ServiceList';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import { ServiceAsFilter } from '../../models/Service/ServiceAsFilter';
import { BasicService } from '../../models/Service/ServiceInfo';

export default function ServiceListContainer() {
  const { getBasicServices } = useServiceContext();
  const { addFilter, removeFilter, isFilterEnabled } = useServiceFilterContext();

  const basicServices = getBasicServices();

  const getServiceAsFilter = (services: BasicService[]): ServiceAsFilter[] =>
    services.map((service) => ({ ...service, isEnabled: isFilterEnabled(service.id) }));

  const services = getServiceAsFilter(basicServices);

  return <ServiceList services={services} removeFilter={removeFilter} addFilter={addFilter} />;
}
