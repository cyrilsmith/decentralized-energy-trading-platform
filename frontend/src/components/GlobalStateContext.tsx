import React, { createContext, useContext, useState } from 'react';

// Define the shape of your initial state
interface InitialState {
  currentUser: {
    name: string;
  } | null;
}

// Define the props for GlobalStateProvider, including children
interface GlobalStateProviderProps {
  children: React.ReactNode; // Correctly type the children prop
}

// Create a context with an initial state
const GlobalStateContext = createContext<any>(null);

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [initialState, setInitialState] = useState<InitialState>({
    currentUser: {
      name: 'User',
    },
  });

  return (
    <GlobalStateContext.Provider value={{ initialState, setInitialState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
