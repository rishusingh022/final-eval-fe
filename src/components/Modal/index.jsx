import React, { useState } from 'react';
import './Modal.css';

import { CREATE_FORM_URL } from '../../constant/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest/makeRequest';

export default function Modal() {
  const navigate = useNavigate();
  const [formName, setFormName] = useState('');
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleCreate = async () => {
    const data = await makeRequest(CREATE_FORM_URL, navigate, {
      data: {
        formName: formName,
      },
    });
    if (data === null) return;
    setFormName('');
    toggleModal();
  };
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h4>Create a new content type</h4>
            </div>
            <div className="modal-body">
              <label htmlFor="name">Name of the content type</label>
              <input
                onChange={handleNameChange}
                value={formName}
                type="formName"
                name="formName"
                id="formName"
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
