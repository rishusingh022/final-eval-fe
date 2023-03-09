import React from 'react';
import './FormNameCard.css';
function FormNameCard() {
  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
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
      <div className="form-name">Type 2</div>
      <div className="form-name-responses">13</div>
    </div>
  );
}

export default FormNameCard;
