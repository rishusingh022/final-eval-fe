import React from 'react';
import './FormNameCard.css';
import propTypes from 'prop-types';
function FormNameCard(props) {
  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    props.handleFormFieldsClick(props.id);
    setClicked(!clicked);
  };
  return (
    <div
      style={{
        background: clicked ? 'rgb(79, 33, 198)' : 'white',
        color: clicked ? 'white' : 'black',
      }}
      onClick={handleClick}
      className="form-name-container"
    >
      <div className="form-name">{props.formName}</div>
      <div className="form-name-responses">{props.formfieldsCount}</div>
    </div>
  );
}

export default FormNameCard;

FormNameCard.propTypes = {
  handleFormFieldsClick: propTypes.func.isRequired,
  formName: propTypes.string.isRequired,
  formfieldsCount: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
};
