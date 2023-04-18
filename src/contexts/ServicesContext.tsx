import React from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/ServiceOffer';

export interface ServicesContext {
  services: ServiceOffer;
}

const ServicesProvider = React.createContext<ServicesContext>({
  services: {},
});

ServicesProvider.displayName = 'ServicesContextProvider';

export function useServiceContext() {
  return useContext(ServicesProvider);
}

interface ServicesContextProps {
  children: JSX.Element;
}

const ServicesContext = ({ children }: ServicesContextProps) => {
  const services: ServiceOffer = {
    2023: [
      {
        id: 'internet',
        name: 'Internet',
        price: 39,
        description: 'internet',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'tv',
        name: 'Telewizja',
        price: 49,
        description: 'tv',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'abo',
        name: 'Abonament',
        price: 29,
        description: 'abo',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'decoder',
        name: 'Decoder 4k',
        price: 29,
        description: 'decoder',
        includedServices: [],
        requiredServices: [
          {
            id: 'internet&tv',
            price: 0,
          },
          {
            id: 'tv',
            price: 0,
          },
        ],
        ammountOfRequiredServices: 1,
      },
      {
        id: 'internet&tv',
        name: 'Internet + telewizja',
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
            id: 'abo',
            price: 0,
          },
        ],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'internet&abo',
        name: 'Internet + Abonament telefoniczny',
        price: 64,
        description: 'Internet + Abonament telefoniczny',
        includedServices: [
          {
            id: 'decoder',
            price: 0,
          },
        ],
        requiredServices: [
          {
            id: 'internet',
            price: 0,
          },
          {
            id: 'abo',
            price: 0,
          },
        ],
        ammountOfRequiredServices: 0,
      },
    ],
    2024: [
      {
        id: 'internet',
        name: 'Internet',
        price: 49,
        description: 'internet',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'tv',
        name: 'Telewizja',
        price: 49,
        description: 'tv',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'abo',
        name: 'Abonament',
        price: 29,
        description: 'abo',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'decoder',
        name: 'Decoder 4k',
        price: 29,
        description: 'decoder',
        includedServices: [],
        requiredServices: [
          {
            id: 'internet&tv',
            price: 0,
          },
          {
            id: 'tv',
            price: 0,
          },
        ],
        ammountOfRequiredServices: 1,
      },
      {
        id: 'internet&tv',
        name: 'Internet + telewizja',
        price: 89,
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
            id: 'abo',
            price: 0,
          },
        ],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'internet&abo',
        name: 'Internet + Abonament telefoniczny',
        price: 64,
        description: 'Internet + Abonament telefoniczny',
        includedServices: [
          {
            id: 'decoder',
            price: 0,
          },
        ],
        requiredServices: [
          {
            id: 'internet',
            price: 0,
          },
          {
            id: 'abo',
            price: 0,
          },
        ],
        ammountOfRequiredServices: 0,
      },
    ],
    2025: [
      {
        id: 'internet',
        name: 'Internet',
        price: 59,
        description: 'internet',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'tv',
        name: 'Telewizja',
        price: 59,
        description: 'tv',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'abo',
        name: 'Abonament',
        price: 29,
        description: 'abo',
        includedServices: [],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'decoder',
        name: 'Decoder 4k',
        price: 29,
        description: 'decoder',
        includedServices: [],
        requiredServices: [
          {
            id: 'internet&tv',
            price: 0,
          },
          {
            id: 'tv',
            price: 0,
          },
        ],
        ammountOfRequiredServices: 1,
      },
      {
        id: 'internet&tv',
        name: 'Internet + telewizja',
        price: 99,
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
            id: 'abo',
            price: 0,
          },
        ],
        requiredServices: [],
        ammountOfRequiredServices: 0,
      },
      {
        id: 'internet&abo',
        name: 'Internet + Abonament telefoniczny',
        price: 64,
        description: 'Internet + Abonament telefoniczny',
        includedServices: [
          {
            id: 'decoder',
            price: 0,
          },
        ],
        requiredServices: [
          {
            id: 'internet',
            price: 0,
          },
          {
            id: 'abo',
            price: 0,
          },
        ],
        ammountOfRequiredServices: 0,
      },
    ],
  };

  return <ServicesProvider.Provider value={{ services }}>{children}</ServicesProvider.Provider>;
};

export default ServicesContext;
