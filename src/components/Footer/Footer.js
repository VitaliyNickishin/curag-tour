import React from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import logo from '../../img/footer/logo-footer.png'
import logoWa from '../../img/footer/logo-wa.png'
import location from '../../img/icons/location.png'
import phone from '../../img/icons/phone.png'
import fb from '../../img/icons/facebook.png'
import inst from '../../img/icons/instagram.png'
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
      <div className="location">
       <img src={location} alt="location"/>
       <span>г. Харьков, ул. Лермонтовская 10а</span>
      </div>
      <div className="phone">
       <img src={phone} alt="phone"/>
       <a href="tel:+380999908100">+38 (099) 990-81-00</a>
      </div>
      <div className="line"></div>
      <div className="social">
      <img src={fb} alt="fb"/>
      <img src={inst} alt="inst"/>
      </div>
     </Nav>
    </Col>
    </Row>
   </Container>
  </footer>
 )
}
