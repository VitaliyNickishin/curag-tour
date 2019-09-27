import React from 'react'
import FormikForm from '../FormikForm/FormikForm'
import palm from '../../img/modal/palm.png'
import './Modal.sass'

export default function Modal() {
 return (
  <div className="modal-overlay">
   <div className="modal-windows">
    <h2>Получить подборку туров</h2>
    <div className="modal-body">
     <FormikForm/>
     <div className="img">
      <img src={palm} alt="palm"/>
     </div>
    </div>
   </div>
  </div>
 )
}
