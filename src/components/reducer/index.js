import { combineReducers } from 'redux';
import userReducer from './userReducer';
// Importiere weitere Reducer

const rootReducer = combineReducers({
  user: userReducer,
  // Füge weitere Reducer hier hinzu
});

export default rootReducer;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
