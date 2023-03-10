import React from 'react';
import './FormField.css';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@2x.png';
import editIcon from '../../assets/user-edit-text-message-note@2x.png';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { DELETE_FORM_FIELD_URL } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest/makeRequest';

function FormField(props) {
  const { id, fieldName, fieldType, formId } = props;
  const navigate = useNavigate();

  const handleDelete = async () => {
    const data = await makeRequest(DELETE_FORM_FIELD_URL(formId), navigate, {
      data: {
        fieldName: fieldType,
      },
    });
    if (data === null) return;
  };

  return (
    <div className="form-field-container">
      <div className="form-field-type-label">Ab</div>
      <div className="form-field-input-container">
        <div className="form-field-input">
          <div className="form-field-name">{props.fieldName}</div>
          <div className="form-field-type">{props.fieldType}</div>
        </div>
        <div className="form-field-button">
          <img src={editIcon} alt="edit" />
          <img onClick={handleDelete} src={deleteIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
}

export default FormField;

FormField.propTypes = {
  id: propTypes.number,
  fieldName: propTypes.string,
  fieldType: propTypes.string,
  formId: propTypes.string,
};
