import React from 'react';
import { useServiceContext } from '../../contexts/ServicesContext';
import ServiceFilterList from './ServiceFilterList';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import { Service } from '../../models/Service/Service';
import { ServiceAsFilter } from './Models/ServiceAsFilter';

export default function ServiceFilterListContainer() {
  const { getBasicServices } = useServiceContext();
  const { addFilter, removeFilter, isIncludedServiceFilterEnabled } = useServiceFilterContext();

  const basicServices = getBasicServices();

  const getServiceAsFilter = (services: Service[]): ServiceAsFilter[] =>
    services.map((service) => ({ ...service, isEnabled: isIncludedServiceFilterEnabled(service.id) }));

  const services = getServiceAsFilter(basicServices);

  return <ServiceFilterList services={services} removeFilter={removeFilter} addFilter={addFilter} />;
}
