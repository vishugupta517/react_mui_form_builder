/* eslint-disable react/prop-types */
// src/contexts/FormContext.js
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState([
    {
      id: uuidv4(),
      title: 'Example Form',
      fields: [
        {
          id: uuidv4(),
          label: 'Would you like to add a comment',
          errorMessage: 'This  is required',
          required: true,
          type: 'multiline'
        },
        {
          id: uuidv4(),
          label:
            'How likely is it that you will recommend us to your family and friends?',
          errorMessage: 'This  is required',
          required: true,
          type: 'numberRating'
        },
        {
          id: uuidv4(),
          label: 'Give a star rating for the website',
          errorMessage: 'This  is required',
          required: false,
          type: 'starRating'
        },
        {
          id: uuidv4(),
          label: 'What is  your opinion of this page?',
          errorMessage: 'This  is required',
          required: false,
          type: 'smileyRating'
        },
        {
          id: uuidv4(),
          label: 'Do you have any suggestions to improve our website?',
          required: true,
          type: 'singleLine',
          errorMessage: 'Name is required'
        },
        {
          id: uuidv4(),
          label: 'Multiple choice-1 answer',
          required: true,
          type: 'radio',
          options: ['Radio 1', 'Radio 2', 'Radio 3']
        },
        {
          id: uuidv4(),
          label: 'Pick a subject and provide your feedback:',
          required: true,
          type: 'category',
          options: ['Bug ', 'Content', 'Other']
        }
      ],
      logic: []
    }
  ]);

  const addForm = (newForm) => {
    setForms((prev) => [...prev, newForm]);
  };

  const updateForm = (id, updatedForm) => {
    setForms((prev) =>
      prev.map((form) => (form.id === id ? updatedForm : form))
    );
  };

  const deleteForm = (id) => {
    setForms((prevForms) => prevForms.filter((form) => form.id !== id));
  };

  const addFieldToForm = (formId, newField) => {
    setForms((prev) =>
      prev.map((form) =>
        form.id === formId
          ? { ...form, fields: [...form.fields, newField] }
          : form
      )
    );
  };

  const updateFieldInForm = (formId, fieldId, updatedField) => {
    setForms((prev) =>
      prev.map((form) => {
        if (form.id === formId) {
          console.log('Form found, updating...');
          return {
            ...form,
            fields: form.fields.map((field) =>
              field.id === fieldId ? { ...field, ...updatedField } : field
            )
          };
        }
        return form;
      })
    );
  };

  const deleteFieldInForm = (formId, fieldId) => {
    setForms((prev) =>
      prev.map((form) =>
        form.id === formId
          ? {
              ...form,
              fields: form.fields.filter((field) => field.id !== fieldId)
            }
          : form
      )
    );
  };

  return (
    <FormContext.Provider
      value={{
        forms,
        addForm,
        updateForm,
        deleteForm,
        addFieldToForm,
        updateFieldInForm,
        deleteFieldInForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
