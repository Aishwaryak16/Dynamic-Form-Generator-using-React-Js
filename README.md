# Dynamic Form Generator using React JS.
# To run this install node modules and run in the VS Code.
# Form Fields Configuration: 
  - Users can dynamically add form fields to create custom forms.
  - Each form field consists of properties like type (text input, text area, dropdown, checkbox, radio button), label, value, and options (for dropdown).
# State Management: 
  - The application uses React hooks like useState to manage state variables such as formFields, and selectedFieldType.
# Adding and Removing Form Fields:
  - Users can add form fields dynamically by selecting a field type and clicking the "Add Field" button.
  - The addFormField function creates a new form field object based on the selected field type and label value.
  - Users can remove form fields by clicking the "Remove" button associated with each field.
# Rendering Form Fields:
  - The renderFormField function dynamically renders the appropriate input field component based on the type of form field.
# Form Submission and Validation:
  - Users can submit the form, triggering the handleSubmit function.


Deployed Link - https://main--dynamic-form-generator-app.netlify.app/
