import React from 'react';
import Country_Api_Card from '../Components/Section_N1/Country_Api_Card';
import '../Apis_Dashboard.scss';
import Currency_Api_Card from '../Components/Section_N1/Currency_Api_Card';

const Section_N1 = () => {
  return (
    <section className='Section_N1'>
      <Country_Api_Card />
      <Currency_Api_Card />
    </section>
  )
};

export default Section_N1;
