import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('Description', () => {
  render(<App />);
  // render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // );

  const linkElement = screen.getByText(/Current/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
