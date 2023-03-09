import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icon-search-dark@2x.png';
import editText from '../../assets/user-pencil-write-ui-education.png';
import {
  FormField,
  AddButton,
  FormNameCard,
  SideNavigator,
  Header,
} from '../../components';
const Name = 'Content Types';
function HomePage() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="home-page-container">
      <div className="home-page-side-nav">
        <SideNavigator />
      </div>
      <div className="home-page-content">
        <div className="home-page-header">
          <Header Name={Name} />
        </div>
        <div className="home-page-body">
          <div className="form-name-card-container">
            <div className="form-names-stats">
              <p>7 types</p>
              <img src={searchIcon} alt="search-icon" />
            </div>
            <AddButton />
            <FormNameCard />
            <FormNameCard />
            <FormNameCard />
            <FormNameCard />
            <FormNameCard />
            <FormNameCard />
          </div>
          <div className="form-details-container">
            <div className="form-detail-name">
              <h1>Company_profile</h1>
              <img src={editText} alt="editText" />
            </div>
            <div className="form-field-length">13 Fields</div>
            <AddButton />
            <FormField />
            <FormField />
            <FormField />
            <FormField />
            <FormField />
            <FormField />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
