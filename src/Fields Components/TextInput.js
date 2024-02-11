import React from 'react'

const TextInput =  ({ label, value, onChange, name }) => (
    <div>
      
      <input type="text" name='Text Field' value={value} onChange={onChange} placeholder='enter info...' required className='input'/>
    </div>
  );
  

export default TextInput;
