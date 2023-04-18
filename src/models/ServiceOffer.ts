import { ServiceInfo } from './ServiceInfo';
import { ServiceYear } from './ServiceYear';

export type ServiceOffer = Record<ServiceYear, ServiceInfo[]>;
