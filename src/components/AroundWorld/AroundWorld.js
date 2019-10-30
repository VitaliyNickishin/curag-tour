import React from 'react'
import { Container } from 'react-bootstrap'
import {Fade} from 'react-reveal'
import './AroundWorld.sass'

export default function AroundWorld() {
 return (
  <section className="around-world">
   <Container>
    <Fade left>
     <div className="slogan">
      <p>Мир вокруг тебя,</p>
      <p>стоит только захотеть!</p>
     </div>
    </Fade>
    <Fade right>
     <div className="text">
      <p>Сфера туризма постоянно развивается. Мы активно следим 
       за новыми веяниями и готовим для своих путешественников 
       необычные, запоминающиеся туры.</p>
      <p>Наш собственный туристический опыт позволяет предложить 
       Вам ту концепцию отдыха, которая удовлетворит Ваши желания 
       в тот или иной момент жизни.</p>
      <p>Это могут быть семейный и активный молодежный отдых, 
       романтические поездки для влюбленных, морские и речные 
       круизы. В каждую Вашу поездку мы вкладываем частичку 
       своей души и получаем от этого несказанное удовольствие.</p>
     </div>
    </Fade>
    
   </Container>
  </section>
 )
}
