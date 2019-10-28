import React from 'react'
import CarouselSider from '../../components/CarouselSider/CarouselSider';
import SliderTour from '../../components/SliderTour/SliderTour';
import Benefits from '../../components/Benefits/Benefits'
import Offer from '../../components/Offer/Offer'
import Modal from '../../components/Modal/Modal'
// import '../../index.sass'

export default function Home() {
 return (
  <>
   <CarouselSider />
   <SliderTour/>
   <Benefits/>
   <Offer/>
   <Modal/>
  </>
 )
}
