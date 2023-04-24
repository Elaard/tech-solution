import React from 'react';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import ServiceList from './ServiceList';
import { useServiceContext } from '../../contexts/ServicesContext';
import ServiceListAlternativeText from './ServiceListAlternativeText';

export default function ServiceListContainer() {
  const { getComboServicesInformation } = useServiceContext();
  const { getFilteredComboOrders } = useServiceFilterContext();

  const comboOrders = getFilteredComboOrders();

  const servicesToDisplay = getComboServicesInformation(comboOrders);

  const isAnyServiceAvailable = !!servicesToDisplay.length;

  return isAnyServiceAvailable ? <ServiceList services={servicesToDisplay} /> : <ServiceListAlternativeText />;
}
