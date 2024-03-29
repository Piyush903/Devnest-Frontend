import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import {presistedStore} from './store/store'


ReactDOM.render(
  <PersistGate loading={null} persistor={presistedStore}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
