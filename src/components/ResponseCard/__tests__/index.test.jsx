import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ResponseCard from '..';
const { makeRequest } = require('../../../utils/makeRequest/makeRequest');
jest.mock('../../../utils/makeRequest/makeRequest');
const { navigate } = require('react-router-dom');
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));
import { DELETE_FORM_RESPONSE_URL } from '../../../constant/apiEndPoints';
describe('ResponseCard', () => {
  it('should render the component', () => {
    render(<ResponseCard response={undefined} />);
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('Name')).toBeTruthy();
  });
  it('should render the component with response', () => {
    const response = {
      name: 'name',
      email: 'email',
      phone: 'phone',
    };
    const clickedFormResponseKeys = ['name', 'email', 'phone'];
    render(
      <ResponseCard
        response={response}
        clickedFormResponseKeys={clickedFormResponseKeys}
      />
    );
    expect(screen.getByText('name')).toBeTruthy();
    expect(screen.getByText('email')).toBeTruthy();
    expect(screen.getByText('phone')).toBeTruthy();
  });
  it('should call makeRequest with correct url when delete button is clicked', async () => {
    const response = {
      name: 'name',
      email: 'email',
      phone: 'phone',
    };
    const clickedFormResponseKeys = ['name', 'email', 'phone'];
    const id = '1';
    render(
      <ResponseCard
        response={response}
        clickedFormResponseKeys={clickedFormResponseKeys}
        id={id}
      />
    );
    const deleteButton = screen.getByAltText('delete');
    fireEvent.click(deleteButton);
    expect(makeRequest).toBeCalledWith(DELETE_FORM_RESPONSE_URL(id), navigate, {
      data: {
        responseId: parseInt(response.id),
      },
    });
  });
  it('should return null when makeRequest data is null', async () => {
    makeRequest.mockResolvedValue(null);
    const response = {
      name: 'name',
      email: 'email',
      phone: 'phone',
    };
    const clickedFormResponseKeys = ['name', 'email', 'phone'];
    const id = '1';
    render(
      <ResponseCard
        response={response}
        clickedFormResponseKeys={clickedFormResponseKeys}
        id={id}
      />
    );
    const deleteButton = screen.getByAltText('delete');
    fireEvent.click(deleteButton);
    expect(makeRequest).toBeCalledWith(DELETE_FORM_RESPONSE_URL(id), navigate, {
      data: {
        responseId: parseInt(response.id),
      },
    });
  });
});
