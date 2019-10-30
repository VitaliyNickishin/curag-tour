import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import './Point.sass'

export default function Point({name}) {
 return (
  <div className={`point ${name}`}>
   <MdLocationOn/>
   <address>г. Харьков, ул. Лермонтовская 10а</address>
  </div>
 )
}
