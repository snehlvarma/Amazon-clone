import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer 
export const StateContext = createContext();

//wrap our app and provide a data layer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
    {children} 
    </StateContext.Provider>
);

//Pulling informaton from the data layer 
export const useStateValue = () => useContext(StateContext); 