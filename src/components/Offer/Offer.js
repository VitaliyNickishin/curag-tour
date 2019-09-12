import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Title from '../Title/Title'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import '../Button/Button.sass'
import './Offer.sass'


export default function Offer() {
 return (
  <section className="offer">
   <Container>
   <Title title="Хочу предложение по туру" className="offer-title"/>
   <Form className="offer-form">
      <Form.Row>
       <Form.Control placeholder="Имя"/>
       <Form.Control type="email" placeholder="Email" />
       <Form.Control type="tel" placeholder="Телефон" />
       <Form.Group as={Col} controlId="formGridState" className="country">
        <Form.Control as="select" placeholder="Страна тура">
         <option className="item">Турция</option>
         <option className="item">Египет</option>
         <option className="item">Шри-Ланка</option>
         <option className="item">Доминикана</option>
        </Form.Control>
       </Form.Group>
       {/* <Button */}
       <Button type="submit" className='btn-offer btn-form'>
         Получить предложение
       </Button>
      </Form.Row>
    </Form>
   </Container>
  </section>
 )
}
