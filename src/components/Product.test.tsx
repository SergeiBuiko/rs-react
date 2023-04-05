import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  it('renders product information', () => {
    render(<Product />);
  });
});
