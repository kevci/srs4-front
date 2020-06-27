import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';

const Home: React.FC<RouteComponentProps> = () => (
  <>
    <Link to='deck_list'>My Decks</Link>
  </>
);

export default Home;