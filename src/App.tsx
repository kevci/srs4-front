import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';

import './App.css';

function App() {
  return (
    <Router>
      <Home path='home' />
      <Deck path= 'deck' />
    </Router>
  );
}

export default App;
