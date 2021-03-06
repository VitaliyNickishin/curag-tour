import React from 'react'
import {Container} from 'react-bootstrap'
import map from '../../img/company/world-map.jpg'
import Title from '../Title/Title'
import Jump from 'react-reveal/Jump'
import Bounce from 'react-reveal/Bounce'
import './Direction.sass'

export default function Direction() {
 return (
  <section className="direction">
   <div className="direction-wrap">
    <Container>
     <div className="direction-main">
      <Jump delay={2000}>
       <figure className="direction-img">
        <img src={map} alt="map"/>
       </figure>
      </Jump>
      <Bounce right delay={3000}>
      <div className="direction-content">
        <Title 
         name="section-title direction-title" 
         title="Популярные направления" 
        />
        <p className="direction-description">Наша команда проследила статистику самых 
         популярных туристических направлений среди наших 
         клиентов</p>
        <div className="country">
         <p>Африка <span>(20%)</span></p>
         <p>Европа <span>(52,2%)</span></p>
         <p>АОЭ <span>(13%)</span></p>
         <p>Азия <span>(10%)</span></p>
         <p>Индия <span>(18%)</span></p>
         <p>Австралия <span>(7%)</span></p>
         <p>Африка <span>(20%)</span></p>
         <p>Турция <span>(40%)</span></p>
        </div>
       </div>
      </Bounce>
     </div>
    </Container>
   </div>
  </section>
 )
}
