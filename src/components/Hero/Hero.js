import React from 'react'
import './Hero.sass'

export default function Hero({name, children, title}) {
 return (
  <div className={name}>
   <h1>{title}</h1>
   {children}
  </div>
 )
}
