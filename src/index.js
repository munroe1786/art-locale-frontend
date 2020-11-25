import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//store is where we store data globally

//we will dispatch(send) action objects to our reducer

//reducer will take in action object and decide, 
//based on conditions in the reducer,
//what we want to update about our current store 
//and return a new version of the store

//pass store in as a prop

//compose comes from redux, allows us to combine a couple 
//of different middlewares into one so that we can pass one argument
//as the second argument of createStore

//Provider gives access to store to App and its
//child components

//set up our store

//any component we wrap in provider will have access
//to our redux store

//need middleware to incorporate thunk with our store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
