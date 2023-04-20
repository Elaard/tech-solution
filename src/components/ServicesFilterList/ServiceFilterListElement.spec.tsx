import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ServiceFilterListElement from './ServiceFilterListElement';
import { ServiceAsFilter } from '../../models/Service/ServiceAsFilter';

describe('should display service name', () => {
  it('as above', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: false, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    getByText(service.name);
  });
});

describe('should call proper function based on service.isEnabled property', () => {
  it('should call addFilter', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: false, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    fireEvent.click(getByText(service.name));

    expect(removeFilter).toBeCalledTimes(0);
    expect(addFilter).toBeCalledTimes(1);
  });
  it('should call removeFilter', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: true, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    fireEvent.click(getByText(service.name));

    expect(addFilter).toBeCalledTimes(0);
    expect(removeFilter).toBeCalledTimes(1);
  });
});

describe('should call function with service id', () => {
  it('should call addFilter', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: false, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    fireEvent.click(getByText(service.name));

    expect(addFilter).toBeCalledWith(service.id);
  });
  it('should call removeFilter', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: true, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    fireEvent.click(getByText(service.name));

    expect(removeFilter).toBeCalledWith(service.id);
  });
});

describe('should have proper class name based on service.isEnabled property', () => {
  it('service-filter-list__element', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: false, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    const element = getByText(service.name);

    expect(element).toHaveClass('service-filter-list__element', { exact: true });
  });
  it('service-filter-list__element service-filter-list__element--enabled', () => {
    const addFilter = jest.fn();
    const removeFilter = jest.fn();
    const service: ServiceAsFilter = { id: 'tv', isEnabled: true, name: 'Television' };
    const { getByText } = render(<ServiceFilterListElement service={service} addFilter={addFilter} removeFilter={removeFilter} />);

    const element = getByText(service.name);

    expect(element).toHaveClass('service-filter-list__element service-filter-list__element--enabled', { exact: true });
  });
});
