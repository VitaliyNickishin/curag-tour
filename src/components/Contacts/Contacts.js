import React from 'react'
import location from '../../img/icons/location.png'
import phone from '../../img/icons/phone.png'
import fb from '../../img/icons/facebook.png'
import inst from '../../img/icons/instagram.png'
import './Contacts.sass'

export default function Contacts() {
 return (
  <div className="contacts">
  <div className="contacts-location">
   <img src={location} alt="location"/>
   <span>г. Харьков, ул. Лермонтовская 10а</span>
  </div>
  <div className="contacts-phone">
   <img src={phone} alt="phone"/>
   <a href="tel:+380999908100">+38 (099) 990-81-00 (viber, telegram)</a>
  </div>
  <div className="contacts-social">
   <img src={fb} alt="fb"/>
   <img src={inst} alt="inst"/>
  </div>
  </div>
 )
}
