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
   className: 'tour-slider',
	 arrows: true,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
	 slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
								// dotsClass: 'slick-dots slick-slider__dots',
        arrows: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
						}
					},
    	{
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
								arrows: false,
								dots: true
      }
    }
  ]
 };
  return (
  <section className="slide-tour">
   <Container>
    <Nav defaultActiveKey="/home" as="ul" className="nav slide-tour-nav">
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
