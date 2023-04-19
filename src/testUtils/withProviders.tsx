import React from 'react';
import { render } from '@testing-library/react';
import ServicesFilterContext from '../contexts/ServicesFilterContext';
import ServicesContext from '../contexts/ServicesContext';
import { ServiceOffer } from '../models/Service/ServiceOffer';

export function getWithServicesFilterProvider(services: ServiceOffer, children: JSX.Element) {
  return <ServicesFilterContext services={services}>{children}</ServicesFilterContext>;
}

export function renderWithServicesFilterProvider(services: ServiceOffer, children: JSX.Element) {
  return render(getWithServicesFilterProvider(services, children));
}

export function getWithServicesProvider(children: JSX.Element) {
  return <ServicesContext>{children}</ServicesContext>;
}

export function renderWithServicesProvider(children: JSX.Element) {
  return render(getWithServicesProvider(children));
}

export function renderWithServicesAndServicesFilterProviders(services: ServiceOffer, children: JSX.Element) {
  return renderWithServicesProvider(getWithServicesFilterProvider(services, children));
}
