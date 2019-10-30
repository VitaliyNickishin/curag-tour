import React from 'react'
import {Container} from 'react-bootstrap'
import './Section.sass'

export default function Section({name, children}) {
 return (
  <section className={`section ${name}`}>
   <Container>
    {children}
   </Container>
  </section>
 )
}
