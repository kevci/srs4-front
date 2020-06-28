import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

import SrsSession from './SrsSession';

const Srs: React.FC<RouteComponentProps> = () => {
  return (
    <>
    <Link to='Home'>Back to Home</Link>
    <SrsSession />
    </>
  );
}

export default Srs;