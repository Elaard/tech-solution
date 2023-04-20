import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';
import { ServiceToOrder } from '../models/Service/ServiceInfo';
import { ServiceYear } from '../models/Service/ServiceYear';
import { ServiceAvailableYears } from '../models/Service/ServiceAvailableYears';

export interface ServicesFilterContext {
  addFilter: (filterId: string) => void;
  removeFilter: (filterId: string) => void;
  setYearFilter: (year: ServiceYear) => void;
  isYearFilterEnabled: (providedYear: ServiceYear) => boolean;
  isIncludedServiceFilterEnabled: (filterId: string) => boolean;
  getAvailableYears: () => ServiceAvailableYears;
  getFilteredServices: () => ServiceToOrder[];
}

const ServicesFilterProvider = createContext<ServicesFilterContext>({
  addFilter: () => null,
  removeFilter: () => null,
  setYearFilter: () => null,
  isYearFilterEnabled: () => false,
  isIncludedServiceFilterEnabled: () => false,
  getAvailableYears: () => [],
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
  const [includedServices, setIncludedServices] = useState<string[]>([]);

  const [year, setYear] = useState<ServiceYear>(0);

  const getAvailableYears = useCallback(() => services.availableYears ?? [], [services.availableYears]);

  const getFirstAvailableYear = useCallback(() => {
    return getAvailableYears().at(0) ?? 0;
  }, [getAvailableYears]);

  useEffect(() => {
    setYear(getFirstAvailableYear());
  }, [getFirstAvailableYear]);

  const addFilter = (serviceId: string) => setIncludedServices((prev) => [...prev, serviceId]);

  const removeFilter = (serviceId: string) => setIncludedServices((prev) => prev.filter((prevServiceId) => prevServiceId !== serviceId));

  const isIncludedServiceFilterEnabled = (serviceId: string) => includedServices.includes(serviceId);

  const getPackageByIncludedServices = (includedServiceIds: string[]) => {
    return services.packages.filter(({ includedServices }) => {
      return includedServiceIds.every((id) => includedServices.some((includedService) => includedService.id === id));
    });
  };

  const filterPackagesByYear = (year: ServiceYear, packages: ServiceToOrder[]) => {
    return packages.filter((pack) => pack.year === year);
  };

  const getFilteredServices = () => {
    let packages = services.packages;
    if (includedServices.length) {
      packages = getPackageByIncludedServices(includedServices);
    }
    return filterPackagesByYear(year, packages);
  };

  const setYearFilter = (providedYear: ServiceYear) => setYear(providedYear);

  const isYearFilterEnabled = (providedYear: ServiceYear) => providedYear === year;

  return (
    <ServicesFilterProvider.Provider
      value={{
        addFilter,
        removeFilter,
        setYearFilter,
        getFilteredServices,
        isYearFilterEnabled,
        getAvailableYears,
        isIncludedServiceFilterEnabled,
      }}
    >
      {children}
    </ServicesFilterProvider.Provider>
  );
};

export default ServicesFilterContext;
