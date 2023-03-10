import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import AddButton from '..';

describe('AddButton', () => {
  it('should render correctly with name', () => {
    render(<AddButton name="Add New Entry" />);
    expect(screen.getByText('Add New Entry')).toBeTruthy();
  });
  it('should make call to handleAnotherFieldClick when handleNewTypeClick is null', () => {
    const handleNewTypeClick = null;
    const handleAnotherFieldClick = jest.fn();
    render(
      <AddButton
        name="Add Another Field"
        handleNewTypeClick={handleNewTypeClick}
        handleAnotherFieldClick={handleAnotherFieldClick}
      />
    );
    fireEvent.click(screen.getByText('Add Another Field'));
    expect(handleAnotherFieldClick).toHaveBeenCalled();
  });
  const handleAnotherFieldClick = null;
  it('should make call to handleNewTypeClick when  is null ', () => {
    const handleNewTypeClick = jest.fn();
    const handleAnotherFieldClick = null;
    render(
      <AddButton
        name="New Type"
        handleNewTypeClick={handleNewTypeClick}
        handleAnotherFieldClick={handleAnotherFieldClick}
      />
    );
    fireEvent.click(screen.getByText('New Type'));
    expect(handleNewTypeClick).toHaveBeenCalled();
  });
});
