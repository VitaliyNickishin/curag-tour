import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {IoLogoInstagram} from "react-icons/io"
import './SocialIcons.sass'

export default function SocialIcons({name}) {
 return (
  <div className={`social ${name}`}>
   <a href="https://www.facebook.com/kurazhtur/">
    <FaFacebookF/>
   </a>
   <a href="https://instagram.com/kurazh.tour?igshid=69v828tmqqty">
    <IoLogoInstagram/>
   </a>
  </div>
 )
}
