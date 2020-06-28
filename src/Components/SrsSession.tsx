import React, { useReducer } from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const initialState = {srsPhase: 'QUESTION_PHASE'};

const srsSessionReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_BACK':

    case 'ANSWER':


  }
}

const SrsSession: React.FC<RouteComponentProps> = () => {
  const [state, dispatch] = useReducer(srsSessionReducer, initialState);
  return (
    <Link to='home'>Back to Home</Link>
  );
}

export default SrsSession;