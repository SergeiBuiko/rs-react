import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

import React from 'react';

describe('Header', () => {
  it('should have headline', () => {
    render(<Navigation />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
  it('Should be defined', () => {
    expect(<Navigation />).toBeDefined();
  });
});
