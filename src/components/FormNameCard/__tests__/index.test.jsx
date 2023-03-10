import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FormNameCard from '..';
describe('FormNameCard', () => {
  it('should render the component', () => {
    const handleFormFieldsClick = jest.fn();
    render(
      <FormNameCard
        handleFormFieldsClick={handleFormFieldsClick}
        formName={'Name'}
        formfieldsCount={6}
        id={1}
      />
    );
    expect(screen.getByText('Name')).toBeTruthy();
    expect(screen.getByText('6')).toBeTruthy();
  });
  it('should call handleFormFieldsClick when clicked', () => {
    const handleFormFieldsClick = jest.fn();
    render(
      <FormNameCard
        handleFormFieldsClick={handleFormFieldsClick}
        formName={'Name'}
        formfieldsCount={6}
        id={1}
      />
    );
    // get by form-name-container and click
    fireEvent.click(screen.getByText('Name'));
    expect(handleFormFieldsClick).toHaveBeenCalledWith(1);
  });
});
