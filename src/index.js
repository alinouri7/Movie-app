import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './utils/store/store';
import 'remixicon/fonts/remixicon.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
       <App />

   </Provider>
  
);
