import React from 'react'
import rope from '../../img/company/rope.png'
import cloud from '../../img/icons/yellow-cloud.png'
import Title from '../Title/Title'
import {Container} from 'react-bootstrap'
import './Principles.sass'

export default function Principles() {
 return (
  <section className="princeples">
   <img className="princeples-img" src={rope} alt="rope"/>
   <Container>
    <Title name="section-title princeples-title" title="Наши принципы" />
    <div className="advantage">
     <div className="advantage-text">
      <p>
       <img src={cloud} alt="cloud"/>
       Индивидуальный подход к каждому клиенту</p>
     </div>

     <div className="advantage-text">
      <p>
       <img src={cloud} alt="cloud"/>
       Достойный сервис обслуживания</p>
     </div>

     <div className="advantage-text">
      <p>
       <img src={cloud} alt="cloud"/>
       Высокий профессионализм нашей команды</p>
     </div>

     </div>
   </Container>
  </section>
 )
}
