import React from 'react'
import {Formik} from 'formik'
import * as EmailValidator from 'email-validator'
import * as Yup from 'yup'
import './ValidatedFormik.sass'

const ValidatedForm = () => (
 <Formik
   initialValue = {{email: "", password: ""}}
   onSubmit = { (values, {setSubmitting}) => {
    console.log('Submitting');
   }}

  //  validationShema = { Yup.object().shape({
  //    email: Yup.string()
  //    .email()
  //    .required("Required"),
  //    password: Yup.string()
  //    .required("Required")
  //    .min(8, "Password is too short - should be 8 characters minimum")
  //    .matches(/(?=.*[0-9])/, "Password must contain a number")
  //  })}
   
   validate = {values => {
    let errors = {};

    if (!values.email){
     errors.email = "Required";
    }
    else if (!EmailValidator.validate(values.email)) {
     errors.email = "Invalid Email Address"
    }

    const passwordRegex = /(?=.*[0-9])/;

    if (!values.password){
     errors.password = "Required";
    }
    else if (values.password.length < 8) {
     errors.password = "Password must be 8 characters long"
    }
    else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number"
    }


    return errors;
   }}
  >
   {props => {
    const {
     values,
     touched,
     errors,
     isSubmitting,
     handleSubmit,
     handleChange,
     handleBlur
    } = props;

  return (
  <form onSubmit = {handleSubmit}>
   <label htmlFor="email">Email</label>
   <input 
    name="email"
    type="text"
    placeholder="Enter your email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.email && touched.email && "error"}
    />
    {errors.email && touched.email && (
    <div className="input-feedback">
      {errors.email}
    </div>
    )}

   <label htmlFor="email">Password</label>
   <input 
    name="password"
    type="password"
    placeholder="Enter your password"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.password && touched.password && "error"}
    />
    {errors.password && touched.password && (
    <div className="input-feedback">
      {errors.password}
    </div>
    )}

    <button 
     type="submit"
     disabled={isSubmitting}
    >
      Login
    </button>
  </form>
 )
}}
   
 </Formik>
)

export default ValidatedForm

