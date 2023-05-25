// react 
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// react-redux library
import { Provider } from 'react-redux';
import store from "./store/index"

//styless
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);


