import React from 'react'
import Hero from '../../components/Hero/Hero'
import Bunner from '../../components/Bunner/Bunner'
import AroundWorld from '../../components/AroundWorld/AroundWorld'
import Breadcrumbs from '../../components/Crumb/Breadcrumbs';
import Team from '../../components/Team/Team';

export default function Company() {
 return (
  <>
  <Breadcrumbs/>
   <Hero name="about" title="О нашей компании">
    <Bunner/>
   </Hero>
   <AroundWorld/>
   <Team/>
  </>
 )
}
