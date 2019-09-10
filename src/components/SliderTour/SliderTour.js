import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {tourData} from '../tourData'
import Tour from '../Tour/Tour'
import Nav from 'react-bootstrap/Nav'
import './SliderTour.sass'

export default class SliderTour extends Component {
  state = {
    tours: tourData
   }
 render() {
  const {tours} = this.state;

  let settings = {
   arrows: false,
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1
 };
  return (
   <>
   <Nav defaultActiveKey="/home" as="ul" className="nav">
    <Nav.Item as="li">
      <Nav.Link href="/home" className="active">Горящие туры</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1">Популярные туры</Nav.Link>
    </Nav.Item>
   </Nav>

   <section className="tourlist">
    <Slider {...settings}>
     {tours.map(tour => {
     return (
      <Tour 
       key={tour.id}
       item={tour}
      />
     )
    })}
    </Slider>
   </section>
   </>
  )
 }
}
