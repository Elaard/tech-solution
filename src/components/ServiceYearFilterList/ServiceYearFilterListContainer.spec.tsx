import React from 'react';
import { renderWithAllProviders } from '../../testUtils/withProviders';
import ServiceYearFilterListContainer from './ServiceYearFilterListContainer';
import { ServiceOffer } from '../../models/Service/ServiceOffer';
import { dataServices } from '../../testUtils/data';
import { fireEvent } from '@testing-library/react';

describe('ServiceYearFilterContainer', () => {
  it('should find provided years', () => {
    const data: ServiceOffer = {
      services: dataServices,
      packages: [],
      availableYears: [2023, 2024, 2025],
    };
    const { getByText } = renderWithAllProviders(data, <ServiceYearFilterListContainer />);
    data.availableYears.forEach((year) => {
      getByText(year, { exact: false });
    });
  });
  it('after selecting year, element should get addtional class', () => {
    const data: ServiceOffer = {
      services: dataServices,
      packages: [],
      availableYears: [2023, 2024, 2025],
    };
    const { getByText } = renderWithAllProviders(data, <ServiceYearFilterListContainer />);

    const element = getByText(2023, { exact: false });
    fireEvent.click(element);

    const elements = document.querySelectorAll('li.service-year-filter-container__element.service-year-filter-container__element--active');

    expect(elements).toHaveLength(1);
    expect(elements[0]).toHaveTextContent('2023');
  });
});
