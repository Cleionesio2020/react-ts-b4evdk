import { createContext, useReducer, useState } from 'react';
import * as React from 'react';

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE', 
}

type Action = {
  type: ActionKind,
  payload: number
}

const increaseAction: Action = {
  type: ActionKind.Increase,
  payload: 1
}

const decreaseAction: Action = {
  type: ActionKind.Decrease,
  payload: 1
}

type State = {
  value: number;
}

const initialCounterState: State = {
  value: 0
}

function counterReducer(state: State, action: Action): State {
  const {type, payload} = action;
  switch (type) {
    case ActionKind.Increase:
	  return {
        ...state, 
        value: state.value + action.payload
      }
    case ActionKind.Decrease:
      return {
        ...state, 
        value: state.value - action.payload
      }
    default:
      return state
    }
  }

const RepertorioContext = createContext({});

type Props = {
  children?: React.ReactNode
};

const RepertorioContextProvider: React.FC<Props> = ({ children }) => {
  
  const [state,  dispatch] = useReducer(counterReducer, initialCounterState);
  return (
    <RepertorioContext.Provider value={{ state, dispatch }}>
      {children}
    </RepertorioContext.Provider>
  );
};

export default RepertorioContextProvider;
