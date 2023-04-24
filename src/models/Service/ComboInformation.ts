import { Service } from './Service';
import { ServiceId } from './ServiceId';
import { ServicePrice } from './ServicePrice';
import { ServiceYear } from './ServiceYear';

export interface IncludedServicesVM extends Service {
  description: string;
}

export interface ComboInformation {
  id: ServiceId;
  name: string;
  year: ServiceYear;
  price: ServicePrice;

  availableOnlyWithPackage: boolean;

  description: string;
  includedServices: IncludedServicesVM[];

  isForFree?: boolean;
}
