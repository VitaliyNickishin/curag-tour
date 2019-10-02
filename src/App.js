import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home'
import Company from './pages/Company/Company'
import Contacts from './pages/Contacts/Contacts'
import Error from './pages/Error/Error'



export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/contacts" component={Contacts} />
      <Route component={Error} />
    </Switch>
  );
}
