import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../../components/Hero/Hero'
import Bunner from '../../components/Bunner/Bunner'

export default function Company() {
 return (
  <>
   <Hero name="about" title="О нашей компании">
    <Container>
     <Bunner/>
    </Container>
   </Hero>
  </>
 )
}
