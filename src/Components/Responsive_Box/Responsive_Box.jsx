import React, { useState, useEffect, Children } from 'react';

function Responsive_Box({ width, isVisibleProp = true, children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(isVisibleProp && window.innerWidth >= width);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      setIsVisible(isVisibleProp && currentWidth >= width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, isVisibleProp]);

  return (
    <>
      {isVisible && (
        <>
          {children}
        </>
      )}
    </>
  );
}

export default Responsive_Box;