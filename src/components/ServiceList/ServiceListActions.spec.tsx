import React from 'react';
import { render } from '@testing-library/react';
import { ServiceInfoVM } from '../../models/Shared/ServiceInfoVM';
import ServiceListActions from './ServiceListActions';

describe('ServiceListActions', () => {
  it('should find message', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };
    const { getByText } = render(<ServiceListActions service={service} />);

    getByText('Usługa dostępna tylko w pakiecie');
  });
  it('should not find message', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: false,
    };
    const { queryByText } = render(<ServiceListActions service={service} />);

    expect(queryByText('Usługa dostępna tylko w pakiecie')).toBe(null);
  });
  it('should find button', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: false,
    };
    const { getByRole } = render(<ServiceListActions service={service} />);

    getByRole('button');
  });
  it('should not find button', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };
    const { queryByRole } = render(<ServiceListActions service={service} />);

    expect(queryByRole('button')).toBe(null);
  });
  it('button should have "wybieram" text', () => {
    const service: ServiceInfoVM = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: false,
    };
    const { getByRole } = render(<ServiceListActions service={service} />);

    expect(getByRole('button').textContent).toBe('wybieram');
  });
});
