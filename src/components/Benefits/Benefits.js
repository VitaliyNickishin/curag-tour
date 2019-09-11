import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import Title from '../Title/Title'
import diving from '../../img/benefits/1.png'
import './Benefits.sass'

export default function Benefits() {
 return (
  <section className="benefits">
   <Container>
    <Title title="Наши преимущества" />
    <Row noGutters>
     <Col lg={5}>
     <div className="img-container">
      <img
       src={diving} 
       alt=""
      />
     </div>
     </Col>
     <Col lg={7}>
     {/* <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
       <Form.Label></Form.Label>
       <Form.Control as="textarea" rows="8" className="textarea">
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
       </Form.Control>
      </Form.Group>
      </Form> */}
      <div class="scrollbar">
       <div class="scrollbar-text">
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
     </Col>
    </Row>
   </Container>
   
  </section>
 )
}
