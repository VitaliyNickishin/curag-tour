import React from 'react'
import './Title.sass'

export default function Title({title, name}) {
 return (
  <div className={name}>
   <h4>{title}</h4>
  </div>
 )
}
