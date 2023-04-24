import { Service } from './Service';
import { ServiceId } from './ServiceId';
import { ServicePrice } from './ServicePrice';
import { ServiceYear } from './ServiceYear';

//services included in the comboServices
export interface ComboIncludedServices {
  id: ServiceId;
  price: ServicePrice;
  description: string;
  isForFree?: boolean;
}
export interface Combo extends Service {
  year: ServiceYear;
  price: ServicePrice;

  description: string;
  //services included as a combo order when selecting that particular service
  //e.g. tv installation
  includedServices: ComboIncludedServices[];
}
