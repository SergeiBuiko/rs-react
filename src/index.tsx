import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import App from './App';
import { render } from '@testing-library/react';
export const store = setupStore();
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
