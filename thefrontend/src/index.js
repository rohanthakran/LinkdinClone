import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux"
import store from './store';
import { transitions, positions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from 'react-alert-template-basic'

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,

  transition: transitions.SCALE
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
          <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

