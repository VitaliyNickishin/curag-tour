import React from 'react'
import Section from '../../components/Section/Section'
import {Link} from 'react-router-dom'
import '../../components/Button/Button.sass'
import './Error.sass'

export default function Error() {
 return (
  <Section name="error">
   <h1>404</h1>
   <p>page not found</p>
   <Link to='/' className='btn-offer error-btn'>
     return home
    </Link>
  </Section>
 )
}
