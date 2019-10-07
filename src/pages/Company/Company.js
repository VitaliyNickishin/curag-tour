import React from 'react'
// import { Container } from 'react-bootstrap'
import Hero from '../../components/Hero/Hero'
import Bunner from '../../components/Bunner/Bunner'
import AroundWorld from '../../components/AroundWorld/AroundWorld'
import Breadcrumbs from '../../components/Crumb/Breadcrumbs';

export default function Company() {
 return (
  <>
  <Breadcrumbs/>
   <Hero name="about" title="О нашей компании">
    <Bunner/>
   </Hero>
   <AroundWorld/>
  </>
 )
}
