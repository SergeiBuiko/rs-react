import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import FormPage from './FormPage';
import { store } from 'index';

describe('FormPage', () => {
  it('Renders FormPage', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    // (<FormPage />);
    expect(screen.getByText(/Product name/i)).toBeInTheDocument();
    expect(screen.getByText(/Production date/i)).toBeInTheDocument();
  });
});
