interface BasicServiceInfo {
  id: string;
  price: number;
}

export interface ServiceInfo extends BasicServiceInfo {
  name: string;
  description: string;
  //services included as a package when selecting that particular service
  includedServices: BasicServiceInfo[];
  //services required to select that particular service
  requiredServices: BasicServiceInfo[];
  //how many services require to obtain that particular service
  ammountOfRequiredServices: number;
}
