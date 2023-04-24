import { IdObject } from '../models/Shared/IdObject';

export const extractIds = (services: IdObject[]) => services.map((service) => service.id);

export function removeDuplicates<T>(arr: T[], filterFn: (element: T, elementAtIndex: T) => boolean) {
  return arr.filter((v, i, a) => a.findIndex((v2) => filterFn(v2, v)) === i);
}

export function findMinimumValue(arr: number[]) {
  let res = arr[0];

  const arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    res = Math.min(res, arr[i]);
  }

  return res;
}
