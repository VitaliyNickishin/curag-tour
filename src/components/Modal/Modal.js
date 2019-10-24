import React, { Component } from 'react'
import FormikForm from '../FormikForm/FormikForm'
import palm from '../../img/modal/palm.png'
import {TourConsumer} from '../../context'
import ButtonClose from '../ButtonClose/ButtonClose'
import './Modal.sass'

export default class Modal extends Component {
 render() {
  return (
   <TourConsumer>
    {value => {
     const {modalOpen, closeModal} = value;
     
     if (!modalOpen) {
      return null;
     }
     else {
      return (
       <div className="modals-overlay">
        <div className="modals-windows">
         <div className="modals-header">
         <h2>Получить подборку туров</h2>
         <ButtonClose
          name="modals-header__btn" 
          onClick={() => closeModal()}
         />
         </div>
         <div className="modals-body">
          <FormikForm/>
          <div className="img">
           <img src={palm} alt="palm"/>
          </div>
         </div>
        </div>
       </div>
      )
     }
    }}
   </TourConsumer>
  )
 }
}
