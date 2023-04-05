import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Description', () => {
  render(<App />);
  const linkElement = screen.getByText(/Current/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
