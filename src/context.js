import React, { Component } from 'react'
import {feedbackData, detailFeedback} from './components/tourData'

const TourContext = React.createContext();

class TourProvider extends Component {
 state = {
  rewiew: [],
  modalOpen: false,
  background: 'transparent',
  feedback: feedbackData,
  modalFeedback: detailFeedback
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
openModal = (id) => {
 const openRewiew = this.getItem(id);
 this.setState(() => {
  return {
   modalFeedback: openRewiew,
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

getItem = id => {
 const cardRewiew = this.state.rewiew.find(cr => cr.id === id);
 return cardRewiew;
}
handleDetail = id => {
 //console.log('hello from details');
 const mainRewiew = this.getItem(id);
 
 this.setState(()=>{
  return {detailProduct: mainRewiew};
 });
};
 render() {
  return (
   <TourContext.Provider
    value = {{
     ...this.state,
     openModal: this.openModal,
     closeModal: this.closeModal,
     listenScrollEvent: this.listenScrollEvent,
     handleDetail: this.handleDetail
    }}
   >
    {this.props.children}
   </TourContext.Provider>
  )
 }
}

const TourConsumer = TourContext.Consumer;

export {TourProvider, TourConsumer}
