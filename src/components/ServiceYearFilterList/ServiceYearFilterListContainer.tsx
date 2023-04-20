import React from 'react';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import ServiceYearFilterList from './ServiceYearFilterList';

export default function ServiceYearFilterListContainer() {
  const { setYearFilter, isYearEqualToFilterYear, getAvailableYears } = useServiceFilterContext();
  return (
    <ServiceYearFilterList setYearFilter={setYearFilter} isYearEqualToFilterYear={isYearEqualToFilterYear} getAvailableYears={getAvailableYears} />
  );
}
