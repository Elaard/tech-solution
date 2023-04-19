import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';

export interface ServicesFilterContext {
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
  isFilterEnabled: (filterId: string) => boolean;
}

const ServicesFilterProvider = createContext<ServicesFilterContext>({
  addFilter: () => null,
  removeFilter: () => null,
  isFilterEnabled: () => false,
});

ServicesFilterProvider.displayName = 'ServicesFilterContextProvider';

export function useServiceFilterContext() {
  return useContext(ServicesFilterProvider);
}

interface ServicesFilterContextProps {
  services: ServiceOffer;
  children: JSX.Element;
}

const ServicesFilterContext = ({ children }: ServicesFilterContextProps) => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filterId: string) => setFilters((prev) => [...prev, filterId]);

  const removeFilter = (FilterId: string) => setFilters((prev) => prev.filter((filter) => filter !== FilterId));

  const isFilterEnabled = (filterId: string) => filters.includes(filterId);

  return (
    <ServicesFilterProvider.Provider
      value={{
        addFilter,
        removeFilter,
        isFilterEnabled,
      }}
    >
      {children}
    </ServicesFilterProvider.Provider>
  );
};

export default ServicesFilterContext;
