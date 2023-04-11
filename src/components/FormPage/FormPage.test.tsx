import { render, screen } from '@testing-library/react';
import React from 'react';

import FormPage from './FormPage';

describe('FormPage', () => {
  it('Renders FormPage', () => {
    render(<FormPage />);
    expect(screen.getByText(/Product name/i)).toBeInTheDocument();
    expect(screen.getByText(/Production date/i)).toBeInTheDocument();
  });
});
