import React from 'react';
import { Link } from 'react-router-dom';
import './Global_Button.scss';

const Global_Button = ({ Text, to, id, style, onClick, disabled  }) => {
  
  return (
    <>
      <Link 
        to={to}
        className='Global_Button'
      >
        <button 
          id={id}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          <span>{Text}</span>
          </button>
      </Link>
    </>
  )

};

export default Global_Button;