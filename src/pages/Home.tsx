import React from 'react';
import { useServiceContext } from '../contexts/ServicesContext';
import ServicesFilterContext from '../contexts/ServicesFilterContext';
import ServiceListContainer from '../components/ServicesFiltr/ServiceListContainer';

export default function Home() {
  const { services } = useServiceContext();
  return (
    <ServicesFilterContext services={services}>
      <div className="home-page">
        <section className="offer">
          <h2 className="offer__title">Zaznacz Filtery i znajdź usługi, które cię interesują </h2>
          <div className="offer__Filter">
            <ServiceListContainer />
          </div>
        </section>
      </div>
    </ServicesFilterContext>
  );
}
