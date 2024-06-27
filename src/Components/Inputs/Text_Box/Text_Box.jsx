import React from 'react';
import './Text_Box.scss';

const Text_Box = ({ value, onChange, placeholder, maxlength }) => {

  return (
    <div className="Text_Box">
      <textarea 
        value={value}
        onChange={onChange}
        name="" 
        id="" 
        cols="2" 
        rows="5"
        placeholder={placeholder}
        maxLength={maxlength}
      >
      
      </textarea>
    </div>
  );
};

export default Text_Box;