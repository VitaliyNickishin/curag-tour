import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Error from './Error'
// import Button from '../Button/Button'
import '../Button/Button.sass'
import './FormikForm.sass'

const validationSchema = Yup.object().shape({
 country: Yup.string()
 .max(255, "Must be shorter than 255")
 .required("Choose your country"),
 people: Yup.number()
 .required("Choose amount people"),
 budget: Yup.string()
 .max(255, "Must be shorter than 255")
 .required("Choose your budget"),
 email: Yup.string()
 .email("Must be a valid email address")
 .max(255, "Must be shorter than 255")
 .required("Must enter an email"),
 phone: Yup.number()
 .required("Required")
 .min(12, "Phone is too short - should be 12 characters minimum"),
 // .matches(/(?=.*[0-9])/, "Phone must contain a number"),
 name: Yup.string()
 .required("Must enter a name")
 .min(2, "Must have a character")
 .max(255, "Must be shorter than 255")
 // .matches(["A-z"], "Name must not contain a number")
})

export default function FormikForm() {
 return (
  <Formik
   initialValues = {{
    country: "",
    people: "",
    budget: "",
    email: "",
    phone: "",
    name: ""
   }}
   validationSchema = {validationSchema}
   onSubmit={(values, {setSubmitting, resetForm}) => {
    setSubmitting(true);
    setTimeout(() => {
     // alert(JSON.stringify(values, null, 2));
     console.log(values);
     resetForm();
     setSubmitting(false);
    }, 500);
   }}
  >
   {({
    values,/* вводимые значения пользователем */
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
   }) => (
    <form className="formik-form" onSubmit={handleSubmit}>
    {/* {JSON.stringify(values)} */}
     <div className="input-row">
      <label htmlFor="country">Куда вы хотите поехать?</label>
      <div className="input-wrap">
       <input 
        name="country"
        type="text"
        id="country"
        placeholder="Страна"
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.country && errors.country ? "has-error" : null}
        />
        <Error touched={touched.country} message={errors.country} />
      </div>
     </div>

     <div className="input-row">
      <label htmlFor="people">Сколько людей едит</label>
      <div className="input-wrap">
       <input 
        name="people"
        type="number"
        id="people"
        placeholder="Количество людей"
        value={values.people}
        onChange={handleChange}
        onBlur={handleBlur}
        className={touched.people && errors.people ? "has-error" : null}
        />
        <Error touched={touched.people} message={errors.people} />
       </div>
     </div>

     <div className="input-row">
      <label htmlFor="budget">Ваш бюджет</label>
      <div className="input-wrap">
       <input 
       name="budget"
       type="text"
       id="budget"
       placeholder="от 600$ до 900$"
       value={values.budget}
       onChange={handleChange}
       onBlur={handleBlur}
       className={touched.budget && errors.budget ? "has-error" : null}
       />
       <Error touched={touched.budget} message={errors.budget} />
      </div>
     </div>

     <div className="input-row">
      <label htmlFor="email">Ваша почта</label>
      <div className="input-wrap">
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
       <Error touched={touched.email} message={errors.email} />
      </div>
     </div>

     <div className="input-row">
      <label htmlFor="phone">Номер телефона</label>
      <div className="input-wrap">
       <input 
       name="phone"
       type="phone"
       placeholder="+380"
       value={values.phone}
       onChange={handleChange}
       onBlur={handleBlur}
       className={touched.phone && errors.phone ? "has-error" : null}
       />
       <Error touched={touched.phone} message={errors.phone} />
      </div>
     </div>

     <div className="input-row">
      <label htmlFor="name">Ваше имя</label>
      <div className="input-wrap">
       <input 
       name="name"
       type="text"
       id="name"
       placeholder="Enter your name"
       value={values.name}
       onChange={handleChange}
       onBlur={handleBlur}
       className={touched.name && errors.name ? "has-error" : null}
       />
       <Error touched={touched.name} message={errors.name} />
      </div>
     </div>
     
     <div className="button-row">
      <button type="submit" disabled={isSubmitting} className='btn-offer'>Получить предложение</button>
     {/* <Button disabled={isSubmitting} /> */}
     </div>
      
    </form>
   )}
  </Formik>
  
 )
}
