import React from 'react'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'
import './Logo.sass'


export default function Logo() {
 return (
  <Link to="/" className="logo">
   <img src={logo} alt="logo"/>
  </Link>
 )
}
