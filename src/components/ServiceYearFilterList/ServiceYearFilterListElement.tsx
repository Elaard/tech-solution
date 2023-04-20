import React from 'react';
import { ServiceYear } from '../../models/Service/ServiceYear';

interface ServiceYearFilterListElementProps {
  year: ServiceYear;
  setYearFilter: (year: ServiceYear) => void;
  isYearFilterEnabled: (providedYear: number) => boolean;
}

export default function ServiceYearFilterListElement({ year, setYearFilter, isYearFilterEnabled }: ServiceYearFilterListElementProps) {
  const text = `oferta na rok ${year}`;

  const className = isYearFilterEnabled(year)
    ? 'service-year-filter-container__element service-year-filter-container__element--active'
    : 'service-year-filter-container__element';

  return (
    <li onClick={() => setYearFilter(year)} className={className}>
      {text}
    </li>
  );
}
