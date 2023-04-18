import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';

describe('should manage the quantity of available items in the shopping cart', () => {
  it('should show quantity', () => {
    const { getByText } = render(
      <Cart
        items={[
          {
            id: 'tv',
            name: 'television',
            year: 2023,
            quantity: 1,
          },
        ]}
      />,
    );
    getByText(1);
  });
  it('should not show quantity', () => {
    const { queryByText } = render(<Cart items={[]} />);
    expect(queryByText(0)).toBe(null);
  });
});
