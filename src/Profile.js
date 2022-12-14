import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return (
    <div>
        {/* Hello  {user.name} */}
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.picture} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
    </Card>
    </div>
    );
  }
}

export default withAuth0(Profile);