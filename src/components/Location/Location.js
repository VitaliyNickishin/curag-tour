import React from 'react'
import Title from '../Title/Title'
import Section from '../Section/Section'
import Point from '../Point/Point'
import Phone from '../Phone/Phone'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import SocialIcons from '../SocialIcons/SocialIcons'
import Map from '../Map/Map'
import {Fade, Bounce, Zoom, Roll, Flip} from 'react-reveal'
import contactBg from '../../img/our-contacts/1.jpg'
import './Location.sass'

export default function Location() {
 return (
  <Section name="location">
   {/* <img src={contactBg} alt="" className="location-img"/> */}
   <Row>
    <Col lg={6}>
     <div className="location-content">
      <Fade top delay={2000}>
       <Title 
        name="section-title location-title" 
        title="Наши контакты" 
       />
      </Fade>
      <Bounce left delay={3000}>
       <div className="location-description">
        Мы с удовольствем ответим на все интересующие вас вопросы. 
        Проконсультируем и поможем с выбором, а так же ждём просто 
        ваших отзывов. Мы стараемся для Вас!
       </div>
      </Bounce>
      <Zoom right delay={3000}>
       <div className="location-info">
        <Point name="location-point"/>
        <Phone name="location-phone"/>
       </div>
      </Zoom>
      <Roll right delay={3000}>
       <div className="location-join">
        <p>Присоединяйся к нам: </p>
        <SocialIcons/>
      </div>
      </Roll>
     </div>
    </Col>
    <Col lg={6}>
     <Flip delay={3000}>
      <Map/>
     </Flip>
    </Col>
   </Row>
   
  </Section>
 )
}
