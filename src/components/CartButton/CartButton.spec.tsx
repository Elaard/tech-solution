import { render } from '@testing-library/react';
import React from 'react';
import CartButton from './CartButton';

describe('Cart', () => {
  it('should have image as expected', () => {
    const { getByRole } = render(<CartButton hasItems={false} redirectTo="" />);
    const element = getByRole('img') as HTMLImageElement;
    expect(element.src.includes('cart-green.svg')).toBe(true);
  });
  it('should have image as expected', () => {
    const { getByRole } = render(<CartButton hasItems={true} redirectTo="" />);
    const element = getByRole('img') as HTMLImageElement;
    expect(element.src.includes('cart-pink.svg')).toBe(true);
  });
});
