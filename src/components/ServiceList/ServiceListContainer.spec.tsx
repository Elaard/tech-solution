import React from 'react';
import { dataServices } from '../../testUtils/data';
import { renderWithProviders } from '../../testUtils/withProviders';
import ServiceListContainer from './ServiceListContainer';
import { ServiceOffer } from '../../models/Service/ServiceOffer';

describe('ServiceListContainer', () => {
  it('should prepare data for display', () => {
    const data: ServiceOffer = {
      services: dataServices,
      comboServices: [
        {
          id: 'internet_package',
          name: 'Internet',
          year: 2023,
          price: 39,
          description: '',
          includedServices: [
            {
              id: 'internet',
              price: 0,
              description: '',
            },
          ],
        },
        {
          id: 'tv_package',
          name: 'Telewizja',
          year: 2023,
          price: 49,
          description: '',
          includedServices: [
            {
              id: 'tv',
              price: 0,
              description: '',
            },
          ],
        },
      ],
      availableYears: [2023],
    };
    const { queryAllByText } = renderWithProviders(data, <ServiceListContainer />);

    expect(queryAllByText('internet', { exact: false })).toHaveLength(2);
    expect(queryAllByText('telewizja', { exact: false })).toHaveLength(2);
  });
  it('should find service buyable only within combo order aswell', () => {
    const data: ServiceOffer = {
      services: dataServices,
      comboServices: [
        {
          id: 'dekoder_package',
          name: 'Dekoder 4k',
          year: 2023,
          price: 29,
          description: '',
          includedServices: [
            {
              id: 'dekoder4k',
              price: 0,
              description: '',
            },
          ],
        },
      ],
      availableYears: [2023],
    };
    const { queryAllByText } = renderWithProviders(data, <ServiceListContainer />);

    expect(queryAllByText('Dekoder 4k', { exact: false })).toHaveLength(2);
  });
  it('service buyable only withing combo order should have proper information instead of button', () => {
    const data: ServiceOffer = {
      services: dataServices,
      comboServices: [
        {
          id: 'dekoder_package',
          name: 'Dekoder 4k',
          year: 2023,
          price: 29,
          description: '',
          includedServices: [
            {
              id: 'dekoder4k',
              price: 0,
              description: '',
            },
          ],
        },
      ],
      availableYears: [2023],
    };
    const { getByText } = renderWithProviders(data, <ServiceListContainer />);

    getByText('Usługa dostępna tylko w pakiecie', { exact: false });
  });
  it('should display alternative message', () => {
    const data: ServiceOffer = {
      services: dataServices,
      comboServices: [],
      availableYears: [],
    };
    const { getByText } = renderWithProviders(data, <ServiceListContainer />);

    getByText('aktualnie w naszej ofercie nie ma pakietow z szukanymi uslugami', { exact: false });
  });
});
