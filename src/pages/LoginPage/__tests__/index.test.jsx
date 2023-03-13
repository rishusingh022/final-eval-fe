import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import LoginPage from '..';

import { LOGIN_URL } from '../../../constant/apiEndPoints';
import { makeAuthRequest } from '../../../utils/makeRequest/makeRequest';

jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));
// mock local storage for testing
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
describe('LoginPage', () => {
  it('should render correctly with class Name login-container', () => {
    const { container } = render(<LoginPage />);
    expect(container.querySelector('.login-container')).toBeTruthy();
  });
  it('should render correctly with h1 tag of Design APIs fast,', () => {
    const { container } = render(<LoginPage />);
    expect(screen.getByText('Design APIs fast,')).toBeTruthy();
  });
  it('should render correctly with h1 tag of Manage Content easily.', () => {
    const { container } = render(<LoginPage />);
    expect(screen.getByText('Manage Content easily.')).toBeTruthy();
  });
  it('should render correctly with h1 tag of Login to your CMS+ account', () => {
    const { container } = render(<LoginPage />);
    expect(screen.getByText('Login to your CMS+ account')).toBeTruthy();
  });
  it('should render correctly with label tag of Email', () => {
    const { container } = render(<LoginPage />);
    expect(screen.getByText('Email')).toBeTruthy();
  });
  it('should render correctly with label tag of Password', () => {
    const { container } = render(<LoginPage />);
    expect(screen.getByText('Password')).toBeTruthy();
  });
  it('should render correctly with button tag of Login', () => {
    const { container } = render(<LoginPage />);
    expect(screen.getByText('Login')).toBeTruthy();
  });
  it('should render correctly with input tag of email', () => {
    const { container } = render(<LoginPage />);
    expect(container.querySelector('input[name="email"]')).toBeTruthy();
  });
  it('should render correctly with input tag of password', () => {
    const { container } = render(<LoginPage />);
    expect(container.querySelector('input[name="password"]')).toBeTruthy();
  });
  // test the useEffect in which are calling the amke Request function
  it('should call makeAuthRequest function with LOGIN_URL', async () => {
    makeAuthRequest.mockResolvedValue({ data: 'token' });
    render(<LoginPage />);
    // take the values of email and password
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    // fill the values of email and password
    fireEvent.change(email, { target: { value: 'rishusingh022@gmail.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.click(screen.getByText('Login'));
    await waitFor(() => {
      makeAuthRequest(LOGIN_URL, mockedNavigate, {
        data: {
          email,
          password,
        },
      });
    });
  });
  it('should return null if makeAuthRequest function return null', async () => {
    makeAuthRequest.mockResolvedValue(null);
    render(<LoginPage />);
    // take the values of email and password
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    // fill the values of email and password
    fireEvent.change(email, { target: { value: 'rishusingh022@gmail.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.click(screen.getByText('Login'));
    await waitFor(() => {
      makeAuthRequest(LOGIN_URL, mockedNavigate, {
        data: {
          email,
          password,
        },
      });
    });
  });
});
