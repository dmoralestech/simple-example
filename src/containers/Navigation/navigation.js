import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import React from 'react';

import './navigation.css';

/**
 * The Navigation container.
 *
 * You might wonder why this is a container. It is here, because it has a deep reliance on the router
 *
 * @constructor
 */
export const Navigation = () => (
  <Navbar collapseOnSelect role='navigation'>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to='/' className='navbar-brand'>Cars</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li role='presentation'>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
        </li>
        <li role='presentation'>
          <NavLink to='/search' activeClassName='active'>Search</NavLink>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);