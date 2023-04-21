import React from 'react';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import ServiceList from './ServiceList';
import { useServiceContext } from '../../contexts/ServicesContext';
import ServiceListAlternativeText from './ServiceListAlternativeText';

export default function ServiceListContainer() {
  const { getServicesToDisplay } = useServiceContext();
  const { getFilteredServices } = useServiceFilterContext();

  const services = getFilteredServices();

  const servicesToDisplay = getServicesToDisplay(services);

  const isAnyServiceAvailable = !!servicesToDisplay.length;

  return isAnyServiceAvailable ? <ServiceList services={servicesToDisplay} /> : <ServiceListAlternativeText />;
}
