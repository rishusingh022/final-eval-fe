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
  Modal,
} from '../../components';
const Name = 'Content Types';
const {
  extractFieldNamesFromData,
  extractFormName,
} = require('../../utils/common/index');
function HomePage() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  const [isContentBuilderClicked, setIsContentBuilderClicked] =
    React.useState(false);
  const [allFormData, setAllFormData] = React.useState({});
  const handleContentBuilderClick = (data) => {
    setAllFormData(data);
    console.log(data);
    setIsContentBuilderClicked(!isContentBuilderClicked);
  };
  const [isFormFieldsClicked, setIsFormFieldsClicked] = React.useState(false);
  const [FormFields, setFormFields] = React.useState([]);
  const [formName, setFormName] = React.useState('');
  const handleFormFieldsClick = (formId) => {
    setFormName(extractFormName(allFormData, formId));
    setFormFields(extractFieldNamesFromData(allFormData, formId));
    setIsFormFieldsClicked(!isFormFieldsClicked);
  };

  const [isNewTypeCLicked, setIsNewTypeClicked] = React.useState(false);
  const handleNewTypeClick = () => {
    setIsNewTypeClicked(!isNewTypeCLicked);
  };
  return (
    <div className="home-page-container">
      <div className="home-page-side-nav">
        <SideNavigator handleContentBuilderClick={handleContentBuilderClick} />
      </div>
      <div className="home-page-content">
        <div className="home-page-header">
          <Header Name={Name} />
        </div>
        {isNewTypeCLicked && <Modal />}
        <div className="home-page-body">
          <div className="form-name-card-container">
            {isContentBuilderClicked && (
              <>
                <div className="form-names-stats">
                  <p>7 types</p>
                  <img src={searchIcon} alt="search-icon" />
                </div>
                <AddButton
                  handleNewTypeClick={handleNewTypeClick}
                  name={'+New Types'}
                />
                {allFormData.map((data, index) => {
                  return (
                    <FormNameCard
                      handleFormFieldsClick={handleFormFieldsClick}
                      key={index}
                      id={data.id}
                      formName={data.formName}
                      formfieldsCount={data.formFields.length}
                    />
                  );
                })}
              </>
            )}
          </div>
          <div className="form-details-container">
            {isContentBuilderClicked && isFormFieldsClicked && (
              <>
                <div className="form-detail-name">
                  <h1>{formName}</h1>
                  <img src={editText} alt="editText" />
                </div>
                <div className="form-field-length">13 Fields</div>
                <AddButton />
                {FormFields.map((data, index) => {
                  const copyData = { ...data };
                  delete copyData.id;
                  return (
                    <FormField
                      key={index}
                      id={data.id}
                      fieldName={Object.keys(copyData)[0]}
                      fieldType={Object.keys(copyData)[1]}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
