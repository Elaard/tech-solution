import { BasicService } from './ServiceInfo';

export interface ServiceAsFilter extends BasicService {
  isEnabled: boolean;
}
