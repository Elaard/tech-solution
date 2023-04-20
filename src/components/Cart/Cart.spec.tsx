import { render } from '@testing-library/react';
import React from 'react';
import Cart from './Cart';

describe('Cart', () => {
  it('should have image as expected', () => {
    const { getByRole } = render(<Cart hasItems={false} />);
    const element = getByRole('img') as HTMLImageElement;
    expect(element.src.includes('cart-green.svg')).toBe(true);
  });
  it('should have image as expected', () => {
    const { getByRole } = render(<Cart hasItems={true} />);
    const element = getByRole('img') as HTMLImageElement;
    expect(element.src.includes('cart-pink.svg')).toBe(true);
  });
});
