import React from 'react';
import './SideNavigator.css';
import searchIcon from '../../assets/icon-search-dark@2x.png';
import propTypes from 'prop-types';
function SideNavigator(props) {
  const [isContentBuilderClicked, setIsContentBuilderClicked] =
    React.useState(false);
  const handleContentBuilderClick = () => {
    setIsContentBuilderClicked(!isContentBuilderClicked);
    props.handleContentBuilderClick();
  };
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
            <li>Company_profile</li>
            <li>Company_profile</li>
            <li>Company_profile</li>
            <li>Company_profile</li>
            <li>Company_profile</li>
            <li>Company_profile</li>
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
