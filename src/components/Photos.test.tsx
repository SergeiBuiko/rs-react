import React from 'react';
import { render, screen } from '@testing-library/react';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders photo information', () => {
    render(<Photos />);
    const linkElement = screen.getByText(/Enter your request:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
