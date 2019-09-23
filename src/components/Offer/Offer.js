import React from 'react'
import {Container} from 'react-bootstrap'
import Title from '../Title/Title'
import FormValid from '../FormValid/FormValid'
// import ValidatedFormik from '../ValidatedFormik/ValidatedFormik'
import './Offer.sass'


export default function Offer() {
 return (
  <section className="offer">
   <Container>
    <Title title="Хочу предложение по туру" className="offer-title"/>
    <FormValid/>
    {/* <ValidatedFormik/> */}
   </Container>
  </section>
 )
}
