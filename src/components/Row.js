import React from 'react';
import PropTypes from 'prop-types';
import { atoms } from '../core';

/* eslint-disable no-restricted-globals */


const Row = (props) => {
  const { children } = props;
  return (
    <atoms.RowWrapper {...props}>
      {children}
    </atoms.RowWrapper>
  );
};

Row.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  h: null,
  w: '100%',
  bg: null,
  m: null,
};

export default Row;
