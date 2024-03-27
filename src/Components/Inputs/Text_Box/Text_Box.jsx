import React from 'react';
import './Text_Box.scss';

const Text_Box = ({ value, onChange, placeholder }) => {

  const handleChange = (event) => {
    const newValue = event.target.value !== undefined ? event.target.value.toString() : '';
    onChange(newValue);
  };

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
        // placeholder={value ? '' : 'Observações'}
      ></textarea>
    </div>
  );
};

export default Text_Box;