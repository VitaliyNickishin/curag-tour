import React from 'react'
import './Button.sass'
import {Link} from 'react-router-dom'

export default function Button() {
 return (
  <Link to='/' className='btn-offer'>
   Получить предложение
  </Link>
 )
}
