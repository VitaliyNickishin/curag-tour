import React from 'react'
import Point from '../Point/Point'
import Phone from '../Phone/Phone'
import SocialIcons from '../SocialIcons/SocialIcons'
// import fb from '../../img/icons/facebook.png'
// import inst from '../../img/icons/instagram.png'
import './Contacts.sass'

export default function Contacts({name}) {
 return (
  <div className={`contacts ${name}`}>
   <Point name="contacts__location"/>
   <Phone name="contacts__phone"/>
   <SocialIcons name="contacts__social"/>
  </div>
 )
}
