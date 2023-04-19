import { BasicService, ServiceToOrder } from './ServiceInfo';

export interface ServiceOffer {
  basicServices: BasicService[];
  servicesToOrder: ServiceToOrder[];
}
