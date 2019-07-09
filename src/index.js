import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Layout from './componentsBasics/lifecycle/Lifecycle';
import CounterCaller from './componentsBasics/componentsType/stateless';
import StatefulComponent from './componentsBasics/componentsType/stateful';
import MainLayout from './app/mainLayout';
import { Provider } from 'react-redux'
import store from './app/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
