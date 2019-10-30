import React from 'react'
import rope from '../../img/company/rope.png'
import cloud from '../../img/icons/yellow-cloud.png'
import Title from '../Title/Title'
import {Container} from 'react-bootstrap'
import {Fade} from 'react-reveal'
import './Principles.sass'

export default function Principles() {
 return (
  <section className="princeples">
   <img className="princeples-img" src={rope} alt="rope"/>
   <Container>
   <Fade top delay={2000}>
    <Title name="section-title princeples-title" title="Наши принципы" />
   </Fade>
    
    <div className="advantage">
      <Fade left delay={2000}>
       <div className="advantage-text">
        <p>
         <img src={cloud} alt="cloud"/>
         Индивидуальный подход к каждому клиенту</p>
       </div>
      </Fade>
     
      <Fade bottom delay={3000}>
       <div className="advantage-text">
        <p>
         <img src={cloud} alt="cloud"/>
         Достойный сервис обслуживания</p>
       </div>
      </Fade>

      <Fade right delay={4000}>
       <div className="advantage-text">
        <p>
         <img src={cloud} alt="cloud"/>
         Высокий профессионализм нашей команды</p>
       </div>
      </Fade>

     </div>
   </Container>
  </section>
 )
}
