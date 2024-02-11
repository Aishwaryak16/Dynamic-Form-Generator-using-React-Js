import React from 'react'

const RadioButton = ({ label, value, onChange }) => (
    <div>
      <label>
        <input type="radio" name='Radio Button Field' checked={value} onChange={onChange} className='checkbox'/>
      </label>
    </div>
  );
  

export default RadioButton
