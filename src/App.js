import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbars from './components/Navbar/Navbars';
import CarouselSider from './components/CarouselSider/CarouselSider';
import SliderTour from './components/SliderTour/SliderTour';
import Benefits from './components/Benefits/Benefits'
import Offer from './components/Offer/Offer'

function App() {
  return (
    <div className="App">
      <CarouselSider />
      <Navbars />
      <SliderTour/>
      <Benefits/>
      <Offer/>
      <Switch>
        {/* <Route exact path="/" component={Главная} />
        <Route exact path="/туры" component={Туры} />
        <Route exact path="/страны" component={Страны} />
        <Route component={Error} /> */}
      </Switch>
    </div>
  );
}

export default App;
