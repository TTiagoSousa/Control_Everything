import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../Apis_Dashboard.scss';
import useCompareCountryNames from '../../../../../../Hooks/Coutries/useCompareCountryNames';

const Country_Api_Card = () => {

  const { errorLength, errorName, errorFlag } = useCompareCountryNames();

  const ApiUpdate = () => {
    if(errorLength === undefined, errorName === undefined, errorFlag === undefined){
      return <span className='Loading'>Loading</span>;
    }else if (errorLength === true, errorName === true, errorFlag === true) {
      return <span className='NoData'>Possible Update</span>;
    } else if (errorLength === false, errorName === false, errorFlag === false) {
      return <span className='DataAvailable'>Api Working</span>;
    }
  };

  return (
    <div className='Api Country'>
      <div className='Title'>
        <span>Country List</span>
      </div>
      <div className='Information'>
        {ApiUpdate()}
        <Link to="Country_Api_Dashboard">Api Dashboard</Link>
      </div>
    </div>
  )
};

export default Country_Api_Card;  

