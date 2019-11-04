import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo'
import MenuBsp from '../MenuBsp/MenuBsp'
import {TourConsumer} from '../../context'
// import Menu from '../Menu/Menu'
import './Header.sass'


export default class Header extends Component {
 
 render() {
  return (
   <TourConsumer>
    {value => {
     const {background} = value;
     
     return (
      <header className="header" style={{background}}>
       <Container>
        <div className="header-top">
         <Logo/>
         <div className="menu-block">
          <Contacts name="menu-block__contacts"/>
          <MenuBsp/>
         {/* <Menu/> */}
         </div>
        </div>
       </Container>
      </header>
     )
    }}
   </TourConsumer>
  )
 }
}
