import { ServiceInfo } from './ServiceInfo';
import { ServiceYear } from './ServiceYear';

export interface ServiceOffert {
  year: ServiceYear;
  services: ServiceInfo;
}
