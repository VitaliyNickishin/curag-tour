import React from 'react'
import Point from '../Point/Point'
import Phone from '../Phone/Phone'
import SocialIcons from '../SocialIcons/SocialIcons'
// import fb from '../../img/icons/facebook.png'
// import inst from '../../img/icons/instagram.png'
import './Contacts.sass'

export default function Contacts() {
 return (
  <div className="contacts">
   <Point name="contacts-location"/>
   <Phone name="contacts-phone"/>
   <SocialIcons name="contacts-social"/>
  </div>
 )
}
