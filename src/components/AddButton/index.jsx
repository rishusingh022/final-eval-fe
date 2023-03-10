import React from 'react';
import './AddButton.css';
import propTypes from 'prop-types';
function AddButton(props) {
  const { handleNewTypeClick, name, handleAnotherFieldClick } = props;
  const handleAddButtonClick = () => {
    if (handleNewTypeClick) {
      handleNewTypeClick();
    }
    if (handleAnotherFieldClick) {
      handleAnotherFieldClick();
    }
  };
  return (
    <div onClick={handleAddButtonClick} className="add-button-container">
      <p>{props.name}</p>
    </div>
  );
}

export default AddButton;

AddButton.propTypes = {
  handleNewTypeClick: propTypes.func,
  name: propTypes.string,
  handleAnotherFieldClick: propTypes.func,
};
