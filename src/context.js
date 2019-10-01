import React, { Component } from 'react'

const TourContext = React.createContext();

class TourProvider extends Component {
 state = {
  modalOpen: false

 }
 // открытие модального окна 
openModal = () => {
 this.setState(() => {
  return {
   modalOpen: true
  }
 })
}
 // закрытие модального окна
closeModal = () => {
 this.setState(()=>{
  return {
   modalOpen: false
  }
 })
}
 render() {
  return (
   <TourContext.Provider
    value = {{
     ...this.state,
     openModal: this.openModal,
     closeModal: this.closeModal
    }}
   >
    {this.props.children}
   </TourContext.Provider>
  )
 }
}

const TourConsumer = TourContext.Consumer;

export {TourProvider, TourConsumer}
