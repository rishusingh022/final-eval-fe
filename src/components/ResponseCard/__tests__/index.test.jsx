import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ResponseCard from '..';

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
});
