import React from 'react'
import './Button.sass'

export default function Button(props) {
 const {name, onClick} = props
 return (
  <button 
   type="submit" 
   className={name}
   onClick={onClick}
   >
   Получить предложение
  </button>
 )
}
