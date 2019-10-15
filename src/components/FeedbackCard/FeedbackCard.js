import React, { Component } from 'react'
// import shape from '../../img/feedback/feedback-shape.png'
import './FeedbackCard.sass'

export default class FeedbackCard extends Component {
 render() {
  const {url,name,description} = this.props.item
  return (
   <article className="feedback-card">
    <div className="card-img">
     <img
      src={url} 
      alt="photoimg"
     />
     {/* <img src={shape} alt="" className="shape"/> */}
     </div>
     <div className="stars">
      
     </div>
     <div className="feedback-info">
      <h3>{name}</h3>
      <p>{description}</p>
     </div>
     
   </article>
  )
 }
}
