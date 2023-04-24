import React from 'react';
import { render } from '@testing-library/react';
import { ComboInformation } from '../../models/Shared/ServiceInfoVM';
import ServiceListActionsFactory from './ServiceListActionsFactory';

describe('ServiceListActionsFactory', () => {
  it('should find message as expected', () => {
    const service: ComboInformation = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: true,
    };
    const { getByText } = render(<ServiceListActionsFactory service={service} />);

    getByText('usługa dostępna tylko w pakiecie', { exact: false });
  });
  it('should find button', () => {
    const service: ComboInformation = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: false,
    };
    const { getByRole } = render(<ServiceListActionsFactory service={service} />);

    getByRole('button');
  });
  it('button should have text as expected', () => {
    const service: ComboInformation = {
      id: 'tv',
      description: '',
      name: 'television',
      price: 20,
      includedServices: [],
      year: 1999,
      availableOnlyWithPackage: false,
    };
    const { getByRole } = render(<ServiceListActionsFactory service={service} />);

    expect(getByRole('button').textContent).toBe('wybieram');
  });
});
