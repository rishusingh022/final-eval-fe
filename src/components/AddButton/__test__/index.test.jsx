import { render } from '@testing-library/react';
import React from 'react';

import AddButton from '..';

describe('AddButton', () => {
  it('should render correctly with class Name add-button-container', () => {
    const { container } = render(<AddButton />);
    expect(container.querySelector('.add-button-container')).toBeTruthy();
  });
});
