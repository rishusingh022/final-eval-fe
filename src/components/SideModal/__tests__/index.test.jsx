import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ADD_FORM_RESPONSE_URL } from '../../../constant/apiEndPoints';
import { makeRequest } from '../../../utils/makeRequest/makeRequest';
import SideModal from '..';
jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('SideModal', () => {
  it('should render the component', () => {
    const ObjKeys = ['name', 'email', 'phone'];
    const CollectionName = 'CollectionName';
    render(<SideModal ObjKeys={ObjKeys} CollectionName={CollectionName} />);
    expect(
      screen.getByText('Create a new CollectionName response')
    ).toBeTruthy();
    expect(screen.getByText('name')).toBeTruthy();
    expect(screen.getByText('email')).toBeTruthy();
    expect(screen.getByText('phone')).toBeTruthy();
  });
  it('should render the component and call handleAddResponse', () => {
    const ObjKeys = ['name', 'email', 'phone'];
    const CollectionName = 'CollectionName';
    render(<SideModal ObjKeys={ObjKeys} CollectionName={CollectionName} />);
    fireEvent.change(screen.getByTestId('name'), {
      target: { value: 'name' },
    });
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'email' },
    });
    fireEvent.change(screen.getByTestId('phone'), {
      target: { value: 'phone' },
    });

    fireEvent.click(screen.getByText('Add'));
    expect(makeRequest).toBeCalledWith(ADD_FORM_RESPONSE_URL, mockedNavigate, {
      data: {
        formName: 'CollectionName',
        formResponse: {
          name: 'name',
          email: 'email',
          phone: 'phone',
        },
      },
    });
  });
});
