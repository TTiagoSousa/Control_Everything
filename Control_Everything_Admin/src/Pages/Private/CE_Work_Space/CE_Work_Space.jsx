import React from 'react';
import './CE_Work_Space.scss';
import * as Container from '../../../Imports/containers';
import Private_Routes from '../../../Routes/Private_Routes';

const CE_Work_Space = () => {
  return (

    <>
      <Container.Sidebar_Home />
      <Container.Header_Home/>
        
      <div className='CE_Section'>
        <div className='Container'>
          <Private_Routes />
        </div>
      </div>
    </>

    // <div className='CE_Work_Space'>
    //   <div>
    //     <span>Function Validation</span>
    //     <a 
    //       href="https://docs.google.com/spreadsheets/d/16CZDwGP0fykb0kPEoaLqP62Hj3Zn7XxtU6MjgXuhRuQ/edit?usp=drive_link" 
    //       target="_blank" 
    //       rel="noopener noreferrer"
    //    >
    //     <button>Link</button>
    //   </a>
    //   </div>
    // </div>
  )
};

export default CE_Work_Space;