import React from 'react';

const GLobal_SVG = ({ Global_Color, children }) => {

  const applyGlobalColorToChildren = (child) => {
    if (React.isValidElement(child)) {

      return React.cloneElement(child, { Global_Color });
    }
    return child;
  };

  return (
    <>
      {React.Children.map(children, applyGlobalColorToChildren)}
    </>
  )
  
};

export default GLobal_SVG;
