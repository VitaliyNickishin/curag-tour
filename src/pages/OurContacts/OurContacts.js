import React from 'react'
import Breadcrumbs from '../../components/Crumb/Breadcrumbs'
// import Crumbs from '../../components/Crumb/Crumb'
import Location from '../../components/Location/Location'
import Hero from '../../components/Hero/Hero'
import Crumb from '../../components/Crumb/Crumb'
import './OurContacts.sass'

export default function OurContacts() {
 return (
  <>
   <Breadcrumbs/>
   {/* <Crumb/> */}
   <Hero name="our-contacts">
    <Location/>
   </Hero>
  </>
 )
}
