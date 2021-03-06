import React from 'react'
import Hero from '../../components/Hero/Hero'
import Bunner from '../../components/Bunner/Bunner'
import AroundWorld from '../../components/AroundWorld/AroundWorld'
import Breadcrumbs from '../../components/Crumb/Breadcrumbs';
import Team from '../../components/Team/Team';
import Principles from '../../components/Principles/Principles';
import Direction from '../../components/Direction/Direction';
import SliderFeedback from '../../components/SliderFeedback/SliderFeedback';
import Offer from '../../components/Offer/Offer'
import ModalFeedback from '../../components/ModalFeedback/ModalFeedback';
import {Zoom} from 'react-reveal'

export default function Company() {
 return (
  <>
  <Breadcrumbs/>
   <Hero name="about" title="О нашей компании">
    <Zoom>
     <Bunner/>
    </Zoom>
   </Hero>
   <AroundWorld/>
   <Team/>
   <Principles/>
   <Direction/>
   <SliderFeedback/>
   <Offer/>
   <ModalFeedback/>
  </>
 )
}
