import React from 'react';
import { render } from '@testing-library/react';
import ServiceFilterList from './ServiceFilterList';
import { ServiceAsFilter } from './Models/ServiceAsFilter';

describe('should return list of services', () => {
  it('as above', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const services: ServiceAsFilter[] = [
      { id: 'tv', isEnabled: false, name: 'Television' },
      { id: 'abo', isEnabled: true, name: 'Abonament' },
    ];
    const { getByText } = render(<ServiceFilterList addFilter={addFilter} removeFilter={removeFilter} services={services} />);

    services.forEach((service) => {
      getByText(service.name);
    });
  });
});
