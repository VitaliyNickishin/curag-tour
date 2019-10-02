import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
import './MenuBsp.sass'

export default function MenuBsp() {
 return (
  <div>
   <Navbar collapseOnSelect expand="lg" className="navbars">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="nav-items ">
      <Nav.Link href="/">Главная</Nav.Link>
      {/* <Link to="/">Главная</Link> */}
       <NavDropdown title="Туры" id="collasible-nav-dropdown">
        {/* <i className="fas fa-chevron-down arrow-down"></i> */}
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
      <Nav.Link href="/company">О компании</Nav.Link>
      {/* <Link to="/company">О компании</Link> */}
     <Nav.Link href="/contacts">Контакты</Nav.Link>
    </Nav>
   </Navbar.Collapse>
  </Navbar>
   
  </div>
 )
}
