import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from '../Title/Title'
import {Container} from 'react-bootstrap'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import { TourConsumer } from '../../context';
import {FaChevronRight} from 'react-icons/fa'
import {FaChevronLeft} from 'react-icons/fa'
import SliderArrow from '../SliderArrow/SliderArrow';
import './SliderFeedback.sass'



export default class SliderFeedback extends Component {
 render() {
  let settings = {
   className: 'feedback-slider',
			arrows: true,
   dots: true,
   infinite: true,
   speed: 1500,
   slidesToShow: 3,
   slidesToScroll: 3,
   prevArrow: <SliderArrow name="arrow feedback-prev" to="prew">
               <FaChevronLeft/>
              </SliderArrow>,
   nextArrow: <SliderArrow name="arrow feedback-next" to="next">
               <FaChevronRight/>
              </SliderArrow>,
   dotsClass: "feedback-dots",
   responsive: [
    {
      breakpoint: 992,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
						}
					},
    	{
      breakpoint: 670,
      settings: {
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
  ]
 };
  return (
   <TourConsumer>
    {value => {
     // const {feedback} = value;
      return (
       <section className="feedback">
        <Container>
         <Title 
          name="section-title feedback-title" 
          title="Отзывы довольных клиентов" 
         />
         <div className="feedback-list">
          <Slider {...settings}>
          {value.rewiew.map(rew => {
            return (
            <FeedbackCard
              key={rew.id}
              item={rew}
            />
            )
           })}
          </Slider>
         </div>
        </Container>
       </section>
       )
      }}
   </TourConsumer>
  )
 }
}
