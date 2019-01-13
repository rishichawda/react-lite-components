import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from '../core';

const Button = (props) => {
  const { children } = props;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

Button.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};

Button.defaultProps = {
  children: 'Default Text',
  h: null,
  w: null,
  bg: '#eee',
  m: null,
  p: '0.7%',
  borderRadius: '2px',
  border: 'none',
};

export default Button;
