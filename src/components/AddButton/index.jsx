import React from 'react';
import './AddButton.css';
import propTypes from 'prop-types';
function AddButton(props) {
  return (
    <div onClick={props.handleNewTypeClick} className="add-button-container">
      <p>{props.name}</p>
    </div>
  );
}

export default AddButton;

AddButton.propTypes = {
  handleNewTypeClick: propTypes.func,
  name: propTypes.string,
};
