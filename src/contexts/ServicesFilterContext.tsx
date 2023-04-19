import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';
import { ServiceToOrder } from '../models/Service/ServiceInfo';

export interface ServicesFilterContext {
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
  isFilterEnabled: (filterId: string) => boolean;
  getFilteredServices: () => ServiceToOrder[];
}

const ServicesFilterProvider = createContext<ServicesFilterContext>({
  addFilter: () => null,
  removeFilter: () => null,
  isFilterEnabled: () => false,
  getFilteredServices: () => [],
});

ServicesFilterProvider.displayName = 'ServicesFilterContextProvider';

export function useServiceFilterContext() {
  return useContext(ServicesFilterProvider);
}

interface ServicesFilterContextProps {
  services: ServiceOffer;
  children: JSX.Element;
}

const ServicesFilterContext = ({ children, services }: ServicesFilterContextProps) => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filterId: string) => setFilters((prev) => [...prev, filterId]);

  const removeFilter = (FilterId: string) => setFilters((prev) => prev.filter((filter) => filter !== FilterId));

  const isFilterEnabled = (filterId: string) => filters.includes(filterId);

  const getPackageByIncludedServices = (includedServiceIds: string[]) => {
    return services.packages.filter(({ includedServices }) => {
      return includedServiceIds.every((id) => includedServices.some((includedService) => includedService.id === id));
    });
  };

  const getFilteredServices = () => {
    if (!filters.length) {
      return services.packages;
    }
    return getPackageByIncludedServices(filters);
  };

  return (
    <ServicesFilterProvider.Provider
      value={{
        addFilter,
        removeFilter,
        isFilterEnabled,
        getFilteredServices,
      }}
    >
      {children}
    </ServicesFilterProvider.Provider>
  );
};

export default ServicesFilterContext;
