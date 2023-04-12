import React from 'react';
import { render, screen } from '@testing-library/react';
import Photo from './Photo';
import { waitFor } from '@testing-library/react-native';

const PhotoMok = {
  farm: 66,
  id: '51252556112',
  isfamily: 0,
  isfriend: 0,
  ispublic: 1,
  license: '4',
  owner: '11998370@N05',
  ownername: 'andressolo',
  secret: '237499e61a',
  server: '65535',
  title: 'Dog the Drain',
};
describe('Photo component', () => {
  it('renders photo information', () => {
    render(<Photo photo={PhotoMok} />);
    const Title = screen.findByText(/Title: /i);
    waitFor(() => expect(Title).toBeInTheDocument());
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('photo_image');
  });
});
