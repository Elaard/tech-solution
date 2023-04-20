import React from 'react';
import { render } from '@testing-library/react';
import ServiceYearFilterListElement from './ServiceYearFilterListElement';

describe('ServiceYearFilterListElement', () => {
  it('should display expected text', () => {
    const { getByText } = render(<ServiceYearFilterListElement year={2023} setYearFilter={jest.fn()} isYearFilterEnabled={jest.fn()} />);
    getByText('oferta na rok 2023', { exact: false });
  });
  it('should have additional class', () => {
    const isYearFilterEnabledMocked = jest.fn();
    isYearFilterEnabledMocked.mockReturnValue(true);
    const { getByText } = render(
      <ServiceYearFilterListElement year={2023} setYearFilter={jest.fn()} isYearFilterEnabled={isYearFilterEnabledMocked} />,
    );
    const element = getByText('oferta na rok 2023', { exact: false });

    expect(element).toHaveClass('service-year-filter-container__element service-year-filter-container__element--active');
  });
  it('should not have additional class', () => {
    const isYearFilterEnabledMocked = jest.fn();
    isYearFilterEnabledMocked.mockReturnValue(false);
    const { getByText } = render(
      <ServiceYearFilterListElement year={2023} setYearFilter={jest.fn()} isYearFilterEnabled={isYearFilterEnabledMocked} />,
    );
    const element = getByText('oferta na rok 2023', { exact: false });

    expect(element).toHaveClass('service-year-filter-container__element', { exact: true });
  });
});
