import React, { Component } from 'react'
import viber from '../../img/icons/viber-icon.png'
import telegram from '../../img/icons/telegram-icon.png'
import './PersonCard.sass'

export default class PersonCard extends Component {
 render() {
  const {img,name,phone,info} = this.props.card
  return (
   <article className="person-card">
    <div className="person-card-img">
     <img
      src={img} 
      alt="img"
     />
     </div>
     <div className="person-card-info">
      <div className="person-card-info__contacts">
       <strong>{name}</strong>
       <div className="number">
         <a href="tel:+380502872727">{phone}</a>
         <img src={viber} alt="Viber"/>
         <img src={telegram} alt="Telegram"/>
       </div>
      </div>
      <div className="person-card-info__text">
       <p>{info}</p>
      </div>
     </div>
   </article>
  )
 }
}
