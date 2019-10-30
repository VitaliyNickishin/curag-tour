import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Title from '../Title/Title'
import diving from '../../img/benefits/1.png'
import Fade from 'react-reveal/Fade';
import './Benefits.sass'

export default function Benefits() {
 return (
  <section className="benefits">
   <Container>
    <Fade top delay={2000}>
     <Title title="Наши преимущества" name="section-title"/>
    </Fade>
    <Row noGutters>
     <Col lg={5} md={12}>
      <Fade left delay={1000}>
       <div className="benefits-img">
        <img
         src={diving} 
         alt=""
        />
       </div>
      </Fade>
     </Col>
     <Col lg={7} md={12}>
      <Fade right delay={1000}>
       <div className="scrollbar">
        <div className="scrollbar-text">
         Очень долго подбирали разные варианты для того, 
         чтобы отпраздновать свой юбилейный День рождения 
         в путешествии и не могли определиться... Решили 
         обратиться за помощью в турагенство. Гульнара, 
         выслушав все пожелания, предложила отдых в Турции,
         отель Justiniano Club Park Conti 5* в Окурджалар 
         возле Аланьи. Мы очень благодарны ей за
         предложенный вариант!!!! Отдых получился отличный!
         Отель с большой ухоженной территорией, внимательный
         обслуживающий персонал. Отличный номер с видом на море. 
        </div>
       </div>
      </Fade>
     </Col>
    </Row>
   </Container>
  </section>
 )
}
