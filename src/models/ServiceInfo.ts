export interface SingleServiceInfo {
  id: string;
  label: string;
  cost: number;
  description: string;
  requirePackage?: boolean;
}

interface AdditionalService {
  id: string;
  cost: number;
}

export interface PackageServiceInfo extends Omit<SingleServiceInfo, 'requirePackage'> {
  additionalServices: AdditionalService[];
  packageComposedOfServices: string[];
}

export interface ServiceInfo {
  singleServiceList: SingleServiceInfo[];
  packageServiceList: PackageServiceInfo[];
}
