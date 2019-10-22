import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from '../Title/Title'
import {Container} from 'react-bootstrap'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import {feedbackData} from '../tourData'
import './Feedback.sass'

export default class Feedback extends Component {
 state = {
  feedback: feedbackData
 }
 render() {
  const {feedback} = this.state;
 
  return (
   <section className="feedback">
    <Container>
     <Title 
      name="section-title feedback-title" 
      title="Отзывы довольных клиентов" 
     />
     <div className="feedback-list">
      <Slider ref={c => (this.slider = c)} {...settings}>
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
