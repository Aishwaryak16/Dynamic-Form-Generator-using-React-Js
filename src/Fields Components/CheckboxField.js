import React from 'react'

const CheckboxField = ({ label, value, onChange }) => (
    <div>
      <label className='checkbox-container'>
        <input type="checkbox" name='Checkbox Field' checked={value} onChange={onChange} className='checkbox'/>
      </label>
    </div>
  );
  

export default CheckboxField;
