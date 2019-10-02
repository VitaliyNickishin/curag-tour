import React, { Component } from 'react'

const TourContext = React.createContext();

class TourProvider extends Component {
 state = {
  modalOpen: false,
  background: 'transparent'

 }

// изменение фона шапки при прокрутке
listenScrollEvent = e => {
 if (window.scrollY > 400) {
  this.setState({background: '#0f3862'})
 } else {
  this.setState({background: 'transparent'})
 }
}
componentDidMount() {
 window.addEventListener('scroll', this.listenScrollEvent)
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
     closeModal: this.closeModal,
     listenScrollEvent: this.listenScrollEvent
    }}
   >
    {this.props.children}
   </TourContext.Provider>
  )
 }
}

const TourConsumer = TourContext.Consumer;

export {TourProvider, TourConsumer}
