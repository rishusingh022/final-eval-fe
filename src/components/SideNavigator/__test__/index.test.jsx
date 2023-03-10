import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import SideNavigator from '..';

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
});
