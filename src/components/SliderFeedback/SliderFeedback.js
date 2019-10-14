import React, { Component } from 'react'
import Title from '../Title/Title'
import {Container} from 'react-bootstrap'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import {feedbackData} from '../tourData'
import './SliderFeedback.sass'

export default class SliderFeedback extends Component {
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
     <FeedbackCard
     />
    </Container>
   </section>
  )
 }
}
