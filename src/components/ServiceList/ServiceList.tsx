import React from 'react';
import { PackageServiceInfo, SingleServiceInfo } from '../models/ServiceInfo';

interface PackageListProps {
  singleServices: SingleServiceInfo[];
  packageServices: PackageServiceInfo[];
}

export default function ServiceList({ singleServices, packageServices }: PackageListProps) {
  return <div>PackageList</div>;
}
