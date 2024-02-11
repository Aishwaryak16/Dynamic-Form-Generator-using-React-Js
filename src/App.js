import React, { useState } from 'react';
import './App.css';
import TextInput from './Fields Components/TextInput';
import TextAreaField from './Fields Components/TextAreaField';
import DropdownField from './Fields Components/DropdownField';
import CheckboxField from './Fields Components/CheckboxField';
import RadioButton from './Fields Components/RadioButton';

const App = () => {
  const [formFields, setFormFields] = useState([]);
  const [selectedFieldType, setSelectedFieldType] = useState('text');

  const addFormField = (e) => {
    const newField = {
      type: selectedFieldType,
      label: 'Text Field',
      value: '',
      required: false,
      options: selectedFieldType === 'dropdown' ? ['Option 1', 'Option 2', 'option3'] : [],
    };
    setFormFields([...formFields, newField]);
  };

  const removeFormField = index => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleInputChange = (index, name, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][name] = value;
    setFormFields(updatedFields);
  };

  const renderFormField = (field, index, name) => {
    switch (field.type) {
      case 'text':
        return (
          <TextInput key={index} label= {field.label} value={field.value}
            onChange={event => handleInputChange(index, 'value', event.target.value)} /> );
              
      case 'textarea':
        return (
          <TextAreaField key={index} label={field.label} value={field.value}
            onChange={event => handleInputChange(index, 'value', event.target.value)}/> );

      case 'dropdown':
        return (
          <DropdownField key={index} label={field.label} value={field.value} options={field.options}
       onChange={event => handleInputChange(index, 'value', event.target.value)}/> );

      case 'checkbox':
        return (
          <CheckboxField key={index} label={field.label} value={field.value} checked={field.value}
            onChange={event => handleInputChange(index, 'value', event.target.value)}/> );

      case 'radio':
        return (
          <RadioButton key={index} label={field.label} checked={field.value === field.label}
            onChange={event => handleInputChange(index, 'value', event.target.value)}/> );

      default:
        return null;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formFields);
    //setSubmitted(true);

    alert ('Form Submitted', formFields);
    setFormFields([])
  };

  return (
    <div className='App'>
      <h1 className='mt-5 mb-5'>Dynamic Form Generator</h1>
      <div>
        <label className='me-3'>Select Field Type:</label>
        <select className='me-3' value={selectedFieldType} onChange={e => setSelectedFieldType(e.target.value)}>
          <option value="text">Text Input</option>
          <option value="textarea">Text Area</option>
          <option value="dropdown">Dropdown</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio Button</option>
        </select>
        <button onClick={addFormField} className='btn btn-dark'>Add Field</button>
      </div>

      { formFields.length > 0  ? < form onSubmit={handleSubmit} className='form'>
        {formFields.map((field, index) => (
          <div key={index} className='mb-3 d-flex align-items-center justify-content-center'>
            <label className='me-3 label'>{field.type}</label>
            {renderFormField(field, index)}
            <button type='submit' className='ms-3 del-icon btn btn-outline-danger' onClick={() => removeFormField(index)}>remove</button>
          </div>
        ))}
        
        <button type="submit" className='btn btn-dark mt-4'>Submit</button>
      </form> : <div className='form'> <p className='alert-mg'>Please add the form fields by selecting fields from the above dropdown</p> </div> }
    </div>
  );
};

export default App;
