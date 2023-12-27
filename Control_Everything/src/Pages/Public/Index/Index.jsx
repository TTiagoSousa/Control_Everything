import React, { useState, useEffect } from 'react';
import './Index.scss';
import * as Container from '../../../Imports/containers';

const Index = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Ativar a animação após a montagem do componente
    setAnimate(true);
  }, []);

  return (
    <div className='Index'>

      <Container.Header_Index />
      
      <section className='Section_N1'>
        <div className="Title">
          <h1>Welcome to</h1>
          <h1>Control Everything</h1>
          <span className={` ${animate ? 'fadeInUp' : ''}`}>
            Welcome to Control Everything, your comprehensive financial analysis platform. Unlock the potential to manage cryptocurrencies, stocks, savings, and more—all in one place. Your hub for thorough financial analysis.
          </span>
        </div>
      </section>

    </div>
  )
}

export default Index;