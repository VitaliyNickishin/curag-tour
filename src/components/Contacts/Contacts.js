import React from 'react'
import Point from '../Point/Point'
import Phone from '../Phone/Phone'
import fb from '../../img/icons/facebook.png'
import inst from '../../img/icons/instagram.png'
import './Contacts.sass'

export default function Contacts() {
 return (
  <div className="contacts">
   <Point name="contacts-location"/>
   <Phone name="contacts-phone"/>
  <div className="contacts-social">
   <a /* target="_blank" */ href="https://www.facebook.com/kurazhtur/">
    <img src={fb} alt="fb"/>
   </a>
   <a /* target="_blank" */ href="https://www.instagram.com/kurazh.tour/?igshid=69v828tmqqty">
    <img src={inst} alt="inst"/>
   </a>
  </div>
  </div>
 )
}
