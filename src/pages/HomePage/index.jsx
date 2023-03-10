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
  AddFieldModal,
} from '../../components';
let Name = 'Content Builder';
const {
  extractFieldNamesFromData,
  extractFormName,
} = require('../../utils/common/index');

import { makeRequest } from '../../utils/makeRequest/makeRequest';
import { GET_ALL_COLLECTIONS_URL } from '../../constant/apiEndPoints';

function HomePage() {
  const navigate = useNavigate();
  const [isContentBuilderClicked, setIsContentBuilderClicked] =
    React.useState(false);
  const [allFormData, setAllFormData] = React.useState({});
  const [isFormFieldsClicked, setIsFormFieldsClicked] = React.useState(false);
  const [FormFields, setFormFields] = React.useState([]);
  const [formName, setFormName] = React.useState('');
  const [formId, setFormId] = React.useState('');
  const [isNewTypeCLicked, setIsNewTypeClicked] = React.useState(false);
  const [isAnotherFieldClicked, setIsAnotherFieldClicked] =
    React.useState(false);

  const handleContentBuilderClick = (data) => {
    setAllFormData(data);
    setIsContentBuilderClicked(!isContentBuilderClicked);
  };

  const handleFormFieldsClick = (formId) => {
    setFormId(formId);
    setFormName(extractFormName(allFormData, formId));
    setFormFields(extractFieldNamesFromData(allFormData, formId));
    setIsFormFieldsClicked(!isFormFieldsClicked);
  };

  const handleNewTypeClick = () => {
    setIsNewTypeClicked(!isNewTypeCLicked);
  };

  const handleAnotherFieldClick = () => {
    setIsAnotherFieldClicked(!isAnotherFieldClicked);
  };
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
    const getAllCollections = async () => {
      const data = await makeRequest(GET_ALL_COLLECTIONS_URL, navigate);
      if (data === null) return;
      setAllFormData(data);
      setFormFields(extractFieldNamesFromData(allFormData, formId));
    };
    getAllCollections();
  }, [allFormData]);
  return (
    <div className="home-page-container">
      <div className="home-page-side-nav">
        <SideNavigator handleContentBuilderClick={handleContentBuilderClick} />
      </div>
      <div className="home-page-content">
        <div className="home-page-header">
          <Header Name={Name} />
        </div>
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
                <AddButton
                  handleAnotherFieldClick={handleAnotherFieldClick}
                  name={'Add another field'}
                />
                {FormFields.map((data, index) => {
                  const copyData = { ...data };
                  delete copyData.id;
                  return (
                    <FormField
                      key={index}
                      formId={formId}
                      fieldName={Object.keys(copyData)[0]}
                      fieldType={Object.values(copyData)[0]}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      {isNewTypeCLicked && <Modal />}
      {isAnotherFieldClicked && <AddFieldModal formId={formId} />}
    </div>
  );
}

export default HomePage;
