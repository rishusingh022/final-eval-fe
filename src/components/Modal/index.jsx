import React, { useState } from 'react';
import './Modal.css';

export default function Modal() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
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
              <input type="email" name="email" id="email" />
            </div>
            <div className="modal-footer">
              <button className="cancel" onClick={toggleModal}>
                Cancel
              </button>
              <button className="create" onClick={toggleModal}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
