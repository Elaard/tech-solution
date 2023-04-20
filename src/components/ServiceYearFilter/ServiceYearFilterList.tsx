import React from 'react';
import { ServiceYear } from '../../models/Service/ServiceYear';
import { ServiceAvailableYears } from '../../models/Service/ServiceAvailableYears';
import ServiceYearFilterListElement from './ServiceYearFilterListElement';

interface ServiceYearFilterProps {
  setYearFilter: (year: ServiceYear) => void;
  getAvailableYears: () => ServiceAvailableYears;
  isYearFilterEnabled: (providedYear: number) => boolean;
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
