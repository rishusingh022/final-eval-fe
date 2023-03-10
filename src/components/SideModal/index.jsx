import React from 'react';
import './SideModal.css';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ADD_FORM_RESPONSE_URL } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest/makeRequest';

function SideModal(props) {
  const navigate = useNavigate();
  const { ObjKeys, CollectionName } = props;
  console.log(ObjKeys, CollectionName);
  const [modal, setModal] = React.useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [stateObj, setStateObj] = React.useState({});

  const handleAddResponse = async () => {
    const data = makeRequest(ADD_FORM_RESPONSE_URL, navigate, {
      data: {
        formName: CollectionName,
        formResponse: {
          ...stateObj,
        },
      },
    });
    console.log(data);
    toggleModal();
  };
  return (
    <>
      {modal && (
        <div className="side-modal">
          <div onClick={toggleModal} className="side-overlay"></div>
          <div className="side-modal-content">
            <div className="side-modal-header">
              <h4>Create a new {CollectionName} response</h4>
            </div>
            <div className="side-modal-body">
              {ObjKeys.map((key, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={key}>{key}</label>
                    <input
                      onChange={(e) =>
                        setStateObj({
                          ...stateObj,
                          [key]: e.target.value,
                        })
                      }
                      type={key}
                      name={key}
                    />
                  </div>
                );
              })}
            </div>
            <div className="side-modal-footer">
              <button className="side-cancel" onClick={toggleModal}>
                Cancel
              </button>
              <button onClick={handleAddResponse} className="side-create">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideModal;

SideModal.propTypes = {
  ObjKeys: propTypes.array,
  CollectionName: propTypes.string,
};
