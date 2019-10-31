import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import logo from '../../img/footer/logo-footer.png'
import logoWa from '../../img/footer/logo-wa.png'
import Point from '../Point/Point'
import Phone from '../Phone/Phone'
import SocialIcons from '../SocialIcons/SocialIcons'
import './Footer.sass'

export default function Footer() {
 return (
  <footer className="footer">
   <Container>
    <Row>
     <Col lg={4} md={12}>
      <Link to="/" className="footer-logo">
       <img src={logo} alt="logo"/>
      </Link>
      <div className="line"></div>
      <div className="footer-description">
       <p>Кураж тур агенство,которое предоставляет 
        услуги по поиску, оформлению и подбору туров 
        для вас и ваших родных.</p>
      </div>
      <div className="line"></div>
      <div className="footer-creators">
       <span>Создание сайта —</span>
       <img src={logoWa} alt="wa"/>
      </div>
     </Col>
     <Col lg={2} md={4} sm={6}>
       
     <Nav defaultActiveKey="/home" className="flex-column footer-nav">
      <h3>Навигация</h3>
      <Nav.Link href="/home">Главная</Nav.Link>
      <Nav.Link eventKey="link-1">О компании</Nav.Link>
      <Nav.Link eventKey="link-2">Туры</Nav.Link>
      <Nav.Link eventKey="link-2">Контакты</Nav.Link>
      <Nav.Link eventKey="link-2">Услуги</Nav.Link>
     </Nav>
    </Col>
    <Col lg={2} md={4} sm={6}>
    <Nav className="flex-column footer-nav">
      <h3>Поддержка</h3>
      <Nav.Link href="/faq">FAQ</Nav.Link>
      <Nav.Link eventKey="blog">Блог</Nav.Link>
      <Nav.Link eventKey="feedback">Обратная связь</Nav.Link>
     </Nav>
    </Col>
    <Col lg={4} md={4} sm={12}>
    <Nav className="flex-column footer-nav">
      <h3>Контакты</h3>
      <Point name="footer-location"/>
      <Phone name="footer-phone"/>
      <div className="line"></div>
      <SocialIcons name="footer-social"/>
     </Nav>
    </Col>
    </Row>
   </Container>
  </footer>
 )
}
