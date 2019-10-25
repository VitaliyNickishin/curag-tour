import React, { Component } from 'react'
import {feedbackData, detailFeedback} from './components/tourData'

const TourContext = React.createContext();

class TourProvider extends Component {
 state = {
  rewiew: [],
  // detailFeedback: detailFeedback,
  modalOpen: false,
  background: 'transparent',
  //feedback: feedbackData,
  modalFeedback: detailFeedback
 }

componentDidMount() {
 window.addEventListener('scroll', this.listenScrollEvent);
 this.setRewiew();
}

// изменение фона шапки при прокрутке
listenScrollEvent = e => {
 if (window.scrollY > 400) {
  this.setState({background: '#0f3862'})
 } else {
  this.setState({background: 'transparent'})
 }
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
//cоздаем в пустом массиве клонированные данные 
setRewiew = () => {
 let tempRewiew = [];
 feedbackData.forEach(item => {
  // console.log(item);
  const singleItem = {...item};
  tempRewiew = [...tempRewiew, singleItem];
  // console.log(tempRewiew);

 });
 this.setState(() => {
  return {rewiew: tempRewiew}
 })
}
// находим нужный id из клонированного массива данных
// при клике на карточку отобажается соотв. карточка с id 
getItem = id => {
 const cardRewiew = this.state.rewiew.find(cr => cr.id === id);
 // console.log(cardRewiew);
 return cardRewiew;
}
// handleDetail = id => {
//  const mainRewiew = this.getItem(id);
 
//  this.setState(()=>{
//   return {detailFeedback: mainRewiew};
//  });
// };
 render() {
  return (
   <TourContext.Provider
    value = {{
     ...this.state,
     openModal: this.openModal,
     closeModal: this.closeModal,
     listenScrollEvent: this.listenScrollEvent,
     // handleDetail: this.handleDetail
    }}
   >
    {this.props.children}
   </TourContext.Provider>
  )
 }
}

const TourConsumer = TourContext.Consumer;

export {TourProvider, TourConsumer}
