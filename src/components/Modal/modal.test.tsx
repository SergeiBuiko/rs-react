import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';
import { waitFor } from '@testing-library/react-native';

const handleClose = jest.fn();
const handleOpen = false;
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
describe('Modal component', () => {
  test('renders modal information', () => {
    render(<Modal modalActive={handleOpen} setModalActive={handleClose} photo={PhotoMok} />);
    const OwnerName = screen.findByText(/Owner name: /i);
    waitFor(() => expect(OwnerName).toBeInTheDocument());
    const Title = screen.findByText(/Title: /i);
    waitFor(() => expect(Title).toBeInTheDocument());
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('photo_image');
  });

  test('modal close', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal modalActive={handleOpen} setModalActive={handleClose} photo={PhotoMok} />
    );
    fireEvent.click(getByText(/×/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
