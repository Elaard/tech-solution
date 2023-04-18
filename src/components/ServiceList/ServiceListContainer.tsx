import React from 'react';
import SingleServiceList from './singleServiceList';
import PackageServiceList from './PackageServiceList';

export default function ServiceListContainer() {
  const singleServiceList = [];
  const packageServiceList = [];

  return (
    <>
      <SingleServiceList services={singleServiceList} />
      <PackageServiceList services={packageServiceList} />
    </>
  );
}
