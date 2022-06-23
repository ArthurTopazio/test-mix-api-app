import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';
import store from './../src/components/redux/react-redux'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals(console.log);
