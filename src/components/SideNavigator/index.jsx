import React from 'react';
import './SideNavigator.css';
import searchIcon from '../../assets/icon-search-dark@2x.png';
import propTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_COLLECTIONS_URL } from '../../constant/apiEndPoints';
import { extractFormNameFromData } from '../../utils/common/index';

function SideNavigator(props) {
  const navigate = useNavigate();
  const [isContentBuilderClicked, setIsContentBuilderClicked] =
    React.useState(false);
  const [collectionTypes, setCollectionTypes] = React.useState([]);
  const handleContentBuilderClick = () => {
    setIsContentBuilderClicked(!isContentBuilderClicked);
    props.handleContentBuilderClick();
  };
  React.useEffect(() => {
    const getAllCollections = async () => {
      const data = await makeRequest(GET_ALL_COLLECTIONS_URL, navigate);
      if (data === null) return;
      const collectionTypes = extractFormNameFromData(data);
      setCollectionTypes(collectionTypes);
    };
    getAllCollections();
  }, [navigate]);

  return (
    <div className="navigation-container">
      <div className="navigation-header">
        <h1>CMS+</h1>
      </div>
      <div className="navigation-body">
        <div className="collection-types">
          <div className="collection-type-header">
            <h3>Collection Types</h3>
            <img src={searchIcon} alt="search-icon" />
          </div>
          <div className="collection-type-body">
            {collectionTypes.map((collectionType, index) => (
              <li key={index}>{collectionType}</li>
            ))}
          </div>
        </div>
        <div
          onClick={handleContentBuilderClick}
          style={{ background: isContentBuilderClicked ? 'black' : 'none' }}
          className="content-type-builder"
        >
          <p>CONTENT TYPE BUILDER</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavigator;

SideNavigator.propTypes = {
  handleContentBuilderClick: propTypes.func,
};
