import React from 'react';
import '../Dashboard.scss';
import { Link } from 'react-router-dom';

const Section_N1 = () => {
  return (
    <section className='Section_N1'>
      <div className='Assets_Card'>
        <header>
          <h1>Type of Assets</h1>
          <div></div>
        </header>
        <body>
          <ul>
            <li><Link className='Title' to="/CE/Savings">Savings Account</Link> <span>0 $</span></li>
          </ul>
        </body>
        <footer>
          <h1>Choose or asset</h1>
        </footer>
      </div>
    </section>
  )
};

export default Section_N1;