import React, { Component } from 'react'
import './PersonCard.sass'

export default class PersonCard extends Component {
 render() {
  const {img,name,phone,info} = this.props.card
  return (
   <article className="person-card">
    <div className="person-card-img">
     <img
      src={img} 
      alt=""
     />
     </div>
     <div className="person-card-info">
      <div className="person-card-info__contacts">
       <p>{name}</p>
       <a href="tel:+380502872727">{phone}</a>
      </div>
      <div className="person-card-info__text">
       <p>{info}</p>
      </div>
     </div>
   </article>
  )
 }
}
