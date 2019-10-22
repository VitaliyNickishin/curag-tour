import React, { Component } from 'react'
import {TourConsumer} from '../../context'
import ButtonClose from '../ButtonClose/ButtonClose'
import {FaStar} from 'react-icons/fa'
import './ModalFeedback.sass'
// import '../FeedbackCard/FeedbackCard.sass'

export default class ModalFeedback extends Component {
 render() {
  return (
   <TourConsumer>
    {value => {
     const {modalOpen, closeModal} = value;
     // const {url,name,alt,description} = this.props.item;
     if (!modalOpen) {
      return null;
     }
     else {
      return (
       <div className="modal-overlay">
        <article className="feedback-card modal-feedback">
        <ButtonClose
         name="modal-feedback__close" 
         onClick={() => closeModal()}
        />
        <div className="img-wrap">
         <div className="face">
          {/* <img
           src={url} 
           alt={alt}
          /> */}
          {/* <img src={shape} alt="" className="shape"/> */}
         </div>
        </div>
         <div className="stars">
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          <FaStar className="stars-icon"/>
          {/* <i className="icon-star-empty-1 stars-icon"></i> */}
         </div>
         <div className="info">
          {/* <h3>{name}</h3>
          <p>{description}</p> */}
         </div>
       </article>
       </div>
       
      )
     }
    }}
   </TourConsumer>
  )
 }
}
