import React, { createContext } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';
import { ComboIncludedServices, Combo } from '../models/Service/Combo';
import { ComboInformation } from '../models/Service/ComboInformation';
import { ServiceYear } from '../models/Service/ServiceYear';
import { ServiceId } from '../models/Service/ServiceId';
import { Service } from '../models/Service/Service';

export interface ServicesContext {
  services: ServiceOffer;
  getBasicServices: () => Service[];
  getComboServiceById: (packageId: string) => Combo | undefined;
  getBasicServiceById: (serviceId: string) => Service | undefined;
  getComboServicesInformation: (comboServices: Combo[]) => ComboInformation[];
  getComboServiceByYear: (year: ServiceYear) => Combo[];
  isBasicServiceAvailableOnlyWithinCombo: (serviceId: string) => boolean;
}

const ServicesProvider = createContext<ServicesContext>({
  services: {
    services: [],
    comboServices: [],
    availableYears: [],
  },
  getComboServiceById: () => undefined,
  getBasicServices: () => [],
  getBasicServiceById: () => undefined,
  getComboServicesInformation: () => [],
  getComboServiceByYear: () => [],
  isBasicServiceAvailableOnlyWithinCombo: () => false,
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
      id: 'dekoder4k',
      name: 'Dekoder 4K',
      availableOnlyWithPackage: true,
    },
  ],
  comboServices: [
    //2023
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
      name: 'Decoder 4k',
      year: 2023,
      price: 29,
      description: 'dekoder',
      includedServices: [
        {
          id: 'dekoder4k',
          price: 0,
          description: 'dekoder4k za prawie darmo',
        },
      ],
    },
    {
      id: '5',
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
          id: 'dekoder4k',
          price: 0,
          description: 'dekoder4k za prawie darmo',
          isForFree: true,
        },
      ],
    },
    {
      id: '6',
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
      id: '7',
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
      id: '8',
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
      id: '9',
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
      id: '10',
      name: 'Decoder 4k',
      year: 2024,
      price: 29,
      description: 'dekoder',
      includedServices: [
        {
          id: 'dekoder4k',
          price: 0,
          description: 'dekoder4k za prawie darmo',
        },
      ],
    },
    {
      id: '11',
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
          id: 'dekoder4k',
          price: 0,
          description: 'dekoder4k za prawie darmo',
          isForFree: true,
        },
      ],
    },
    {
      id: '12',
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
      id: '13',
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
      id: '14',
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
      id: '15',
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
      id: '16',
      name: 'Decoder 4k',
      year: 2025,
      price: 29,
      description: 'dekoder',
      includedServices: [
        {
          id: 'dekoder4k',
          price: 0,
          description: 'dekoder4k za prawie darmo',
        },
      ],
    },
    {
      id: '17',
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
          id: 'dekoder4k',
          price: 0,
          description: 'dekoder4k za prawie darmo',
          isForFree: true,
        },
      ],
    },
    {
      id: '18',
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
  const getBasicServices = () => services.services;

  const getComboServices = () => services.comboServices;

  const getBasicServiceById = (serviceId: ServiceId) => {
    return getBasicServices().find(({ id }) => id === serviceId);
  };
  const isBasicServiceAvailableOnlyWithinCombo = (serviceId: ServiceId): boolean => {
    return !!getBasicServiceById(serviceId)?.availableOnlyWithPackage;
  };
  const getComboServiceByYear = (year: ServiceYear) => getComboServices().filter((comboService) => comboService.year === year);
  const getComboServiceById = (comboId: string) => {
    return getComboServices().find((pack) => pack.id === comboId) as Combo;
  };
  const isServiceAvailableOnlyWithinComboServices = (includedServices: ComboIncludedServices[]) => {
    if (includedServices.length !== 1) {
      return false;
    }
    return isBasicServiceAvailableOnlyWithinCombo(includedServices[0].id);
  };
  const getComboServicesInformation = (comboServices: Combo[]): ComboInformation[] => {
    return comboServices.map((service) => {
      return {
        ...service,
        availableOnlyWithPackage: isServiceAvailableOnlyWithinComboServices(service.includedServices),
        includedServices: service.includedServices.map((includeService) => {
          const basicService = getBasicServiceById(includeService.id);
          return {
            ...includeService,
            name: basicService?.name ?? '',
          };
        }),
      };
    });
  };
  return (
    <ServicesProvider.Provider
      value={{
        services,
        getBasicServices,
        getComboServiceById,
        getBasicServiceById,
        getComboServicesInformation,
        getComboServiceByYear,
        isBasicServiceAvailableOnlyWithinCombo,
      }}
    >
      {children}
    </ServicesProvider.Provider>
  );
};

export default ServicesContext;
