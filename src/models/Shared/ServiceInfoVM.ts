import { Service } from '../Service/Service';
import { ServiceId } from '../Service/ServiceId';
import { ServicePrice } from '../Service/ServicePrice';
import { ServiceYear } from '../Service/ServiceYear';

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
