import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';


const DeckList: React.FC<RouteComponentProps> = () => {
let decks = {};
fetch('<INSERT TEST URL>', {
  method: 'GET'
})
.then(response => response.json())
.then(result => {
  decks = result;
})
.catch(error => {
  console.error('Error:', error);
});
  return (
    <>
      <Link to='home'>Back to Home</Link>
      <Link to='add_deck'>Add deck</Link>
      {decks}
    </>
  );
}

export default DeckList;