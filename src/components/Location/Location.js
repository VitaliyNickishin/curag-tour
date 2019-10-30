import React from 'react'
import Title from '../Title/Title'
import Section from '../Section/Section'
import map from '../../img/benefits/1.png'
import Point from '../Point/Point'
import Phone from '../Phone/Phone'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './Location.sass'

export default function Location() {
 return (
  <Section name="location">
   <Row>
    <Col lg={6}>
     <div className="location__content">
      <Title 
       name="section-title location__title" 
       title="Наши контакты" 
      />
      <div className="location__description">
       Мы с удовольствем ответим на все интересующие вас вопросы. 
       Проконсультируем и поможем с выбором, а так же ждём просто 
       ваших отзывов. Мы стараемся для Вас!
      </div>
      <Point name="location__point"/>
      <Phone name="location__phone"/>
     </div>
    </Col>
    <Col lg={6}>
     <div className="location__img">
    <img src={map} alt="map"/>
   </div>
    </Col>
   </Row>
   
  </Section>
 )
}
