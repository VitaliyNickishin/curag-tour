import React from 'react'
import {MdCall} from 'react-icons/md'
import './Phone.sass'

export default function Phone({name}) {
 return (
  <div className={`phone ${name}`}>
   <MdCall/>
   <a href="tel:+380999908100">+38 (099) 990-81-00</a>
  </div>
 )
}
