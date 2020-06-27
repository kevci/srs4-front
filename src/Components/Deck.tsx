import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const Deck: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Link to='home'>Back to Home</Link>
      <Link to='add_cards'>Add Cards</Link>
    </>
  );
}

export default Deck;