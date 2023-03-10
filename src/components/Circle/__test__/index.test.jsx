import { render, screen } from '@testing-library/react';
import React from 'react';
import Circle from '..';
describe('AddButton', () => {
  it('should render correctly with class Name circle', () => {
    // add snapshot test
    const { container } = render(<Circle />);
    expect(container.querySelector('.circle')).toBeTruthy();
  });
});
