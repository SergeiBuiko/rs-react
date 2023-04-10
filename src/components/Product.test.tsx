import React from 'react';
import { render } from '@testing-library/react';
// import Product from './Photos';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders photo information', () => {
    render(<Photos />);
  });
});
