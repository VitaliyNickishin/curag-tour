import React, { Component } from 'react'
import {TourConsumer} from '../../context'
import ButtonClose from '../ButtonClose/ButtonClose'
import {FaStar} from 'react-icons/fa'
import './ModalFeedback.sass'

export default class ModalFeedback extends Component {
 render() {
  return (
   <TourConsumer>
    {value => {
     const {modalOpen, closeModal} = value;
     const {url,name,alt,description} = value.modalFeedback;
     if (!modalOpen) {
      return null;
     }
     else {
      return (
       <div className="modal-overlay">
        <div className="modal-wrap">
        <ButtonClose
         name="modal-wrap__btn" 
         onClick={() => closeModal()}
        />
        <div className="img-wrap modal-img-wrap">
         <div className="face modal-face">
          <img
           src={url} 
           alt={alt}
          />
         </div>
        </div>
         <div className="stars modal-stars">
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
         </div>
         <div className="info modal-info">
          <h3>{name}</h3>
          <p>{description}</p>
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
