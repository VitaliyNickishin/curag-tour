import React, { Component } from 'react'
import {FaStar} from 'react-icons/fa'
// import '../../fontello.scss'
// import shape from '../../img/feedback/feedback-shape.png'
import './FeedbackCard.sass'

export default class FeedbackCard extends Component {
 render() {
  const {url,name,description} = this.props.item
  return (
   <article className="feedback-card">
    <div className="img-wrap">
     <div className="face">
      <img
       src={url} 
       alt="photoimg"
      />
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
      <h3>{name}</h3>
      <p>{description}</p>
     </div>
     <button type="button" className="read-more">читать больше</button>
     
   </article>
  )
 }
}
