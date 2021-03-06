import React from 'react';
import { Router, Link, RouteComponentProps } from '@reach/router';

import './App.css';
import Landing from './Components/Landing';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import AddCards from './Components/AddCards';
import AddDeck from './Components/AddDeck';
import Deck from './Components/Deck';
import DeckList from './Components/DeckList';
import Srs from './Components/Srs';

function App() {
  return (
    <Router>
      <Landing path='/' />
      <Login path='login' />
      <SignUp path='sign_up' />
      <Home path='home' />
      <Deck path='deck' />
      <AddDeck path='add_deck' />
      <AddCards path='add_cards' />
      <DeckList path='deck_list' />
      <Srs path='srs' />
    </Router>
  );
}

export default App;
