import { ServiceInfoVM } from '../models/Shared/ServiceInfoVM';

export const calculateTotalValue = (cartItems: ServiceInfoVM[]) => {
  let totalValue = 0;
  cartItems.forEach((cartItem) => {
    totalValue += cartItem.price;
  });
  return totalValue;
};
