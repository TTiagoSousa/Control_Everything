import React from 'react';

const Circle_Half = ({ Global_Color }) => {

  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill={Global_Color} fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 1.5v13a6.5 6.5 0 100-13z" clipRule="evenodd"></path>
      </g>
    </svg>
  )
};

export default Circle_Half;