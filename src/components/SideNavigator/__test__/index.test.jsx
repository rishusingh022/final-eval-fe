import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import SideNavigator from '..';
import searchIcon from '../../../assets/icon-search-dark@2x.png';
import { GET_ALL_COLLECTIONS_URL } from '../../../constant/apiEndPoints';
import { makeRequest } from '../../../utils/makeRequest/makeRequest';
import { extractDataByFormName } from '../../../utils/common';

jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('SideNavigator', () => {
  it('should render correctly with class Name navigation-container', () => {
    const { container } = render(<SideNavigator />);
    expect(container.querySelector('.navigation-container')).toBeTruthy();
  });
  it('should render correctly with h1 tag of CMS+', () => {
    const { container } = render(<SideNavigator />);
    expect(screen.getByText('CMS+')).toBeTruthy();
  });
  it('should render correctly with search icon', () => {
    const { container } = render(<SideNavigator />);
    expect(container.querySelector('img')).toBeTruthy();
  });
  it('should render correctly with CONTENT TYPE BUILDER text', () => {
    const { container } = render(<SideNavigator />);
    expect(screen.getByText('CONTENT TYPE BUILDER')).toBeTruthy();
  });
  it('should render correctly with Collection Types text', () => {
    const { container } = render(<SideNavigator />);
    expect(screen.getByText('Collection Types')).toBeTruthy();
  });
  // test the useEffect in which are calling the amke Request function
  it('should call makeRequest function with GET_ALL_COLLECTIONS_URL', async () => {
    render(<SideNavigator />);
    await waitFor(() => {
      expect(makeRequest).toHaveBeenCalledWith(
        GET_ALL_COLLECTIONS_URL,
        mockedNavigate
      );
    });
  });
});
