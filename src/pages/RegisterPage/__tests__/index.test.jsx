import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import RegisterPage from '..';
import { REGISTER_URL } from '../../../constant/apiEndPoints';
import { makeAuthRequest } from '../../../utils/makeRequest/makeRequest';

jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('RegisterPage', () => {
  it('should render correctly with class Name login-container', () => {
    const { container } = render(<RegisterPage />);
    expect(container.querySelector('.login-container')).toBeTruthy();
  });
  it('should render correctly with h1 tag of Design APIs fast,', () => {
    const { container } = render(<RegisterPage />);
    expect(screen.getByText('Design APIs fast,')).toBeTruthy();
  });
  it('should render correctly with h1 tag of Manage Content easily.', () => {
    const { container } = render(<RegisterPage />);
    expect(screen.getByText('Manage Content easily.')).toBeTruthy();
  });
  it('should render correctly with h1 tag of Login to your CMS+ account', () => {
    const { container } = render(<RegisterPage />);
    expect(screen.getByText('Login to your CMS+ account')).toBeTruthy();
  });
  it('should render correctly with label tag of Email', () => {
    const { container } = render(<RegisterPage />);
    expect(screen.getByText('Email')).toBeTruthy();
  });
  it('should render correctly with label tag of Password', () => {
    const { container } = render(<RegisterPage />);
    expect(screen.getByText('Password')).toBeTruthy();
  });
  it('should render correctly with button tag of Register', () => {
    const { container } = render(<RegisterPage />);
    expect(screen.getByText('Register')).toBeTruthy();
  });
  it('should render correctly with input tag of email', () => {
    const { container } = render(<RegisterPage />);
    expect(container.querySelector('input[name="email"]')).toBeTruthy();
  });
  it('should render correctly with input tag of password', () => {
    const { container } = render(<RegisterPage />);
    expect(container.querySelector('input[name="password"]')).toBeTruthy();
  });
  // test the useEffect in which are calling the amke Request function
  it('should call makeAuthRequest function with REGISTER_URL', async () => {
    render(<RegisterPage />);
    // take the values of email and password
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    // fill the values of email and password
    fireEvent.change(email, { target: { value: 'rishusingh022@gmail.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    // click on the register button
    fireEvent.click(screen.getByText('Register'));
    // wait for the makeAuthRequest function to be called
    await waitFor(() => {
      makeAuthRequest(REGISTER_URL, mockedNavigate, {
        data: {
          email,
          password,
        },
      });
    });
  });
  it('should return null if the email is not valid', async () => {
    makeAuthRequest.mockResolvedValue(null);
    render(<RegisterPage />);
    // take the values of email and password
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    // fill the values of email and password
    fireEvent.change(email, { target: { value: 'rishusingh022gmail.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    // click on the register button
    fireEvent.click(screen.getByText('Register'));
    // wait for the makeAuthRequest function to be called
    makeAuthRequest.mockResolvedValue(null);
  });
});
