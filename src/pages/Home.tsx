import React from 'react';
import { useServiceContext } from '../contexts/ServicesContext';
import ServicesFilterContext from '../contexts/ServicesFilterContext';
import ServiceFilterListContainer from '../components/ServicesFilter/ServiceFilterListContainer';
import ServiceListContainer from '../components/ServiceList/ServiceListContainer';
import ServiceYearFilterContainer from '../components/ServiceYearFilter/ServiceYearFilterContainer';

export default function Home() {
  const { services } = useServiceContext();
  return (
    <ServicesFilterContext services={services}>
      <div className="home-page">
        <section className="offer">
          <h2 className="offer__title">Zaznacz Filtery i znajdź usługi, które cię interesują </h2>
          <div className="offer__filter">
            <ServiceFilterListContainer />
          </div>
          <div className="offer__service-per-year">
            <ServiceYearFilterContainer />
          </div>
          <div className="offer__list">
            <ServiceListContainer />
          </div>
        </section>
      </div>
    </ServicesFilterContext>
  );
}
