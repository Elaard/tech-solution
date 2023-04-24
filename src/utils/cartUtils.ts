interface Item {
  price: number;
}

export const calculateTotalValue = (cartItems: Item[]) => {
  let totalValue = 0;
  cartItems.forEach((cartItem) => {
    totalValue += cartItem.price;
  });
  return totalValue;
};
