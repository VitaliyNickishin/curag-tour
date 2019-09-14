import React from 'react'
import Container from 'react-bootstrap/Container'
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo'
import MenuBsp from '../MenuBsp/MenuBsp'
// import Menu from '../Menu/Menu'
// import './Navbars.sass'



export default function Navbars() {
 return (
  <Container>
   <Logo/>
   <Contacts/>
   <MenuBsp/>
  </Container>
 )
}
