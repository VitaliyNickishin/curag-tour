import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbars from './components/Navbar/Navbars';
import CarouselSider from './components/CarouselSider/CarouselSider';
import SliderTour from './components/SliderTour/SliderTour';

function App() {
  return (
    <div className="App">
      <CarouselSider />
      <Navbars />
      <SliderTour/>
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
