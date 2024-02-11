import React from 'react'

const TextAreaField = ({ label, value, onChange }) => (
    <div>
     
      <textarea value={value} name='Text Area Field' onChange={onChange} placeholder='enter info...' required className='input'/>
    </div>
  );

export default TextAreaField
