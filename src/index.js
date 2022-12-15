import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Provider } from 'react-redux';
import store from './utils/store';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

//default baseUrl
axios.defaults.baseURL="https://63929998b750c8d178e16014.mockapi.io/api";

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
