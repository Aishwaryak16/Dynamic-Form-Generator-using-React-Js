import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownField = ({ label, value, options, onChange }) =>{ 
    

    return (
    <div>
      <select value={value} onChange={onChange} className='input' name='Dropdown Field'>
        {options.map((option, index) => (
          <option key={index} value={option} >{option}</option>
        ))}
      </select>
    </div>
  )};

export default DropdownField;