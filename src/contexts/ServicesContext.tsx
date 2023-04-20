import React, { createContext } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';
import { BasicService } from '../models/Service/ServiceInfo';

export interface ServicesContext {
  services: ServiceOffer;
  getBasicServices: () => BasicService[];
  getBasicServiceById: (basicServiceId: string) => BasicService | undefined;
  isBasicServiceAvailableOnlyWithinPackage: (basicServiceId: string) => boolean;
}

const ServicesProvider = createContext<ServicesContext>({
  services: {
    services: [],
    packages: [],
    availableYears: [],
  },
  getBasicServices: () => [],
  getBasicServiceById: () => undefined,
  isBasicServiceAvailableOnlyWithinPackage: () => false,
});

ServicesProvider.displayName = 'ServicesContextProvider';

export function useServiceContext() {
  return useContext(ServicesProvider);
}

interface ServicesContextProps {
  children: JSX.Element;
}

const services: ServiceOffer = {
  services: [
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
      availableOnlyWithPackage: true,
    },
  ],
  packages: [
    //2023
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
          description: 'internet za prawie darmo',
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
          description: 'telewizja za prawie darmo',
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
          description: 'abonament za prawie darmo',
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
          description: 'decoder4k za prawie darmo',
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
          description: 'internet za prawie darmo',
        },
        {
          id: 'tv',
          price: 0,
          description: 'tv za prawie darmo',
        },
        {
          id: 'decoder4k',
          price: 0,
          description: 'decoder4k za prawie darmo',
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
          description: 'internet za prawie darmo',
        },
        {
          id: 'abo',
          price: 0,
          description: 'abo za prawie darmo',
        },
      ],
    },
    //2024
    {
      id: 'internet_package',
      name: 'Internet',
      year: 2024,
      price: 49,
      description: 'internet',
      includedServices: [
        {
          id: 'internet',
          price: 0,
          description: 'internet za prawie darmo',
        },
      ],
    },
    {
      id: 'tv_package',
      name: 'Telewizja',
      year: 2024,
      price: 49,
      description: 'tv',
      includedServices: [
        {
          id: 'tv',
          price: 0,
          description: 'telewizja za prawie darmo',
        },
      ],
    },
    {
      id: 'abo_package',
      name: 'Abonament',
      year: 2024,
      price: 29,
      description: 'abo',
      includedServices: [
        {
          id: 'abo',
          price: 0,
          description: 'abonament za prawie darmo',
        },
      ],
    },
    {
      id: 'decoder_package',
      name: 'Decoder 4k',
      year: 2024,
      price: 29,
      description: 'decoder',
      includedServices: [
        {
          id: 'decoder4k',
          price: 0,
          description: 'decoder4k za prawie darmo',
        },
      ],
    },
    {
      id: 'internet&tv_package',
      name: 'Internet + telewizja',
      year: 2024,
      price: 89,
      description: 'internet + tv',
      includedServices: [
        {
          id: 'internet',
          price: 0,
          description: 'internet za prawie darmo',
        },
        {
          id: 'tv',
          price: 0,
          description: 'tv za prawie darmo',
        },
        {
          id: 'decoder4k',
          price: 0,
          description: 'decoder4k za prawie darmo',
        },
      ],
    },
    {
      id: 'internet&abo_package',
      name: 'Internet + Abonament telefoniczny',
      year: 2024,
      price: 64,
      description: 'Internet + Abonament telefoniczny',
      includedServices: [
        {
          id: 'internet',
          price: 0,
          description: 'internet za prawie darmo',
        },
        {
          id: 'abo',
          price: 0,
          description: 'abo za prawie darmo',
        },
      ],
    },
    //2025
    {
      id: 'internet_package',
      name: 'Internet',
      year: 2025,
      price: 59,
      description: 'internet',
      includedServices: [
        {
          id: 'internet',
          price: 0,
          description: 'internet za prawie darmo',
        },
      ],
    },
    {
      id: 'tv_package',
      name: 'Telewizja',
      year: 2025,
      price: 59,
      description: 'tv',
      includedServices: [
        {
          id: 'tv',
          price: 0,
          description: 'telewizja za prawie darmo',
        },
      ],
    },
    {
      id: 'abo_package',
      name: 'Abonament',
      year: 2025,
      price: 29,
      description: 'abo',
      includedServices: [
        {
          id: 'abo',
          price: 0,
          description: 'abonament za prawie darmo',
        },
      ],
    },
    {
      id: 'decoder_package',
      name: 'Decoder 4k',
      year: 2025,
      price: 29,
      description: 'decoder',
      includedServices: [
        {
          id: 'decoder4k',
          price: 0,
          description: 'decoder4k za prawie darmo',
        },
      ],
    },
    {
      id: 'internet&tv_package',
      name: 'Internet + telewizja',
      year: 2025,
      price: 99,
      description: 'internet + tv',
      includedServices: [
        {
          id: 'internet',
          price: 0,
          description: 'internet za prawie darmo',
        },
        {
          id: 'tv',
          price: 0,
          description: 'tv za prawie darmo',
        },
        {
          id: 'decoder4k',
          price: 0,
          description: 'decoder4k za prawie darmo',
        },
      ],
    },
    {
      id: 'internet&abo_package',
      name: 'Internet + Abonament telefoniczny',
      year: 2025,
      price: 64,
      description: 'Internet + Abonament telefoniczny',
      includedServices: [
        {
          id: 'internet',
          price: 0,
          description: 'internet za prawie darmo',
        },
        {
          id: 'abo',
          price: 0,
          description: 'abo za prawie darmo',
        },
      ],
    },
  ],
  availableYears: [2023, 2024, 2025],
};

const ServicesContext = ({ children }: ServicesContextProps) => {
  const getBasicServices = () => {
    return services.services;
  };
  const getBasicServiceById = (basicServiceId: string) => {
    return getBasicServices().find(({ id }) => id === basicServiceId);
  };
  const isBasicServiceAvailableOnlyWithinPackage = (basicServiceId: string): boolean => {
    return !!getBasicServiceById(basicServiceId)?.availableOnlyWithPackage;
  };
  return (
    <ServicesProvider.Provider value={{ services, getBasicServices, getBasicServiceById, isBasicServiceAvailableOnlyWithinPackage }}>
      {children}
    </ServicesProvider.Provider>
  );
};

export default ServicesContext;
