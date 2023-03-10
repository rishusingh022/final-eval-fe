import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Modal from '..';
import { CREATE_FORM_URL } from '../../../constant/apiEndPoints';
import { makeRequest } from '../../../utils/makeRequest/makeRequest';
jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));
describe('Modal', () => {
  it('should render the component', () => {
    const toggleModal = jest.fn();
    render(<Modal />);
    expect(screen.getByText('Create a new content type')).toBeTruthy();
    expect(screen.getByText('Name of the content type')).toBeTruthy();
    expect(screen.getByText('Cancel')).toBeTruthy();
    expect(screen.getByText('Create')).toBeTruthy();
  });
  it('should call makeRequest with correct url when create button is clicked', async () => {
    const { container } = render(<Modal />);
    // on click of create button take the value of input field and call makeRequest
    const createButton = screen.getByText('Create');
    // get the formName by id and set the value
    const formName = container.querySelector('#formName');
    fireEvent.change(formName, { target: { value: 'text' } });
    fireEvent.click(createButton);
    expect(makeRequest).toHaveBeenCalledWith(CREATE_FORM_URL, mockedNavigate, {
      data: {
        formName: 'text',
      },
    });
  });
  it('should return null when makeRequest data is null', async () => {
    makeRequest.mockReturnValue(null);
    const { container } = render(<Modal />);
    const createButton = screen.getByText('Create');
    const formName = container.querySelector('#formName');
    fireEvent.change(formName, { target: { value: 'text' } });
    fireEvent.click(createButton);
    expect(makeRequest).toHaveBeenCalledWith(CREATE_FORM_URL, mockedNavigate, {
      data: {
        formName: 'text',
      },
    });
  });
});
