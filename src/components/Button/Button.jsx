import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styles';

const Button = ({ onClick, children }) => {
  return <LoadMoreButton onClick={onClick}>{children}</LoadMoreButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;