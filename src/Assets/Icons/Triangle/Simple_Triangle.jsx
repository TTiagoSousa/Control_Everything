import React from 'react';

const Simple_Triangle = ({ Global_Color }) => {

  return (
    <svg viewBox="0 0 16 16" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" fill={Global_Color}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill={Global_Color} d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"></path>
      </g>
    </svg>
  )
};

export default Simple_Triangle;