import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import { ServiceOffer } from '../models/Service/ServiceOffer';
import { Combo } from '../models/Service/Combo';
import { ServiceYear } from '../models/Service/ServiceYear';
import { ServiceId } from '../models/Service/ServiceId';

export interface ServicesFilterContext {
  addFilter: (filterId: ServiceId) => void;
  removeFilter: (filterId: ServiceId) => void;
  setYearFilter: (year: ServiceYear) => void;
  isYearEqualToFilterYear: (providedYear: ServiceYear) => boolean;
  isIncludedServiceFilterEnabled: (filterId: ServiceId) => boolean;
  getAvailableYears: () => ServiceYear[];
  getFilteredComboOrders: () => Combo[];
}

const ServicesFilterProvider = createContext<ServicesFilterContext>({
  addFilter: () => null,
  removeFilter: () => null,
  setYearFilter: () => null,
  isYearEqualToFilterYear: () => false,
  isIncludedServiceFilterEnabled: () => false,
  getAvailableYears: () => [],
  getFilteredComboOrders: () => [],
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
    return services.comboServices.filter(({ includedServices }) => {
      return includedServiceIds.every((id) => includedServices.some((includedService) => includedService.id === id));
    });
  };

  const filterPackagesByYear = (year: ServiceYear, comboServices: Combo[]) => {
    return comboServices.filter((pack) => pack.year === year);
  };

  const getFilteredComboOrders = () => {
    let comboServices = services.comboServices;
    if (includedServices.length) {
      comboServices = getPackageByIncludedServices(includedServices);
    }
    return filterPackagesByYear(year, comboServices);
  };

  const setYearFilter = (providedYear: ServiceYear) => setYear(providedYear);

  const isYearEqualToFilterYear = (providedYear: ServiceYear) => providedYear === year;

  return (
    <ServicesFilterProvider.Provider
      value={{
        addFilter,
        removeFilter,
        setYearFilter,
        getFilteredComboOrders,
        isYearEqualToFilterYear,
        getAvailableYears,
        isIncludedServiceFilterEnabled,
      }}
    >
      {children}
    </ServicesFilterProvider.Provider>
  );
};

export default ServicesFilterContext;
