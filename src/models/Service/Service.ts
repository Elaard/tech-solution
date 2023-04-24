import { ServiceId } from './ServiceId';

//basic services offered by the company
export interface Service {
  id: ServiceId;
  name: string;
  availableOnlyWithPackage?: boolean;
}
