import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import {
  DELETE_FORM_FIELD_URL,
  EDIT_FORM_FIELD_URL,
} from '../../../constant/apiEndPoints';
import { makeRequest } from '../../../utils/makeRequest/makeRequest';
import AddFieldModal from '..';
jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('FormField', () => {
  it('should render the component', () => {
    render(
      <AddFieldModal id={1} fieldName="Name" fieldType="Text" formId="1" />
    );
    expect(screen.getByText('Name')).toBeTruthy();
    expect(screen.getByText('Text')).toBeTruthy();
    expect(screen.getByAltText('edit')).toBeTruthy();
    expect(screen.getByAltText('delete')).toBeTruthy();
  });

  it('should call makeRequest with correct params when delete button is clicked', () => {
    render(
      <AddFieldModal id={1} fieldName="Name" fieldType="Text" formId="1" />
    );
    fireEvent.click(screen.getByAltText('delete'));
    expect(makeRequest).toHaveBeenCalledWith(
      DELETE_FORM_FIELD_URL('1'),
      mockedNavigate,
      {
        data: {
          fieldName: 'Text',
        },
      }
    );
  });
  it('should return null when delete makeRequest returns null', async () => {
    makeRequest.mockReturnValue(null);
    render(
      <AddFieldModal id={1} fieldName="Name" fieldType="Text" formId="1" />
    );
    fireEvent.click(screen.getByAltText('delete'));
    expect(makeRequest).toHaveBeenCalledWith(
      DELETE_FORM_FIELD_URL('1'),
      mockedNavigate,
      {
        data: {
          fieldName: 'Text',
        },
      }
    );
  });

  it('should call makeRequest with correct params when edit button is clicked', () => {
    render(
      <AddFieldModal id={1} fieldName="Name" fieldType="Text" formId="1" />
    );
    fireEvent.click(screen.getByAltText('edit'));
    expect(makeRequest).toHaveBeenCalledWith(
      EDIT_FORM_FIELD_URL('1', 1),
      mockedNavigate,
      {
        data: {
          fieldName: 'Number',
        },
      }
    );
  });
  it('should return null when edit makeRequest returns null', async () => {
    makeRequest.mockReturnValue(null);
    render(
      <AddFieldModal id={1} fieldName="Name" fieldType="Text" formId="1" />
    );
    fireEvent.click(screen.getByAltText('edit'));
    expect(makeRequest).toHaveBeenCalledWith(
      EDIT_FORM_FIELD_URL('1', 1),
      mockedNavigate,
      {
        data: {
          fieldName: 'Number',
        },
      }
    );
  });
});
