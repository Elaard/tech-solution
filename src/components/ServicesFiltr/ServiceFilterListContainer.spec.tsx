import React from 'react';
import { renderWithAllProviders } from '../../testUtils/withProviders';
import ServiceFilterListContainer from './ServiceFilterListContainer';
import { dataServices } from '../../testUtils/data';
import { ServiceOffer } from '../../models/Service/ServiceOffer';

describe('should prepare data for filter components', () => {
  it('as above', () => {
    const data: ServiceOffer = {
      services: dataServices,
      packages: [
        {
          id: 'internet_package',
          name: 'Internet',
          year: 2023,
          price: 39,
          description: 'internet',
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
          description: 'tv',
          includedServices: [
            {
              id: 'tv',
              price: 0,
              description: '',
            },
          ],
        },
        {
          id: 'abo_package',
          name: 'Abonament',
          year: 2023,
          price: 29,
          description: 'abo',
          includedServices: [
            {
              id: 'abo',
              price: 0,
              description: '',
            },
          ],
        },
        {
          id: 'decoder_package',
          name: 'Decoder 4k',
          year: 2023,
          price: 29,
          description: 'decoder',
          includedServices: [
            {
              id: 'decoder4k',
              price: 0,
              description: '',
            },
          ],
        },
        {
          id: 'internet&tv_package',
          name: 'Internet + telewizja',
          year: 2023,
          price: 79,
          description: 'internet + tv',
          includedServices: [
            {
              id: 'internet',
              price: 0,
              description: '',
            },
            {
              id: 'tv',
              price: 0,
              description: '',
            },
            {
              id: 'decoder4k',
              price: 0,
              description: '',
            },
          ],
        },
        {
          id: 'internet&abo_package',
          name: 'Internet + Abonament telefoniczny',
          year: 2023,
          price: 64,
          description: 'Internet + Abonament telefoniczny',
          includedServices: [
            {
              id: 'internet',
              price: 0,
              description: '',
            },
            {
              id: 'abo',
              price: 0,
              description: '',
            },
          ],
        },
      ],
    };
    const { getByText } = renderWithAllProviders(data, <ServiceFilterListContainer />);

    data.services.forEach((service) => {
      getByText(service.name);
    });
  });
});
