import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import "./styles/Header.css";
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem className="navbar"><Link to="/" className="nav-link">Home</Link></NavItem>
        {isAuthenticated && <NavItem className="navbar"><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        <NavItem className="navbar"><LoginButton /></NavItem>
        <NavItem className="navbar"><LogoutButton /></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
