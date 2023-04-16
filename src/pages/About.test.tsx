import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';

test('Description', () => {
  render(<About />);
  const AboutElem = screen.getByText(/About Us/i);
  expect(AboutElem).toBeInTheDocument();
});
