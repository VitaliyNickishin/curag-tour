import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
// import { MdHome, MdEmail, MdInfo } from 'react-icons/md'
import Home from './pages/Home/Home'
import Company from './pages/Company/Company'
import OurContacts from './pages/OurContacts/OurContacts'
import Error from './pages/Error/Error'
import Header from './components/Header/Heder';
import Footer from './components/Footer/Footer';
// import { Breadcrumb } from 'react-bootstrap';

// import Crumb from './components/Crumb/Crumb'
// import './index.sass'

// const Separator = ({ children, ...props}) => (
//   <span style={{color: 'teal'}} {...props}>
//     {children}
//   </span>
// )
// const options = {
//   icons: {
//     Home: MdHome,
//     Company: MdInfo,
//     Contacts: MdEmail,
//   },
//   items: [
//   {to: '/', label: 'Home'},
//   {to: '/company', label: 'Company'},
//   {to: '/contacts', label: 'Contacts'},
//  ],
// }



export default function App() {
  return (
    <div className="main">
      {/* <Crumb separator='/'> */}
      {/* <Crumb separator={<Separator>/</Separator>}>
        {options.items.map(({to, label}) => {
        const Icon = options.icons[label]
        return (
          <div key={to} className='some-custom-classname'>
            {Icon && <Icon />}
            <Link to={to}>{label}</Link>
          </div>
        )
      })}
      </Crumb> */}

      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/company">Company</Breadcrumb.Item>
        <Breadcrumb.Item href="/contacts" active>Contacts</Breadcrumb.Item>
      </Breadcrumb> */}
      
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/contacts" component={OurContacts} />
      <Route component={Error} />
    </Switch>
    <Footer/>
    </div>
    
  );
}
