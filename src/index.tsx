import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import RootReducer from './Redux/Reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from './Router';
const myStore =createStore(RootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)))
ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
