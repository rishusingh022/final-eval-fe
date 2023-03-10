import React from 'react';
import './CollectionResponsesPage.css';
import { useNavigate } from 'react-router-dom';

import {
  SideNavigator,
  Header,
  ResponseCard,
  SideModal,
} from '../../components';

import { makeRequest } from '../../utils/makeRequest/makeRequest';
let Name = 'Content Builder';
function CollectionResponses() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  });
  const [addNewEntry, setAddNewEntry] = React.useState(false);

  const handleAddNewEntry = () => {
    setAddNewEntry(!addNewEntry);
  };
  return (
    <div className="collection-page-container">
      <div className="collection-page-side-nav">
        <SideNavigator />
      </div>
      <div className="collection-page-content">
        <div className="collection-page-header">
          <Header Name={Name} />
        </div>
        <div className="collection-page-body">
          <div className="collection-page-body-header">
            <div className="collection-page-body-header-title">
              <h1>13 Entries Found</h1>
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
              <div>ID</div>
              <div>Name</div>
              <div>Website</div>
              <div>Contact</div>
            </div>
            <ResponseCard />
            <ResponseCard />
            <ResponseCard />
            <ResponseCard />
            <ResponseCard />
            <ResponseCard />
          </div>
        </div>
      </div>
      {addNewEntry && <SideModal />}
    </div>
  );
}

export default CollectionResponses;
