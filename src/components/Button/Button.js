import React from 'react'
import './Button.sass'

export default function Button({name}) {
 return (
  <button type="submit" className={name}>
   Получить предложение
  </button>
 )
}
