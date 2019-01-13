import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from '../core';
/* eslint-disable no-restricted-globals */


const Input = props => <InputWrapper {...props} />;

Input.propTypes = {
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  p: PropTypes.string,
  focusColor: PropTypes.string,
};

Input.defaultProps = {
  h: null,
  w: null,
  bg: '#eee',
  m: null,
  placeholder: 'Type here',
  border: 'none',
  borderRadius: null,
  p: '1%',
  focusColor: 'blue',
};

export default Input;
