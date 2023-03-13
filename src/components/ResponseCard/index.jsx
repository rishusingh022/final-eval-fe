import React from 'react';
import './ResponseCard.css';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@2x.png';
import editIcon from '../../assets/user-edit-text-message-note@2x.png';
import proptypes from 'prop-types';
const { navigate } = require('react-router-dom');
const { makeRequest } = require('../../utils/makeRequest/makeRequest');
const { DELETE_FORM_RESPONSE_URL } = require('../../constant/apiEndPoints');
function ResponseCard(props) {
  const { response, clickedFormResponseKeys, id } = props;
  const handleDelete = async () => {
    const data = await makeRequest(DELETE_FORM_RESPONSE_URL(id), navigate, {
      data: {
        responseId: parseInt(response.id),
      },
    });
    if (data === null) return;
  };
  return (
    <div className="response-class-container">
      <div className="response-item">
        {response === undefined && (
          <>
            <div>1</div>
            <div>Name</div>
            <div style={{ color: 'rgb(172,172,172)' }}>Text</div>
            <div style={{ color: 'rgb(172,172,172)' }}>Text</div>
          </>
        )}
        {response !== undefined &&
          clickedFormResponseKeys.map((key, index) => {
            return <div key={index}>{response[key]}</div>;
          })}
      </div>
      <div className="response-action-items">
        <img src={editIcon} alt="edit" />
        <img onClick={handleDelete} src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}
export default ResponseCard;

ResponseCard.propTypes = {
  response: proptypes.object,
  clickedFormResponseKeys: proptypes.object,
  id: proptypes.number,
};
