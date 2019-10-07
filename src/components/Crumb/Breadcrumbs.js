import React from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './Breadcrumbs.sass'

const userNamesById = { '1': 'John' }

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

const routes = [
  { path: '/users/:userId', breadcrumb: DynamicUserBreadcrumb },
  { path: '/example', breadcrumb: 'Custom Example' },
];

// map & render your breadcrumb components however you want.
const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="links">
    {breadcrumbs.map(({
      match,
      breadcrumb
      // other props are available during render, such as `location` 
      // and any props found in your route objects will be passed through too
    }) => (
      <span key={match.url}>
        <NavLink to={match.url}>{breadcrumb}</NavLink>
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);