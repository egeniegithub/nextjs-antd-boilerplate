// © COPYRIGHT - ALL RIGHTS RESERVED - Next Js NBoi LLC - 2020

import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createReducer from "./createReducer";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import {createWrapper} from 'next-redux-wrapper';

export const InitStore = (initialState = {}, options = {}) => {
  
  const reducer = createReducer();

  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  });

  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );  
};

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export const store = InitStore();


const makeStore = (context) => createStore(createReducer());

export const wrapper = createWrapper(makeStore, {debug: true});



