import React from 'react';
import './SideModal.css';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function SideModal() {
  const navigate = useNavigate();
  const [fieldName, setFieldName] = React.useState('');
  const [fieldType, setFieldType] = React.useState('');
  const [modal, setModal] = React.useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFieldNameChange = (e) => {
    setFieldName(e.target.value);
  };

  const handleFieldTypeChange = (e) => {
    setFieldType(e.target.value);
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
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
              <label htmlFor="name">Type of field</label>
              <input
                onChange={handleFieldTypeChange}
                value={fieldType}
                type="formName"
                name="formName"
                id="formName"
              />
            </div>
            <div className="modal-footer">
              <button className="cancel" onClick={toggleModal}>
                Cancel
              </button>
              <button className="create">Add</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideModal;
