import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {tourData} from '../tourData'
import Tour from '../Tour/Tour'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import './SliderTour.sass'

export default class SliderTour extends Component {
  state = {
    tours: tourData
   }
 render() {
  const {tours} = this.state;

  let settings = {
   arrows: true,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 };
  return (
    <section className="slide-tour">
   <Container>
    <Nav defaultActiveKey="/home" as="ul" className="nav">
      <Nav.Item as="li">
        <Nav.Link href="/home" className="active">Горящие туры</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Популярные туры</Nav.Link>
      </Nav.Item>
    </Nav>
   </Container>
   <div className="tourlist">
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
   </div>
   </section>
  )
 }
}
