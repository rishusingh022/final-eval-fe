import React from 'react';
import './FormField.css';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@2x.png';
import editIcon from '../../assets/user-edit-text-message-note@2x.png';
function FormField() {
  return (
    <div className="form-field-container">
      <div className="form-field-type-label">Ab</div>
      <div className="form-field-input-container">
        <div className="form-field-input">
          <div className="form-field-name">Name</div>
          <div className="form-field-type">Text</div>
        </div>
        <div className="form-field-button">
          <img src={editIcon} alt="edit" />
          <img src={deleteIcon} alt="delete" />
        </div>
      </div>
    </div>
  );
}

export default FormField;
