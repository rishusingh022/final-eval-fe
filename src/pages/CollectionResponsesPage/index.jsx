import React from 'react';
import './CollectionResponsesPage.css';
import { useNavigate } from 'react-router-dom';

import {
  SideNavigator,
  Header,
  ResponseCard,
  SideModal,
} from '../../components';
import { GET_ALL_FORM_RESPONSES_URL } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import {
  extractDataByFormName,
  getfirst4KeysFromObjectIfExits,
} from '../../utils/common/index';
let Name = 'Collection Types';
const demoKeys = ['id', 'name', 'website', 'contact'];
function CollectionResponses() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  });
  const [addNewEntry, setAddNewEntry] = React.useState(false);
  const [clickedformResponse, setClickedformResponse] = React.useState({});
  const [clickedFormResponseKeys, setClickedFormResponseKeys] = React.useState(
    []
  );
  const handleAddNewEntry = () => {
    setAddNewEntry(!addNewEntry);
  };

  const handleCollectionTypeClick = async (formNameid, collectionName) => {
    console.log(formNameid, collectionName);
    const data = await makeRequest(GET_ALL_FORM_RESPONSES_URL, navigate);
    if (data === null) return;
    const extractedData = extractDataByFormName(data, collectionName);
    setClickedformResponse(extractedData);
    setClickedFormResponseKeys(
      getfirst4KeysFromObjectIfExits(extractedData.formResponses[0])
    );
  };
  return (
    <div className="collection-page-container">
      <div className="collection-page-side-nav">
        <SideNavigator handleCollectionTypeClick={handleCollectionTypeClick} />
      </div>
      <div className="collection-page-content">
        <div className="collection-page-header">
          <Header
            Name={
              clickedformResponse.formName !== undefined
                ? clickedformResponse.formName
                : Name
            }
          />
        </div>
        <div className="collection-page-body">
          <div className="collection-page-body-header">
            <div className="collection-page-body-header-title">
              <h1>
                {' '}
                {clickedformResponse.formResponses !== undefined
                  ? clickedformResponse.formResponses.length
                  : 4}{' '}
                Entries Found
              </h1>
            </div>
            <div
              onClick={handleAddNewEntry}
              className="collection-page-body-header-button"
            >
              <div>Add New Entry</div>
            </div>
          </div>
          <div>
            <div className="response-field">
              {clickedFormResponseKeys.length === 0 &&
                demoKeys.map((key, index) => {
                  return <div key={index}>{key}</div>;
                })}
              {clickedFormResponseKeys &&
                Object.keys(clickedFormResponseKeys).map((key, index) => {
                  return <div key={index}>{clickedFormResponseKeys[key]}</div>;
                })}
            </div>
            {clickedformResponse.formResponses === undefined && (
              <>
                <ResponseCard />
                <ResponseCard />
                <ResponseCard />
                <ResponseCard />
              </>
            )}
            {clickedformResponse.formResponses !== undefined &&
              clickedformResponse.formResponses.map((response, index) => {
                return (
                  <ResponseCard
                    key={index}
                    response={response}
                    clickedFormResponseKeys={clickedFormResponseKeys}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {clickedformResponse.formResponses !== undefined && addNewEntry && (
        <SideModal
          ObjKeys={Object.keys(clickedformResponse.formResponses[0])}
          CollectionName={clickedformResponse.formName}
        />
      )}
    </div>
  );
}

export default CollectionResponses;
