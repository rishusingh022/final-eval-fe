import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import SideNavigator from '..';
import searchIcon from '../../../assets/icon-search-dark@2x.png';
import { GET_ALL_COLLECTIONS_URL } from '../../../constant/apiEndPoints';
import { makeRequest } from '../../../utils/makeRequest/makeRequest';
import { extractDataByFormName } from '../../../utils/common';

jest.mock('../../../utils/makeRequest/makeRequest');
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('SideNavigator', () => {
  it('should render SideNavigator', async () => {
    handleContentBuilderClick = jest.fn();
    handleCollectionTypeClick = jest.fn();
    const data = [
      {
        id: '2922d0c8-afc0-49f4-8f22-3e58aeeb7774',
        formName: 'Person',
        formFields: [
          {
            id: 1,
            fieldName: 'string',
          },
          {
            id: 2,
            fieldName: 'Name',
          },
        ],
        createdAt: '2023-03-09T23:07:56.397Z',
        updatedAt: '2023-03-11T19:35:32.415Z',
      },
    ];
    makeRequest.mockResolvedValue(data);
    const { container } = render(
      <SideNavigator
        handleContentBuilderClick={handleContentBuilderClick}
        handleCollectionTypeClick={handleCollectionTypeClick}
      />
    );
    await waitFor(() => {
      expect(makeRequest).toHaveBeenCalledWith(
        GET_ALL_COLLECTIONS_URL,
        mockedNavigate
      );
    });
    const collectionTypes = extractDataByFormName(data);
    expect(screen.getByText('Collection Types')).toBeTruthy();
    expect(screen.getByAltText('search-icon')).toBeTruthy();
  });
});
