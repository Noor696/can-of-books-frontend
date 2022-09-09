import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "./styles/Header.css";

class WelcomePage extends React.Component {
    render() {
      return (
        <div id="welcome">
      <h1>Welcome to the Book Web App 📖</h1>
      <h2>Go Sign in 🔐 to Add Favorite Book and See any book you want</h2>
      </div>

      )}}


export default withAuth0(WelcomePage);