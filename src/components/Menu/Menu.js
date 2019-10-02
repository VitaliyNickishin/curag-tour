import React, { Component } from 'react'
import logo from '../../logo.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Menu.sass'

export default class Menu extends Component {
 state = {
  isOpen:false
 }
 handleToggle = () => {
  this.setState({isOpen:!this.state.isOpen})
 }
 render() {
  return (
   <nav className="menu">
    <div className="nav-center">
     <div className="nav-header">
      <Link to="/">
       <img src={logo} alt="Beach Resort"/>
      </Link>
      <button 
       type="button" 
       className="nav-btn"
       onClick={this.handleToggle}
       >
       <FaAlignRight className="nav-icon" />
      </button>
     </div>
     <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
      <li>
       <Link to="/">Главная</Link>
      </li>
      <li>
       <Link to="/hots">Туры</Link>
      </li>
      <li>
       <Link to="/search">Страны</Link>
      </li>
      <li>
       <Link to="/ukraine">Услуги</Link>
      </li>
      <li>
       <Link to="/company">О компании</Link>
      </li>
      <li>
       <Link to="/ukraine">Контакты</Link>
      </li>
     </ul>
    </div>
   </nav>
  )
 }
}
