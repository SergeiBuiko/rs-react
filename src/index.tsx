import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import App from './App';
import { render } from '@testing-library/react';
export const store = setupStore();

render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
