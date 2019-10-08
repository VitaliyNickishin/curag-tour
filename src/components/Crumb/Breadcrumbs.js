import React from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import './Breadcrumbs.sass'

// const userNamesById = { '1': 'John' }

// const DynamicUserBreadcrumb = ({ match }) => (
//   <span>{userNamesById[match.params.userId]}</span>
// );
const BreadcrumbSeparator = ({children}) => (
 <span className="breadcrumb-separator">
  {children}
 </span>
)
const routes = [
  // { path: '/home', breadcrumb: DynamicUserBreadcrumb },
  // { path: '/home', breadcrumb: 'Home' },
  // { path: '/company', breadcrumb: 'Company' },
  // { path: '/contacts', breadcrumb: 'Contacts' },
];

// map & render your breadcrumb components however you want.
const Breadcrumbs = ({ separator = '/', breadcrumbs}) => (
 <Container>
  <div className="links">
    {breadcrumbs.map(({
      match,
      breadcrumb
    }) => (
     
      <span key={match.url}>
        <NavLink to={match.url}>{breadcrumb}</NavLink>
        <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
      </span>
      
    ))}
  </div>
  </Container>
);

export default withBreadcrumbs(routes)(Breadcrumbs);