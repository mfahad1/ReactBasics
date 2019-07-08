import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Layout from './components/Lifecycle/Lifecycle';
import CounterCaller from './components/ComponentsType/stateless';
import StatefulComponent from './components/ComponentsType/stateful';
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
