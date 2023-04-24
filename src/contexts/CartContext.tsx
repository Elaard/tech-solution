import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { CartItem } from '../models/Shared/CartItem';
import { ServiceId } from '../models/Service/ServiceId';
import { IncludedServicesVM, ComboInformation } from '../models/Service/ComboInformation';
import { useServiceContext } from './ServicesContext';
import { extractIds, removeDuplicates } from '../utils/arrayUtils';
import { Combo } from '../models/Service/Combo';
import { ServiceYear } from '../models/Service/ServiceYear';
import { calculateTotalValue } from '../utils/cartUtils';

export interface CartContext {
  cart: CartItem[];
  addItemToCart: (combo: ComboInformation) => void;
  removeItemFromCart: (combo: ComboInformation) => void;
  doesCartContainItems: () => boolean;
  findBestOfferCombination: () => ComboInformation[];
}

const CartProvider = createContext<CartContext>({
  cart: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  doesCartContainItems: () => false,
  findBestOfferCombination: () => [],
});

CartProvider.displayName = 'CartContextProvider';

export function useCartContext() {
  return useContext(CartProvider);
}

interface CartContextProps {
  children: JSX.Element;
}

const CartContext = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const { getComboServiceByYear, getComboServicesInformation } = useServiceContext();

  const createCartItem = (service: IncludedServicesVM, year: number): CartItem => ({ id: service.id, year });

  const createCartItems = (servicesPackage: ComboInformation): CartItem[] =>
    servicesPackage.includedServices.map((includedService) => createCartItem(includedService, servicesPackage.year));

  const filterCartItemFn = (element: CartItem, elementAtSameIndex: CartItem) =>
    element.id === elementAtSameIndex.id && element.year === elementAtSameIndex.year;

  const updateCart = (newCartItem: ComboInformation) =>
    setCart((prev) => removeDuplicates([...prev, ...createCartItems(newCartItem)], filterCartItemFn));

  const addItemToCart = (combo: ComboInformation) => updateCart(combo);

  const removeItemFromCart = (combo: ComboInformation) =>
    setCart((prev) => {
      const comboServices = extractIds(combo.includedServices);
      return prev.filter((cartItem) => !comboServices.includes(cartItem.id));
    });

  const doesCartContainItems = () => Boolean(cart.length);

  const filterIncludeServiceFn = (orderedServices: ServiceId[], includedServices: ServiceId[]) => {
    return orderedServices.filter((x) => !includedServices.includes(x));
  };

  const shouldComboBeAdded = (combo: Combo, orderedServices: ServiceId[]) => {
    return combo.includedServices.every((x) => orderedServices.includes(x.id) || x.isForFree);
  };

  const findOfferCombo = (combo: Combo, combos: Combo[], orderedServicesId: ServiceId[]) => {
    const path: Combo[] = [];
    const comboIncludedServiceIds = extractIds(combo.includedServices);
    let orderedServicesFilteredByComboServices = filterIncludeServiceFn(orderedServicesId, comboIncludedServiceIds);

    while (orderedServicesFilteredByComboServices.length) {
      combos.forEach((combo) => {
        const comboServices = extractIds(combo.includedServices);
        if (shouldComboBeAdded(combo, orderedServicesFilteredByComboServices)) {
          path.push(combo);
          orderedServicesFilteredByComboServices = filterIncludeServiceFn(orderedServicesFilteredByComboServices, comboServices);
        }
      });
    }
    return [combo, ...path];
  };

  const findYearsOfServiceInCart = () => {
    const years: ServiceYear[] = cart.map((cartItem) => cartItem.year);

    if (years.length === 1) {
      return years;
    }

    return [...new Set(years)];
  };

  const findCombosContaningPassedServices = (combos: Combo[], orderedServicesIds: ServiceId[]) =>
    combos.filter((x) => x.includedServices.every((includedService) => orderedServicesIds.includes(includedService.id) || includedService.isForFree));

  const findOfferCombos = (orderedServicesId: ServiceId[], year: ServiceYear) => {
    const combosByYear = getComboServiceByYear(year);
    const combosContaningCartServices = findCombosContaningPassedServices(combosByYear, orderedServicesId);
    return combosContaningCartServices.map((combo) => findOfferCombo(combo, combosContaningCartServices, orderedServicesId));
  };

  const findCheapestComboByTotalPrice = (combos: Combo[][]) => {
    let bestCombo: Combo[] = [];
    let bestComboPrice: number;

    combos.forEach((offerGroup) => {
      const comboPrize = calculateTotalValue(offerGroup);
      if (bestComboPrice === undefined || comboPrize < bestComboPrice) {
        bestCombo = offerGroup;
        bestComboPrice = comboPrize;
      }
    });

    return bestCombo;
  };

  const findCheapestCombo = (orderedServicesId: ServiceId[], year: ServiceYear) => {
    const combos = findOfferCombos(orderedServicesId, year);
    return findCheapestComboByTotalPrice(combos);
  };

  const findServicesByYear = (year: ServiceYear, cartItems: CartItem[]) => {
    return cartItems.filter((cartItem) => cartItem.year === year);
  };

  const getServicesAsIdsArray = (cartItems: CartItem[], year: ServiceYear) => {
    const servicesPerYear = findServicesByYear(year, cartItems);
    return extractIds(servicesPerYear);
  };

  const findBestOfferCombination = (): ComboInformation[] => {
    const offer: ComboInformation[] = [];

    if (!cart.length) {
      return offer;
    }

    const years = findYearsOfServiceInCart();

    const bestCombos: Combo[] = [];
    for (const year of years) {
      const orderedServicesIdByYear = getServicesAsIdsArray(cart, year);
      bestCombos.push(...findCheapestCombo(orderedServicesIdByYear, year));
    }

    return getComboServicesInformation(bestCombos);
  };

  return (
    <CartProvider.Provider value={{ cart, addItemToCart, removeItemFromCart, doesCartContainItems, findBestOfferCombination }}>
      {children}
    </CartProvider.Provider>
  );
};

export default CartContext;
