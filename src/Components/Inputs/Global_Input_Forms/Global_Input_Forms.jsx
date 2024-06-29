import React, { useState } from 'react';
import './Global_Input_Forms.scss';

const Global_Input_Forms = ({ selectValue, Text, onclick, image }) => {

  return (
    <div className='Global_Input_Forms' onClick={onclick}>
      <div className='Text'>
        <span>{Text}</span>
      </div>
      <div className='Container'>
        <span>{selectValue}</span>
        {image && (
          <>
            <span>-</span>
            <img src={image} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default Global_Input_Forms;