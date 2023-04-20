import { ServiceId } from '../Service/ServiceId';
import { ServicePrice } from '../Service/ServicePrice';
import { ServiceYear } from '../Service/ServiceYear';

export interface AdditionalServiceVM {
  id: ServiceId;
  name: string;
  price: ServicePrice;
  description: string;
}

export interface ServiceInfoVM {
  id: string;
  name: string;
  year: ServiceYear;
  price: ServicePrice;

  availableOnlyWithPackage: boolean;

  description: string;
  includedServices: AdditionalServiceVM[];
}
