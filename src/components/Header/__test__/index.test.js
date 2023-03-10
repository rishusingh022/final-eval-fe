import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '..';

describe('Header', () => {
  it('should show Content Types heading initially when the component is rendered', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('.header')).toBeTruthy();
  });
});
