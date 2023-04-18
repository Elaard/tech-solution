import { useCallback, useEffect } from 'react';

export type CartEvents = 'addItemToCart' | 'removeItemFromCart';

type CustomEvents = CartEvents;

export function createCustomEvent<T>(eventName: CustomEvents, data: T) {
  return new CustomEvent<T>(eventName, { detail: data });
}

export function useCustomEvent<T>(eventName: CustomEvents, action: (data: T) => void) {
  const onCustomEvent = useCallback((event: CustomEvent<T>) => action(event.detail), [action]) as EventListener;

  useEffect(() => {
    document.addEventListener(eventName, onCustomEvent);
    return () => {
      document.removeEventListener(eventName, onCustomEvent);
    };
  }, [eventName, onCustomEvent]);
}
