import React, { Component } from 'react'
import './FeedbackCard.sass'

export default class FeedbackCard extends Component {
 render() {
  const {img,name,description} = this.props
  return (
   <article className="feedback-card">
    <div className="card-img">
     <img
      src={img} 
      alt=""
     />
     </div>
     <div className="feedback-info">
      <h3>{name}</h3>
      <p>{description}</p>
     </div>
     
   </article>
  )
 }
}
