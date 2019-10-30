import React from 'react'
import {Container} from 'react-bootstrap'
import Title from '../Title/Title'
import FormValid from '../FormValid/FormValid'
import {Fade} from 'react-reveal'
import {Bounce} from 'react-reveal'
// import ValidatedFormik from '../ValidatedFormik/ValidatedFormik'
import './Offer.sass'


export default function Offer() {
 return (
  <section className="offer">
   <Container>
    <Fade top delay={2000}>
     <Title title="Хочу предложение по туру" name="section-title offer-title"/>
    </Fade>
    <Bounce>
     <FormValid/>
    </Bounce>
    {/* <ValidatedFormik/> */}
   </Container>
  </section>
 )
}
