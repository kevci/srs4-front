import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const Home: React.FC<RouteComponentProps> = () => (
  <>
    <Link to='deck_list'>My Decks</Link>
  </>
);

export default Home;