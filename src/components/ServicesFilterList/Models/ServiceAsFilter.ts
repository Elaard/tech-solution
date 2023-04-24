import { Service } from '../../../models/Service/Service';

export interface ServiceAsFilter extends Service {
  isEnabled: boolean;
}
