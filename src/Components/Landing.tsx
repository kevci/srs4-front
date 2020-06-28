import React from 'react';
import {Link, RouteComponentProps } from '@reach/router';

import Login from './Login';
import SignUp from './SignUp';

const Landing: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Link to='login'>Login</Link>
      <Link to='sign_up'>Sign Up</Link>
    </>
  );
}

export default Landing;