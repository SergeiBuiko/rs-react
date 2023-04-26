import React from 'react';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import ReactDOM from 'react-dom';
import App from './App';
// import { render } from '@testing-library/react';
export const store = setupStore();

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// reportWebVitals();

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
