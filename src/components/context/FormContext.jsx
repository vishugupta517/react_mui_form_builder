/* eslint-disable react/prop-types */
// src/contexts/FormContext.js
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState([
    {
      title: 'Example Form',
      fields: [
        {
          label: 'Name',
          required: true,
          type: 'single',
          errorMessage: 'Name is required'
        },
        {
          label: 'Description',
          required: false,
          type: 'multiline'
        },
        {
          label: 'Gender',
          required: true,
          type: 'radio',
          options: ['Male', 'Female']
        },
        {
          label: 'Rating',
          required: false,
          type: 'star'
        }
      ],
      logic: [],
      id: uuidv4()
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

  const addFieldToForm = (formId, newField) => {
    setForms((prev) =>
      prev.map((form) =>
        form.id === formId
          ? { ...form, fields: [...form.fields, newField] }
          : form
      )
    );
  };

  const updateFieldInForm = (formId, fieldIndex, updatedField) => {
    setForms((prev) =>
      prev.map((form) =>
        form.id === formId
          ? {
              ...form,
              fields: form.fields.map((field, index) =>
                index === fieldIndex ? updatedField : field
              )
            }
          : form
      )
    );
  };

  const setTitle = (formId, title) => {
    setForms((prev) =>
      prev.map((form) => (form.id === formId ? { ...form, title } : form))
    );
  };

  return (
    <FormContext.Provider
      value={{
        forms,
        addForm,
        updateForm,
        addFieldToForm,
        updateFieldInForm,
        setTitle
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
