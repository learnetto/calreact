import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div>
    {Object.keys(formErrors).map((formErrorField) => {
      return (
        formErrors[formErrorField].map((error) => {
          return (
            <p>{formErrorField} {error}</p>
          )
        })
      )
    })}
  </div>
