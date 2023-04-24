import { Combo } from './Combo';
import { Service } from './Service';
import { ServiceYear } from './ServiceYear';

export interface ServiceOffer {
  services: Service[];
  comboServices: Combo[];
  availableYears: ServiceYear[];
}
