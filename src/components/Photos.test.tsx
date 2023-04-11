import React from 'react';
import { render } from '@testing-library/react';

import Photos from './Photos';

describe('Photos component', () => {
  it('renders photo information', () => {
    render(<Photos />);
  });
});
