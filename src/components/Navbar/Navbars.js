import React, { Component } from 'react'
import logo from '../../logo.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import './Navbar.sass'
import './Navbars.sass'


export default class Navbars extends Component {
 // state = {
 //  isOpen: false
 // }

 // handleToggle = () => {
 //  this.setState({isOpen:!this.state.isOpen})
 // }

 render() {
  return (
   <Container>
    {/* <Row> */}
     {/* <Col lg={2} md={3} sm={4}> */}
      
     {/* </Col> */}
     {/* <Col lg={{span:8, offset: 2}} md={{span:9, offset: 0}} sm={8}> */}
      <Navbar collapseOnSelect expand="lg" className="navbars">
   <Link to="/">
       <img src={logo} alt="Beach Resort"/>
      </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav-items ">
      <Nav.Link href="#home">Главная</Nav.Link>
      <NavDropdown title="Туры" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Горящие туры</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Поиск тура</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Туры по Украине</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Экскурсионные туры</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Week end туры</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#country">Страны</Nav.Link>
      <NavDropdown title="Услуги" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Авиабилеты</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Визовая поддержка</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Индивидуальный трансфер</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Подарочные сертификаты</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Бронирование отелей и аппартаментов</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Как заработать и оплатить тур</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#company">О компании</Nav.Link>
    <Nav.Link href="#contacts">Контакты</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
     {/* </Col> */}
    
    {/* </Row> */}
  
   </Container>
  
  )
 }
}
