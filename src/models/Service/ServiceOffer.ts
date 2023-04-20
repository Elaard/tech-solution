import { ServiceAvailableYears } from './ServiceAvailableYears';
import { BasicService, ServiceToOrder } from './ServiceInfo';

export interface ServiceOffer {
  services: BasicService[];
  packages: ServiceToOrder[];
  availableYears: ServiceAvailableYears;
}
