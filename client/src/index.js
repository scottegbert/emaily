import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
// use to test a manual send in console using with const survey = { title: 'my title', subject: 'my subject', body: 'heres the body of the email', recipients: 'putyouremailaddresshere' }; then do this axios.post('/api/surveys', survey);
// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is', process.env.NODE_ENV);
