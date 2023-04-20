import { ServiceId } from './ServiceId';
import { ServicePrice } from './ServicePrice';
import { ServiceYear } from './ServiceYear';

//basic services offered by the company
export interface BasicService {
  id: ServiceId;
  name: string;
  availableOnlyWithPackage?: boolean;
}
//services included in the packages
export interface AdditionalService {
  id: ServiceId;
  price: ServicePrice;
  description: string;
}
export interface ServiceToOrder extends BasicService {
  year: ServiceYear;
  price: ServicePrice;

  description: string;
  //services included as a package when selecting that particular service
  //e.g. tv installation
  includedServices: AdditionalService[];
}
