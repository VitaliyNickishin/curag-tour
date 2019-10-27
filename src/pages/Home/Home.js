import React from 'react'
import CarouselSider from '../../components/CarouselSider/CarouselSider';
import Timer from '../../components/Timer/Timer'
import SliderTour from '../../components/SliderTour/SliderTour';
import Benefits from '../../components/Benefits/Benefits'
import Offer from '../../components/Offer/Offer'
import Modal from '../../components/Modal/Modal'
// import '../../index.sass'

export default function Home() {
 return (
  <>
   <CarouselSider />
   <Timer/>
   {/* <Navbars /> */}
   <SliderTour/>
   <Benefits/>
   <Offer/>
   {/* <Footer/> */}
   <Modal/>
  </>
 )
}
