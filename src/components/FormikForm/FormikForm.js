import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Error from './Error'
import './FormikForm.sass'

const validationSchema = Yup.object().shape({
 email: Yup.string()
 .email("Must be a valid email address")
 .max(255, "Must be shorter than 255")
 .required("Must enter an email"),
 password: Yup.string()
 .required("Required")
 .min(8, "Password is too short - should be 8 characters minimum")
 .matches(/(?=.*[0-9])/, "Password must contain a number")
 .required("Required"),
 name: Yup.string()
 .required("Must enter a name")
 .min(2, "Must have a character")
 .max(255, "Must be shorter than 255")
})

export default function FormikForm() {
 return (
  <Formik
   initialValues = {{
    email: "",
    password: "",
    name: ""
   }}
   validationSchema = {validationSchema}
  >
   {(values,touched,errors,handleChange,handleBlur) => (
    <form className="formik-form">
    {JSON.stringify(values)}
     <div className="input-row">
      <label htmlFor="email">Email</label>
      <input 
       name="email"
       type="text"
       id="email"
       placeholder="Enter your email"
       value={values.email}
       onChange={handleChange}
       onBlur={handleBlur}
       className={touched.email && errors.email ? "has-error" : null}
       />
       {/* <Error touched={touched.email} message={errors.email} /> */}
     </div>

     <div className="input-row">
      <label htmlFor="password">Password</label>
      <input 
       name="password"
       type="password"
       placeholder="Enter your password"
       value={values.password}
       onChange={handleChange}
       onBlur={handleBlur}
       // className={touched.password && errors.password ? "has-error" : null}
       />
       {/* <Error touched={touched.password} message={errors.password} /> */}
     </div>

     <div className="input-row">
      <label htmlFor="name">Name</label>
      <input 
       name="name"
       type="text"
       id="name"
       placeholder="Enter your name"
       value={values.name}
       onChange={handleChange}
       onBlur={handleBlur}
       // className={touched.name && errors.name ? "has-error" : null}
       />
       {/* <Error touched={touched.name} message={errors.name} /> */}
     </div>
     
     <div className="input-row">
      <button type="submit">Login</button>
     </div>
      
    </form>
   )}
  </Formik>
  
 )
}
