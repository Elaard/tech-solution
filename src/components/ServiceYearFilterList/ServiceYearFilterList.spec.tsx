import React from 'react';
import { render } from '@testing-library/react';
import ServiceYearFilterList from './ServiceYearFilterList';

describe('should return list of years', () => {
  it('as above', () => {
    const mockedYears = [2023, 2024, 2025];

    const getAvailableYears = jest.fn().mockReturnValue(mockedYears);

    const { getByText } = render(
      <ServiceYearFilterList setYearFilter={jest.fn()} isYearEqualToFilterYear={jest.fn()} getAvailableYears={getAvailableYears} />,
    );

    mockedYears.forEach((year) => {
      getByText(year, { exact: false });
    });
  });
});
