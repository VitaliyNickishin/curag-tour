import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home'
import Company from './pages/Company/Company'
import Contacts from './pages/Contacts/Contacts'
import Error from './pages/Error/Error'
import Navbars from './components/Navbar/Navbars';
import Footer from './components/Footer/Footer';
// import './index.sass'



export default function App() {
  return (
    <div className="section">
      <Navbars />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/contacts" component={Contacts} />
      <Route component={Error} />
    </Switch>
    <Footer/>
    </div>
    
  );
}
