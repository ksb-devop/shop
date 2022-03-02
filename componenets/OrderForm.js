import React from 'react'
import * as Fields from './OrderFormFields'

export default function OrderForm({ OrderForm }) {
   
  
    return (
      <form>
      {OrderForm.map(({ __typename, ...OrderForm }, index) => {
        const Field = OrderForm[__typename];

        if (!Field) return null;

        return <Field key={index} {...OrderForm} />;
      })}

      <button type="submit">Submit</button>
    </form>
    );
  }