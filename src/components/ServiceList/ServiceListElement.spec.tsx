import React from 'react';
import { render } from '@testing-library/react';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';
import ServiceListElement from './ServiceListElement';

describe('ServiceListElement', () => {
  it('should display static name: "pakiet"', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };
    const { getByText } = render(<ServiceListElement service={service} />);

    getByText('pakiet', { exact: false });
  });
  it('should display name of package', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };

    const { getByText } = render(<ServiceListElement service={service} />);

    getByText('television', { exact: false });
  });
  it('should display static name: "cena"', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };

    const { getByText } = render(<ServiceListElement service={service} />);

    getByText('cena', { exact: false });
  });
  it('should display price of package', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };
    const { getByText } = render(<ServiceListElement service={service} />);

    getByText(20, { exact: false });
  });
});
