import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <p className="text-danger">Secret Page</p>
        <h3>This is full of sectets!!!</h3>
      </div>
    )
  }

  return <Redirect to="/react-StarWars-app/login" />
}

export default SecretPage;