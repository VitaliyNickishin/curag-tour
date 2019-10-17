import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from '../Title/Title'
import {Container} from 'react-bootstrap'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import {feedbackData} from '../tourData'
import {FaChevronRight} from 'react-icons/fa'
import {FaChevronLeft} from 'react-icons/fa'
import './SliderFeedback.sass'

function NextArrow(props) {
 const {className, style, onClick} = props;
 return (
  <button
   className={className}
   style={{...style, display: "block", background: "red"}}
   onClick={onClick}
  />
 )
}

export default class SliderFeedback extends Component {
 state = {
  feedback: feedbackData
 }
 render() {
  const {feedback} = this.state;
  let settings = {
			arrows: true,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   // nextArrow: <button className="next arrow"><FaChevronRight/></button>,
   nextArrow: <NextArrow className="next arrow"/>,
   prevArrow: <button className="prev arrow"><FaChevronLeft/></button>,
   responsive: [
    {
      breakpoint: 1700,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      // dotsClass: 'slick-dots slick-slider__dots',
      arrows: true,
      // nextArrow: <button className="next arrow"><FaChevronRight/></button>,
      // prevArrow: <button className="prev arrow"><FaChevronLeft/></button>
      }
    },
    {
      breakpoint: 1200,
      settings: {
      slidesToShow: 2,
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
   <section className="feedback">
    <Container>
     <Title 
      name="section-title feedback-title" 
      title="Отзывы довольных клиентов" 
     />
     <div className="feedback-list">
      <Slider {...settings}>
       {feedback.map(rewiew => {
        return (
         <FeedbackCard
          key={rewiew.id}
          item={rewiew}
         />
        )
       })}
      </Slider>
     </div>
     
    </Container>
   </section>
  )
 }
}
