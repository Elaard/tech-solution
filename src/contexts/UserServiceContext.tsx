import React from 'react';
import { useContext } from 'react';
import { ServiceOffert } from '../models/ServiceOffer';

export interface ServicesContext {}

const UserServicesProvider = React.createContext<ServicesContext>({});

UserServicesProvider.displayName = 'ServicesContextProvider';

export function useServiceContext() {
  return useContext(UserServicesProvider);
}

interface UserServicesContextProps {
  children: JSX.Element;
  services: ServiceOffert;
}

const UserServicesContext = ({ children, services }: UserServicesContextProps) => {
  return <UserServicesProvider.Provider value={{}}>{children}</UserServicesProvider.Provider>;
};

export default UserServicesContext;
