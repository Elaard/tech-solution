import React, { createContext } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';
import { BasicService } from '../models/Service/ServiceInfo';

export interface ServicesContext {
  services: ServiceOffer;
  getBasicServices: () => BasicService[];
}

const ServicesProvider = createContext<ServicesContext>({
  services: {
    basicServices: [],
    servicesToOrder: [],
  },
  getBasicServices: () => [],
});

ServicesProvider.displayName = 'ServicesContextProvider';

export function useServiceContext() {
  return useContext(ServicesProvider);
}

interface ServicesContextProps {
  children: JSX.Element;
}

const services: ServiceOffer = {
  basicServices: [
    {
      id: 'internet',
      name: 'Internet',
    },
    {
      id: 'tv',
      name: 'Telewizja',
    },
    {
      id: 'abo',
      name: 'Abonament telefoniczny',
    },
    {
      id: 'decoder4k',
      name: 'Dekoder 4K',
    },
  ],
  servicesToOrder: [
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
        },
        {
          id: 'tv',
          price: 0,
        },
        {
          id: 'decoder4k',
          price: 0,
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
        },
        {
          id: 'abo',
          price: 0,
        },
      ],
    },
  ],
};

const ServicesContext = ({ children }: ServicesContextProps) => {
  const getBasicServices = () => {
    return services.basicServices;
  };
  return <ServicesProvider.Provider value={{ services, getBasicServices }}>{children}</ServicesProvider.Provider>;
};

export default ServicesContext;
