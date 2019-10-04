import React from 'react'
// import Navbars from '../../components/Navbar/Navbars';
import CarouselSider from '../../components/CarouselSider/CarouselSider';
import SliderTour from '../../components/SliderTour/SliderTour';
import Benefits from '../../components/Benefits/Benefits'
import Offer from '../../components/Offer/Offer'
// import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal'
// import '../../index.sass'

export default function Home() {
 return (
  <>
   <CarouselSider />
   {/* <Navbars /> */}
   <SliderTour/>
   <Benefits/>
   <Offer/>
   {/* <Footer/> */}
   <Modal/>
  </>
 )
}
