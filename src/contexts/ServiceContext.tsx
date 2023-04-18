import React from 'react';
import { useContext } from 'react';
import { ServiceOffert } from '../models/ServiceOffer';

export interface ServicesContext {}

const ServicesProvider = React.createContext<ServicesContext>({});

ServicesProvider.displayName = 'ServicesContextProvider';

export function useServiceContext() {
  return useContext(ServicesProvider);
}

interface ServicesContextProps {
  children: JSX.Element;
}

const services: ServiceOffert[] = [
  {
    year: 2023,
    services: {
      singleServiceList: [
        {
          id: 'internet',
          label: 'Internet',
          cost: 39,
        },
        {
          id: 'tv',
          label: 'Telewizja',
          cost: 49,
        },
        {
          id: 'abo',
          label: 'Abonament',
          cost: 29,
        },
        {
          id: 'decoder',
          label: 'Decoder 4k',
          cost: 29,
          requirePackage: true,
        },
      ],
      packageServiceList: [
        {
          id: 'internet&tv',
          label: 'Internet + telewizja',
          cost: 79,
          additionalServices: [],
          packageComposedOfServices: ['internet', 'tv'],
        },
        {
          id: 'internet&abo',
          label: 'Internet + Abonament telefoniczny',
          cost: 64,
          additionalServices: [
            {
              id: 'decoder',
              cost: 0,
            },
          ],
          packageComposedOfServices: ['internet', 'abo'],
        },
      ],
    },
  },
  {
    year: 2024,
    services: {
      singleServiceList: [
        {
          id: 'internet',
          label: 'Internet',
          cost: 49,
        },
        {
          id: 'tv',
          label: 'Telewizja',
          cost: 49,
        },
        {
          id: 'abo',
          label: 'Abonament',
          cost: 29,
        },
        {
          id: 'decoder',
          label: 'Decoder 4k',
          cost: 29,
          requirePackage: true,
        },
      ],
      packageServiceList: [
        {
          id: 'internet&tv',
          label: 'Internet + telewizja',
          cost: 89,
          additionalServices: [],
          packageComposedOfServices: ['internet', 'tv'],
        },
        {
          id: 'internet&abo',
          label: 'Internet + Abonament telefoniczny',
          cost: 64,
          additionalServices: [
            {
              id: 'decoder',
              cost: 0,
            },
          ],
          packageComposedOfServices: ['internet', 'abo'],
        },
      ],
    },
  },
  {
    year: 2025,
    services: {
      singleServiceList: [
        {
          id: 'internet',
          label: 'Internet',
          cost: 59,
        },
        {
          id: 'tv',
          label: 'Telewizja',
          cost: 59,
        },
        {
          id: 'abo',
          label: 'Abonament',
          cost: 29,
        },
        {
          id: 'decoder',
          label: 'Decoder 4k',
          cost: 29,
          requirePackage: true,
        },
      ],
      packageServiceList: [
        {
          id: 'internet&tv',
          label: 'Internet + telewizja',
          cost: 99,
          additionalServices: [],
          packageComposedOfServices: ['internet', 'tv'],
        },
        {
          id: 'internet&abo',
          label: 'Internet + Abonament telefoniczny',
          cost: 64,
          additionalServices: [
            {
              id: 'decoder',
              cost: 0,
            },
          ],
          packageComposedOfServices: ['internet', 'abo'],
        },
      ],
    },
  },
];

const ServicesContext = ({ children }: ServicesContextProps) => {
  return <ServicesProvider.Provider value={{}}>{children}</ServicesProvider.Provider>;
};

export default ServicesContext;
