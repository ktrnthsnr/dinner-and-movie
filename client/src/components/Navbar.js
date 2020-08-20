import React, { useState } from 'react';
// 'Link' React Router replaces the <a href="/login"> elements, stops page refresh to keep single-page quickness
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import SingleThought from '../pages/SingleThought';
import Profile from '../pages/Profile';

// new -- adding JSON Web Token (JWT) authentication from the utils auth.js
import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <h4 className="bg-light text-primary p-2 display-inline-block">
          {/* <Navbar.Toggle aria-controls='navbar' /> */}
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'> Home </Nav.Link>
              <Nav.Link as={Link} to='/Login'>
            Login  
              </Nav.Link>
              {/* if user is logged in show saved conversations and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}> Logout</Nav.Link>
                  <Nav.Link as={Link} to='/profile'> My Profile </Nav.Link>
                  {/* <Link to={`/profile/${thought.username}`}  style={{ fontWeight: 700 }} className="text-light"></Link>   */}                  
                </>
              ) : (
                <Nav.Link as={Link} to='/Signup' onClick={() => setShowModal(true)}> SignUp</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          </h4>
    </>
  );
};

export default AppNavbar;
