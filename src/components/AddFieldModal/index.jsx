import React, { useState } from 'react';
import './AddFieldModal.css';

import { ADD_FORM_FIELD_URL } from '../../constant/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest/makeRequest';
import propTypes from 'prop-types';

export default function AddFieldModal(props) {
  const navigate = useNavigate();
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('');
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFieldNameChange = (e) => {
    setFieldName(e.target.value);
  };

  const handleFieldTypeChange = (e) => {
    setFieldType(e.target.value);
  };

  const handleCreate = async () => {
    const data = await makeRequest(ADD_FORM_FIELD_URL(props.formId), navigate, {
      data: {
        [fieldName]: fieldType,
      },
    });
    if (data === null) return;
    setFieldName('');
    setFieldType('');
    toggleModal();
  };
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h4>Create a new field type</h4>
            </div>
            <div className="modal-body">
              <label htmlFor="name">FieldName</label>
              <input
                onChange={handleFieldNameChange}
                value={fieldName}
                type="formName"
                name="formName"
                id="fieldName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="fieldType"
              />
            </div>
            <div className="modal-footer">
              <button className="cancel" onClick={toggleModal}>
                Cancel
              </button>
              <button className="create" onClick={handleCreate}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

AddFieldModal.propTypes = {
  formId: propTypes.string,
};
