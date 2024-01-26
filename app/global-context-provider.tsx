'use client';

import { createContext, useReducer } from 'react';

interface GlobalContextType {
  count: number;
};

interface GlobalContextValueType {
  globalState: GlobalContextType;
  dispatch: React.Dispatch<ReducerAction>;
}

type ReducerActionTypes = 'increment_counter' | 'decrement_counter' | 'reset_counter';

type ReducerAction = { type: ReducerActionTypes }

export const GlobalContext = createContext({} as GlobalContextValueType);

const GlobalContextReducer = (context: GlobalContextType, action: ReducerAction) => {
  switch (action.type) {
    case 'increment_counter': {
      return { ...context, count: context.count + 1 };
    }
    case 'decrement_counter': {
      return { ...context, count: context.count - 1 };
    }
    case 'reset_counter': {
      return { ...context, count: 0 };
    }
  }
};

export const GlobalContextProvider = ({
  children,
  }: {
    children: React.ReactNode
  }) => {
  const [globalState, dispatch] = useReducer(GlobalContextReducer, {count: 1}); 
  return <GlobalContext.Provider value={{globalState, dispatch}}>{children}</GlobalContext.Provider>;
};