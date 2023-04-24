import React from 'react';
import { render } from '@testing-library/react';
import { ComboInformation } from '../../models/Service/ComboInformation';
import ServiceListElement from './ServiceListElement';

describe('ServiceListElement', () => {
  it('should display static name: "pakiet"', () => {
    const service: ComboInformation = {
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
  it('should display name of combo order', () => {
    const service: ComboInformation = {
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
    const service: ComboInformation = {
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
  it('should display price of combo order', () => {
    const service: ComboInformation = {
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
