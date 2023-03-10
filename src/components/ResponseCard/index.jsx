import React from 'react';
import './ResponseCard.css';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@2x.png';
import editIcon from '../../assets/user-edit-text-message-note@2x.png';
function ResponseCard() {
  return (
    <div className="response-class-container">
      <div className="response-item">
        <div>1</div>
        <div>Name</div>
        <div style={{ color: 'rgb(172,172,172)' }}>Text</div>
        <div style={{ color: 'rgb(172,172,172)' }}>Text</div>
      </div>
      <div className="response-action-items">
        <img src={editIcon} alt="edit" />
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}
export default ResponseCard;
