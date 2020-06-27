import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';

const Srs: React.FC<RouteComponentProps> = () => {
  return (
    <Link to='Home'>Back to Home</Link>
  );
}

export default Srs;