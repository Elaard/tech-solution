import React from 'react';
import { ServiceYear } from '../../models/Service/ServiceYear';
import ServiceYearFilterListElement from './ServiceYearFilterListElement';

interface ServiceYearFilterProps {
  setYearFilter: (year: ServiceYear) => void;
  getAvailableYears: () => ServiceYear[];
  isYearEqualToFilterYear: (providedYear: number) => boolean;
}

export default function ServiceYearFilterList({ getAvailableYears, ...rest }: ServiceYearFilterProps) {
  return (
    <ul className="service-year-filter-container">
      {getAvailableYears().map((year) => (
        <ServiceYearFilterListElement key={'year_filter_' + year} year={year} {...rest} />
      ))}
    </ul>
  );
}
