import React from 'react';
import './Loading_Balls.scss';

const Loading_Balls = ({ count }) => {
  const balls = Array.from({ length: count || 0 }, (_, index) => <span key={index}></span>);

  return (
    <div className='Loading_Balls'>
      {balls}
    </div>
  );
};

export default Loading_Balls;