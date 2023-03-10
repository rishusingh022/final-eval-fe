import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
function Header(props) {
  return <div className="header">{props.Name}</div>;
}
export default Header;

Header.propTypes = {
  Name: PropTypes.string.isRequired,
};
