import { IdObject } from '../models/Shared/IdObject';

export const extractIdsAndSort = (services: IdObject[]) => services.map((service) => service.id).sort();
