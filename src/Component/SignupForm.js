/*Formik is a popular open-source
library for building and 
processing form data in React 
applications. It provides many 
utility components and functions 
that make handling form data in 
a React application more enjoyable.*/
//npm install formik --save
import React from "react";
import { Formik } from "formik";
import { useFormik } from 'formik';
const SignupForm = () => { 
  const formik = useFormik({ 
    initialValues: { 
      email: "", 
    }, 
    onSubmit: (values) => { 
      alert(JSON.stringify(values, null, 2)); 
    }, 
  }); 
  return ( 
    <form onSubmit={formik.handleSubmit}> 
      <label htmlFor="email">Email Address</label> 
      <input 
        id="email" 
        name="email" 
        type="email" 
        onChange={formik.handleChange} 
        value={formik.values.email} 
      /> 
      <button type="submit">Submit</button> 
    </form> 
  ); 
}; 
export default SignupForm;