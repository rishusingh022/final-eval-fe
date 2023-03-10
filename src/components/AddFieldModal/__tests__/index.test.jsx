import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ADD_FORM_FIELD_URL } from '../../../constant/apiEndPoints';
import { makeRequest } from '../../../utils/makeRequest/makeRequest';
import AddFieldModal from '..';
jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));
describe('AddFieldModal', () => {
  it('should render with title Create a new field type when Add new Entry is clicked', () => {
    render(<AddFieldModal formId={1} />);
    expect(screen.getByText('Create a new field type')).toBeTruthy();
  });
  it('should render with a input field for field name', () => {
    render(<AddFieldModal formId={1} />);
    expect(screen.getByText('FieldName')).toBeTruthy();
  });
  it('should render with a input field for field type', () => {
    render(<AddFieldModal formId={1} />);
    expect(screen.getByText('Type of field')).toBeTruthy();
  });
  it('should render with a button for create', () => {
    render(<AddFieldModal formId={1} />);
    expect(screen.getByText('Create')).toBeTruthy();
  });
  it('should render with a button for cancel', () => {
    render(<AddFieldModal formId={1} />);
    expect(screen.getByText('Cancel')).toBeTruthy();
  });
  it('should call makeRequest with correct url when create button is clicked', async () => {
    const { container } = render(<AddFieldModal formId={1} />);
    // on click of create button take the value of input field and call makeRequest
    const createButton = screen.getByText('Create');
    // get the fieldName by id and set the value
    const fieldName1 = container.querySelector('#fieldName');
    fireEvent.change(fieldName, { target: { value: 'text' } });
    // get the fieldType by id and set the value
    const fieldType = container.querySelector('#fieldType');
    fireEvent.change(fieldType, { target: { value: 'text' } });

    fireEvent.click(createButton);
    expect(makeRequest).toHaveBeenCalledWith(
      ADD_FORM_FIELD_URL(1),
      mockedNavigate,
      {
        [fieldName]: fieldType,
      }
    );
  });
  it('should return null when makeRequest data is null', async () => {
    const { container } = render(<AddFieldModal formId={1} />);
    // on click of create button take the value of input field and call makeRequest
    const createButton = screen.getByText('Create');
    // get the fieldName by id and set the value
    const fieldName = container.querySelector('#fieldName');
    fireEvent.change(fieldName, { target: { value: 'text' } });
    // get the fieldType by id and set the value
    const fieldType = container.querySelector('#fieldType');
    fireEvent.change(fieldType, { target: { value: 'text' } });

    fireEvent.click(createButton);
    expect(makeRequest).toHaveBeenCalledWith(
      ADD_FORM_FIELD_URL(1),
      mockedNavigate,
      {
        [fieldName]: fieldType,
      }
    );
  });
});
