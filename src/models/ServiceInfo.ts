interface SingleServiceInfo {
  id: string;
  label: string;
  cost: number;
  requirePackage?: boolean;
}

interface AdditionalService {
  id: string;
  cost: number;
}

interface PackageServiceInfo extends Omit<SingleServiceInfo, 'requirePackage'> {
  additionalServices: AdditionalService[];
  packageComposedOfServices: string[];
}

export interface ServiceInfo {
  singleServiceList: SingleServiceInfo[];
  packageServiceList: PackageServiceInfo[];
}
