/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  it('renders product information', () => {
    render(<Product />);
    expect(screen.getByText('An apple mobile which is nothing like apple')).toBeInTheDocument();
    expect(screen.getByText('280$')).toBeInTheDocument();
    expect(screen.getByText('Samsung Galaxy Book')).toBeInTheDocument();
  });
});
