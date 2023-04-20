import React from 'react';
import { useServiceFilterContext } from '../../contexts/ServicesFilterContext';
import ServiceYearFilterList from './ServiceYearFilterList';

export default function ServiceYearFilterContainer() {
  const { setYearFilter, isYearFilterEnabled, getAvailableYears } = useServiceFilterContext();
  return <ServiceYearFilterList setYearFilter={setYearFilter} isYearFilterEnabled={isYearFilterEnabled} getAvailableYears={getAvailableYears} />;
}
