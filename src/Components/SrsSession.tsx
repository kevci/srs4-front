import React, { useReducer } from 'react';



const initialState = {srsPhase: 'QUESTION_PHASE'};

const srsSessionReducer = (state, action) {
  switch (action.type) {
    case 'SHOW_BACK':
      

  }
}

const SrsSession: React.FC = () => {
  const [state, dispatch] = useReducer(srsSessionReducer, initialState);
  return (

  );
}