import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';

describe('should manage the number of available items in the shopping cart', () => {
  it('should show number', () => {
    const { getByText } = render(
      <Cart
        items={[
          {
            id: 'tv',
            name: 'television',
            year: 2023,
          },
        ]}
      />,
    );
    getByText(1);
  });
  it('should not show number', () => {
    const { queryByText } = render(<Cart items={[]} />);
    expect(queryByText(0)).toBe(null);
  });
});
