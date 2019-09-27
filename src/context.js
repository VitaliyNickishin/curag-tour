import React, { Component } from 'react'

const TourContext = React.createContext();

class TourProvider extends Component {
 state = {
  modalOpen: false,

 }
 render() {
  return (
   <TourContext.Provider>
    {this.props.children}
   </TourContext.Provider>
  )
 }
}

const TourConsumer = TourContext.Consumer;

export {TourProvider, TourConsumer}
