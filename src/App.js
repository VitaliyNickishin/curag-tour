import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbars from './components/Navbar/Navbars';
import CarouselSider from './components/CarouselSider/CarouselSider';
import SliderTour from './components/SliderTour/SliderTour';
import Benefits from './components/Benefits/Benefits'
import Offer from './components/Offer/Offer'
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'
import './index.sass'

function App() {
  return (
    <div className="section">
      
      <CarouselSider />
      <Navbars />
      <SliderTour/>
      <Benefits/>
      <Offer/>
      <Footer/>
      <Switch>
        {/* <Route exact path="/" component={Главная} />
        <Route exact path="/туры" component={Туры} />
        <Route exact path="/страны" component={Страны} />
        <Route component={Error} /> */}
      </Switch>
      <Modal/>
    </div>
  );
}

export default App;
