import React from 'react';
import './SideNavigator.css';
import searchIcon from '../../assets/icon-search-dark@2x.png';
function SideNavigator() {
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
        <div className="content-type-builder">
          <p>CONTENT TYPE BUILDER</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavigator;
