import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo'
import MenuBsp from '../MenuBsp/MenuBsp'
import {TourConsumer} from '../../context'
// import Menu from '../Menu/Menu'
import './Navbars.sass'


export default class Navbars extends Component {
 
 render() {
  return (
   <TourConsumer>
    {value => {
     const {background} = value;
     
     return (
      <div className="header" style={{background}}>
       <Container>
        <Logo/>
        <Contacts/>
        <MenuBsp/>
       </Container>
      </div>
     )
    }}
   </TourConsumer>
  )
 }
}
